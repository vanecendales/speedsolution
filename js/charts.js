var data = [
	{ y: '2014', a: 50, b: 90},
	{ y: '2015', a: 65,  b: 75},
	{ y: '2016', a: 50,  b: 50},
	{ y: '2017', a: 75,  b: 60},
	{ y: '2018', a: 80,  b: 65},
	{ y: '2019', a: 90,  b: 180},
	{ y: '2020', a: 100, b: 300},
	{ y: '2021', a: 115, b: 220},
	{ y: '2022', a: 120, b: 85},
	{ y: '2023', a: 145, b: 85},
	{ y: '2024', a: 160, b: 95}
  ],
  config = {
	data: data,
	xkey: 'y',
	ykeys: ['a', 'b'],
	labels: ['Line 1', 'Line 2'],
	fillOpacity: 0.6,
	
	behaveLikeLine: true,
	resize: true,
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['black'],
	lineColors:['#017DC0','#FF8426']
};

config.element = 'line-chart';
Morris.Line(config);
Morris.Donut({
element: 'pie-chart',
data: [
  {label: "Friends", value: 30},
  {label: "Allies", value: 15},
  {label: "Enemies", value: 45},
  {label: "Neutral", value: 10}
]
});