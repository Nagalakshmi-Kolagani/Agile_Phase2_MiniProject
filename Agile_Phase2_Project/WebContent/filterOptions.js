function callOptions(x)
{
	if(x=="vehicle")
	{
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Car";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Bike";
		select.add(option);
	}
	if(x=="fruits")
	{
		var select = document.getElementById("products");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var select1= document.getElementById("brand");
		var length = select1.options.length;
		for (i = length-1; i >= 1; i--) {
		  select1.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Apple";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Orange";
		select.add(option);
	}
	if(x=="Car")
	{
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Audi";
		select.add(option);
		var option = document.createElement("option");
		option.text = "BMW";
		select.add(option);
	}
	if(x=="Bike")
	{
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "Hero Honda";
		select.add(option);
		var option = document.createElement("option");
		option.text = "Royal Enfield";
		select.add(option);
	}
	if(x=="Apple")
	{
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "apple1";
		select.add(option);
		var option = document.createElement("option");
		option.text = "apple2";
		select.add(option);
	}
	if(x=="Orange")
	{
		var select = document.getElementById("brand");
		var length = select.options.length;
		for (i = length-1; i >= 1; i--) {
		  select.options[i] = null;
		}
		var option = document.createElement("option");
		option.text = "orange1";
		select.add(option);
		var option = document.createElement("option");
		option.text = "orange2";
		select.add(option);
	}
}
function optionStatus(x)
{
	  callOptions(x);
	  callChart();
}
function callChart()
{
	var x=document.getElementById("container");
	x.remove();
	document.getElementById("main").innerHTML="<div id='container'></div>";
	var chart = anychart.column();
	chart.animation(true);
	chart.title('Sales By Month for');
	var data=[1,2,3,4];
	for(var i=0;i<data.length;i++)
		data[i]+=Math.ceil(Math.random()*300)+20;
    var series = chart.column([
        ['January', data[0]],
        ['February', data[1]],
        ['March', data[2]],
        ['April', data[3]]
    ]);

    chart.yScale().minimum(0);

    chart.tooltip().positionMode('point');
    chart.interactivity().hoverMode('by-x');
    chart.xAxis().title('Months');
    chart.yAxis().title('Sales');
    chart.container('container');
    chart.draw();
}
