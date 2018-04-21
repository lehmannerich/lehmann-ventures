
var vm1 = new Vue({
  el: '#left',
  data: {
    msg: 'Hello World'
  }
});

var vm2 = new Vue({
  el: '#right',
  data: {
    msg: 'Hello World'
  }
});

var slider = tns({
    container: '.my-slider',
    items: 1,
    // "axis": "vertical",
    "arrowKeys": true,
    "mouseDrag": true,
    "autoHeight": true,
    slideBy: 'page',
    "speed": 300,
    controls: false,
    nav: false
  });
