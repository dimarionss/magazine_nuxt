(function (e, t, n) {
  if (e.snaptr) return;
  var a = e.snaptr = function () {
    a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
  };
  a.queue = [];
  var s = 'script';
  r = t.createElement(s);
  r.async = !0;
  r.src = n;
  var u = t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r, u);
})(window, document,
  'https://sc-static.net/scevent.min.js');

snaptr('init', '41b99228-6481-4560-9309-56417c6899e3', {
  'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');
