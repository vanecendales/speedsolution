const list = document.querySelectorAll('ul li')


// add active list to sidebar links list.
list.forEach( li => {
  li.addEventListener('click', e =>{
    list.forEach( li => {
      li.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
  })
})

// chart 1
var xArray1 = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray1 = [55, 49, 44, 24, 15];

var layout1 = {title:"World Wide mineral water Production"};

var data1 = [{labels:xArray1, values:yArray1, type:"pie"}];

Plotly.newPlot("chart-1", data1, layout1);

// chart 2

var xArray2 = ["Italy","France","Spain","USA","Argentina"];
var yArray2 = [55, 49, 44, 24, 15];

var data2 = [{
  x: xArray2,
  y: yArray2,
  type: "bar"  }];
var layout2 = {title:"World Wide mineral water Production"};

Plotly.newPlot("chart-2", data2, layout2);

