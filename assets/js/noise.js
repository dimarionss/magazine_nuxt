export default class Noise {

    constructor(container = 'body', options = {}) {
        // options
        this.tileSize = (options.tileSize) ? options.tileSize : 150;
        this.classList = (options.classList) ? options.classList : false;
        // DOM
        this.container = document.querySelector(container);
        this.canvas = document.createElement("canvas");
        this.tile = document.createElement("canvas");
        // Helper
        this.ctx = this.canvas.getContext("2d");
        this.contextTile = this.tile.getContext("2d");
        // Init
        this._init();
    }

    _init() {
        // add Classes
        if(this.classList.length) {
            for(let i = 0; i < this.classList.length; ++i) {
                this.canvas.classList.add(this.classList[i]);
            }
        }


        this.container.appendChild(this.canvas);
        this.tile.width = this.tileSize;
        this.tile.height = this.tileSize;

        this._resize();
        // events
        window.addEventListener("resize", this._resize.bind(this));
        // animate
        window.requestAnimationFrame(this._render.bind(this))
        // TweenLite.ticker.addEventListener("tick", this._render.bind(this));
    }

    _resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    _render() {
        this._updateNoise();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 0.1;
        for (let x = 0; x < window.innerWidth; x+= this.tileSize) {
            for (let y = 0; y < window.innerHeight; y+= this.tileSize) {
                this.ctx.drawImage(this.tile, x, y, this.tileSize, this.tileSize);
            };
        };
        window.requestAnimationFrame(this._render.bind(this))
    }

    _updateNoise() {
        const pixels = new ImageData(this.tileSize, this.tileSize);
        for (let i = 0; i < pixels.data.length; i += 4) {
            const grayRandom = Math.random() * 150;
            pixels.data[i] = grayRandom;
            pixels.data[i + 1] = grayRandom;
            pixels.data[i + 2] = grayRandom;
            pixels.data[i + 3] = 255;
        }
        this.contextTile.putImageData(pixels, 0, 0);
    }
}

