//
// var vm1 = new Vue({
//   el: '#left',
//   data: { }
// });
//
// var vm2 = new Vue({
//   el: '#right',
//   data: { },
//   methods: {
//
//   }
// });

var slider = tns({
    container: '.my-slider',
    items: 1,
    // "axis": "vertical",
    "arrowKeys": true,
    "mouseDrag": true,
    "autoHeight": true,
    slideBy: 'page',
    "speed": 400,
    controls: false,
    nav: false
  });

// Tiny Slider: https://github.com/ganlanyuan/tiny-slider


var changeActiveState = function (info) {
  console.log(info.index);
  var index = info.index;
  if (index === 1 || index === 5 || index === 9 || index === 13 || index === 17) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#ec').classList.add('active');
  }
  else if (index === 2 ||index === 6 || index === 10 || index === 14 || index === 18) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#tw').classList.add('active');
  }
  else if (index === 3 || index === 7 || index === 11 || index === 15 || index === 19) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#ac').classList.add('active');
  }
  else if (index === 0 || index === 4 || index === 8 || index === 12 || index === 16) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector('#lv').classList.add('active');
  }

}

slider.events.on('indexChanged', changeActiveState);



document.querySelector('#lv').onclick = function () {
  slider.goTo(0);
  document.querySelector('.active').classList.remove('active');
  this.classList.add('active');
};

document.querySelector('#ec').onclick = function () {
  slider.goTo(1);
  document.querySelector('.active').classList.remove('active');
  this.classList.add('active');
};

document.querySelector('#tw').onclick = function () {
  slider.goTo(2);
  document.querySelector('.active').classList.remove('active');
  this.classList.add('active');
};

document.querySelector('#ac').onclick = function () {
  slider.goTo(3);
  document.querySelector('.active').classList.remove('active');
  this.classList.add('active');
};
