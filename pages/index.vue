<template>
  <div class="magazine-wrap">
    <div class="container">
      <Flip />
      <Modal v-if="dialogVisible" :modalContent="modalContentSend" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default_nonoise',
  data() {
    return {
      dialogVisible: false,
      modalContentSend: {},
      pagesMagazine: [
        {
          img: require('@/assets/img/1.jpeg'),
          title:
            'Хочешь быть сногсшибательной, но при этом не потерять свою индивидуальность? Тогда тебе ко мне.',
          text: 'Я дипломированный стилист- визажист. Создам гармоничный образ для Вас. Первым клиентам скидка 10%Работаю на профессиональной косметике. Стойкость гарантирую. Выполняю чистый макияж, что фотошоп не понадобится)) Свадебный, выпускной, вечерний, на фотосессию, дневной, детский, креативный макияж. Прически, укладки, плетение. Работаю в официальном составе визажистов на UkraineFashionWeek, OdessaFashionWeek, Ukrainian Fashion Industry Awards, сотрудничаю с глянцевыми журналами. Помогаю проработать образ. Выезжаю в любую точку города или работаю в салоне. Буду рада знакомству',
          phone: '+380685694388',
          sale: false,
          adress: false,
          instagram: 'https://www.instagram.com/alexa.kovalenko_makeup/?hl=ru',
          facebook: false,
          tiktok: false,
          telegram: false,
          site: false,
        },
        {
          img: require('@/assets/img/2.jpg'),
          title: '«Pro» — ЦИФРОВАЯ ВИТНАЯ КАРТА',
          text: 'Предлагаем Вам новый, уникальный и эффективный продукт для бизнеса и не только. Вы пользуетесь бумажными визитными картами? Забудьте теперь о них навсегда. Не нужно больше тратить деньги на печать ненужной макулатуры. Ведь одна цифровая карта «pro» заменит Вам 100.000 бумажных визиток. Нереальная экономия!',
          phone: false,
          sale: 'АКЦИЯ 3+1 приобретите цифровую визитку себе, друзьям, родственникам и коллегам. (Акция 3+1 действует на все Карты) Ждем от Вас обратной связи.',
          adress: false,
          instagram: 'https://instagram.com/pro.ukr?utm_medium=copy_link',
          facebook: false,
          tiktok: false,
          telegram: false,
          site: false,
        },
        {
          img: require('@/assets/img/3.jpeg'),
          title:
            'Всем привет . Меня зовут Юлия и я основатель магазина свадебных и вечерних нарядов «Julia»',
          text: 'Если вы будущая невеста, выпускница или мама маленькой принцессы, то у меня для вас есть свадебные, выпускные, вечерние и детские платья, а также все свадебные аксессуары ( фата, шубки, диадемы👑, украшения💍, рушныки, корзины, подушечки под кольца, бокалы🥂, бутоньерки🌹, свечи и много другое) Классика и новые стили для истинных ценителей качества, эксклюзивности и красоты . Продажа, прокат и очень доступные цены. Также есть услуги:• химчистка• ремонт• реставрация• глажка• реализация• индивидуальный пошив. Подписывайтесь на мою страницу в Инстаграм',
          phone: '380679018366',
          sale: 'Я часто провожу GIVEAWEY совместно с классными фотографами, стилистами и журналами нашего города. Следи за предложениями и розыгрышами и может быть именно ты станешь следующим победителем 🤗💋💗',
          adress: 'Щепкина 1, рынок 44 квартала.',
          instagram: 'https://www.instagram.com/julia_dreams_wedding/?hl=ru',
          facebook: false,
          tiktok: false,
          telegram: false,
          site: false,
        },
        {
          img: require('@/assets/img/4.jpeg'),
          title: 'Студия красоты и здоровья «Vera»',
          text: 'Студия где твоё тело в руках специалистов с 👩‍⚕️медицинским образованием.  Уже после 5 посещения в твоём теле произойдут положительные изменения.',
          phone: '+380989818087',
          sale: '-10% на курс массажа',
          adress: false,
          instagram: 'https://www.instagram.com/vera_massagekr/?hl=ru',
          facebook: false,
          tiktok: false,
          telegram: false,
          site: false,
        },
        {
          img: require('@/assets/img/5.jpeg'),
          title: '#ВЕДУЩАЯТВОЕГОПРАЗДНИКА',
          text: 'Сценарист, автор творческих проектов',
          phone: '+380989890522',
          sale: false,
          adress: false,
          instagram: 'https://instagram.com/olya_lya_land?utm_medium=copy_link',
          facebook: 'https://www.facebook.com/olha.antonovich',
          tiktok: false,
          telegram: false,
          site: false,
        },
      ],
    }
  },
  head() {
    return {
      script: [
        {
          src: '/js/via.js',
          async: 'true',
        },
      ],
      htmlAttrs: {
        class: 'magazine',
      },
    }
  },
  mounted() {
    this.loadingAdvertising()
  },
  methods: {
    async loadingAdvertising() {
      const response = await this.$store.dispatch(
        'magazine/getAdvertising',
        this.dataAdvert
      )
    },
    modalData(data) {
      this.modalContentSend = {
        title: data.title,
        text: data.text,
        phone: data.phone,
        sale: data.sale,
        adress: data.adress,
      }
      this.dialogVisible = true
    },
  },
}
</script>
<style lang="scss">
.magazine {
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  height: 100vh;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
