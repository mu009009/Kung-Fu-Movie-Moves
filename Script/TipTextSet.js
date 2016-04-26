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

			return FontLittleSize*74 + 'px';
			
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

			return FontLittleSize*74 + 'px';
			
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

		return FontMiddleSize*3.5 + 'px';
			
	})
	.style("margin-left",function(){
		return  window.innerWidth*0.923 + 'px';
	})
	
	var StarringText = StarringTipsSvg
	.append('text')
	.attr('x',FontLittleSize)
	.attr('y',0)
	.style("font-size",FontLittleSize+"px")
	.style("fill","white");
	
	var TextString = StarringName + ",who performed," + StarringKungFuNo + " moves,in this movie";
	var NewString = TextString.split(",");
	
	StarringText.selectAll('tspan')
	.data(NewString)
	.enter()
	.append('tspan')
	.attr('x',FontLittleSize)
	.attr('dy',function()
	{
		return FontLittleSize*1.5 + 'px';
	})
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

function TitleText(Type,MovieName,ProtagonistName)
{
		var Title = d3.select('#Main_Part')
		.append("svg")
		.attr("class","svg")
		.attr("id","TitleTextSvg")
		.style("position","absolute")	
		.attr("width",function(){
			return FontLittleSize*4 + "%";
		})
		.attr("height",function(){
			return FontLittleSize*30 + "px"
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
		.attr('x',FontLittleSize + "px")
		.attr('y',function(){
			return FontMiddleSize*3 + "px";
		})
		.text("Kung Fu Moves in Three Kinds of Kung Fu Movies")
		.style("font-size",FontLargeSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
		var MovieTitlePart = Title
		.append("text")
		.attr("id","MovieTitleText")
		.attr('x',FontLittleSize + "px")
		.attr('y',function(){
			return FontMiddleSize*10 + "px";
		})
		.text(MovieName)
		.style("font-size",FontLargeSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
		var MovieabstractPart = Title
		.append("text")
		.attr("id","MovieStarringText")
		.attr('x',FontLittleSize + "px")
		.attr('y',function(){
			return FontMiddleSize*12 + "px";
		})
		.text("A example of the " + Type + " Kung Fu movies.")
		.style("font-size",FontMiddleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);	
	
		var MovieStarringPart = Title
		.append("text")
		.attr("id","MovieStarringText")
		.attr('x',FontLittleSize + "px")
		.attr('y',function(){
			return FontMiddleSize*13.5 + "px";
		})
		.text("Click the path on the right to see different movie clips")
		.style("font-size",FontMiddleSize+"px")
		.style("fill","white")
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);		
	
		var TypeDescrbition1 = null;
		if(Type=="Comedy")
			{
				TypeDescrbition1 = Type + " Kung Fu movies mainly to show the sacrifice of the protagonist,"
			}
		else if(Type=="Tragedy")
			{
				TypeDescrbition1 = Type + " Kung Fu movies mainly to show the power of Kung Fu,"
			}
		else if(Type=="Visual")
			{
				TypeDescrbition1 = Type + " Kung Fu movies mainly to show the elegant and the beauty of Kung Fu,"
			}
	
		var TypeDescrbition2 = null;
		if(Type=="Comedy")
			{
				TypeDescrbition2 = "a good person who always tries his best to help his friends, even though he may be hurt in the process."
			}
		else if(Type=="Tragedy")
			{
				TypeDescrbition2 = "in order to create a Kung Fu hero."
			}
		else if(Type=="Visual")
			{
				TypeDescrbition2 = "leaving a strong impression on viewers."
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

function ExplainText()
{
	var Title = d3.select('#Main_Part')
		.append("svg")
		.attr("class","svg")
		.attr("id","ExplainTextSvg")
		.style("position","absolute")	
		.attr("width",function(){
			return FontLittleSize*6 + "%";
		})
		.attr("height",function(){
			return FontLittleSize*4.2 + "px"
		})
		.style("margin-top",function(){

			return 0 + 'px';
			
		})
		.style("margin-left",function(){
			return FontLittleSize*77.3 + 'px';
		});
	
	var Explain1 = Title
	.append("text")
	.attr('x',0 + "px")
	.attr('y',function(){
		return FontMiddleSize*3 + "px";
	})
	.text("How they fight")
	.style("font-size",FontLittleSize+"px")
	.style("fill","white")
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	var Explain2 = Title
	.append("text")
	.attr('x',FontLittleSize*51 + "px")
	.attr('y',function(){
		return FontMiddleSize*3 + "px";
	})
	.text("Where they hit")
	.style("font-size",FontLittleSize+"px")
	.style("fill","white")
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
//	var Explain3 = Title
//	.append("text")
//	.attr('x',FontLittleSize*77.5 + "px")
//	.attr('y',function(){
//		return FontMiddleSize*3 + "px";
//	})
//	.text("Starring performed")
//	.style("font-size",FontLittleSize+"px")
//	.style("fill","white")
//	.style("opacity",0)
//	.transition()
//	.duration(durationTime)
//	.style("opacity",1);	
}

