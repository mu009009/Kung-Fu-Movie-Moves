function TipTextSet(TextString,PositionX,PositionY)
{
		var TipsString = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return PositionY + 'px';
		})
		.attr("x",function(){
			return  PositionX + 'px';
		})
		.append("text")
		.attr('x',PositionX*0.08 + "px")
		.attr('y',function(){
			return 10 + "px";
		})
		.text(TextString)
		.style("font-size",FontLittleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
		return null;
}

function SecondTipTextSet(TextString,PositionX,PositionY)
{
		var TipsString = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return PositionY + 'px';
		})
		.attr("x",function(){
			return  PositionX + 'px';
		})
		.append("text")
		.attr('x',PositionX*0.03 + "px")
		.attr('y',function(){
			return 20 + "px";
		})
		.text(TextString)
		.style("font-size",FontLittleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);		
	
		return null;
}

function MoveNumberText(Number)
{
		var NumberString = d3.select('#Main_Part')
		.append("svg")
		.attr("class","svg")
		.attr("id","MoveNumberText")
		.style("position","absolute")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 85 + "px"
		})
		.style("margin-top",function(){

			return 1.1*(window.innerHeight*ImageMarginTop + 1*document.getElementById('MoviePoster').offsetHeight) + 'px';
			
		})
		.style("margin-left",function(){
			return  window.innerWidth*0.01 + 'px';
		})
		
		var TextPart = NumberString
		.append("text")
		.attr("id","NumberText")		
		.attr('x',10 + "px")
		.attr('y',function(){
			return FontMiddleSize*5 + "px";
		})
		.text(Number)
		.style("font-size",FontLargestSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);		
	
		return null;	
}

function ChangeText(ChangeValue)
{	
	console.log(+ChangeValue);
	
	d3.select('#NumberText')
	.transition()
	.duration(durationTime)
	.text(+ChangeValue);
	
	return null;
	
}

function ForeverText()
{
		var Moves = d3.select('#Main_Part')
		.append("svg")
		.attr("class","svg")
		.attr("id","ForeverText")
		.style("position","absolute")	
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 85 + "px"
		})
		.style("margin-top",function(){

			return 1.1*(window.innerHeight*ImageMarginTop + 1*document.getElementById('MoviePoster').offsetHeight) + 'px';
			
		})
		.style("margin-left",function(){
			return  window.innerWidth*0.10 + 'px';
		})
		
		var TextPart = Moves
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return FontMiddleSize*5 + "px";
		})
		.text("Moves")
		.style("font-size",FontLargestSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);		
	
		return null;
}

function StarringTips(StarringName,StarringKungFuNo)
{
	var StarringTipsSvg = d3.select('#Main_Part')
	.append("svg")
	.attr("class","svg")
	.attr("id","StarringText")
	.style("position","absolute")	
	.attr("width",function(){
		return 5 + "%";
	})
	.attr("height",function(){
		return windowHeight*0.2 + "px"
	})
	.style("margin-top",function(){

		return 1.02*(window.innerHeight*ImageMarginTop + 1*document.getElementById('StarringPhoto').offsetHeight) + 'px';
			
	})
	.style("margin-left",function(){
		return  window.innerWidth*0.94 + 'px';
	})
	
	var StarringText = StarringTipsSvg
	.append('text')
	.attr('x',10)
	.attr('y',15)
	.style("font-size",FontLittleSize+"px")
	.style("fill","white");
	
	var TextString = "Starring:," + StarringName + ",performed," + StarringKungFuNo + " moves,in this movie";
	var NewString = TextString.split(",");
	
	StarringText.selectAll('tspan')
	.data(NewString)
	.enter()
	.append('tspan')
	.attr('x',10)
	.attr('dy','1.2em')
	.text(function(d)
	{
		return d;
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);	
	
	return null;
}

function TitleText(Type,MovieName)
{
		var Title = d3.select('#Main_Part')
		.append("svg")
		.attr("class","svg")
		.attr("id","TitleTextSvg")
		.style("position","absolute")	
		.attr("width",function(){
			return 50 + "%";
		})
		.attr("height",function(){
			return 120 + "px"
		})
		.style("margin-top",function(){

			return 0 + 'px';
			
		})
		.style("margin-left",function(){
			return  window.innerWidth*0.001 + 'px';
		})
		
		var TextPart = Title
		.append("text")
		.attr("id","MainTitleText")
		.attr('x',10 + "px")
		.attr('y',function(){
			return FontMiddleSize*3 + "px";
		})
		.text(Type + " Kung Fu Movies, Example: " + MovieName)
		.style("font-size",FontLargeSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
		var TypeDescrbition1 = null;
		if(Type=="Comedy")
			{
				TypeDescrbition1 = "This kind of Kung Fu movies mainly to show the sacrifice of the protagonist"
			}
		else if(Type=="Tragedy")
			{
				TypeDescrbition1 = "This kind of Kung Fu movies mainly to show the power of the Kung Fu"
			}
		else if(Type=="Visual")
			{
				TypeDescrbition1 = "Kung Fu is not necessary for this kind of movies, and they use Kung Fu to get more attention"
			}
	
		var TypeDescrbition2 = null;
		if(Type=="Comedy")
			{
				TypeDescrbition2 = "It will contain more Defensive Moves, and the protagonist is easier to get hurt in this kind of Movies"
			}
		else if(Type=="Tragedy")
			{
				TypeDescrbition2 = "It will contain more Offensive Moves to show the strength of the Kung Fu"
			}
		else if(Type=="Visual")
			{
				TypeDescrbition2 = "It will contain more preparing or jumping moves, to leave a strong impression to their viewers"
			}	
	
		var TextPart1 = Title
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return FontMiddleSize*5 + "px";
		})
		.text(TypeDescrbition1)
		.style("font-size",FontMiddleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
		var TextPart2 = Title
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return FontMiddleSize*6.5 + "px";
		})
		.text(TypeDescrbition2)
		.style("font-size",FontMiddleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);	
	
		return null;
}

function ChangeInerText(Type,Value,TotalNumber)
{
	d3.select("#"+Type+"No")
	.transition()
	.duration(durationTime)
	.text(function()
	{
		if(Value!=0)
			{
				var TextInfo = (Value/TotalNumber*100).toString();
				var NewTextInfo = null;
				NewTextInfo = "";
				for(var i=0;i<5;i++)
					{
						NewTextInfo = NewTextInfo + TextInfo[i];
					}
				return NewTextInfo+"%";
			}
		else if(Value==0)
			{
				return "0.000%";
			}
	})
	return null;
}

function ChangeInerTextOut(Type)
{
	d3.select("#"+Type+"No")
	.transition()
	.duration(durationTime)
	.text(function()
	{
		return 100+".0%";
	})
	return null;
}

