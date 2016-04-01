//Get the Height of the window
var windowHeight = window.innerHeight;

//Set the percentage heigh of the Mid part.
var marginTopForMidPart = 0.0;

var ImageMarginTop = 0.125;
var PosterHeightPercentage = 0.625;
var StarringHeightPercentage = 0.14;
var KeyWord = null;
KeyWord = "Tragedy";

//Get the width blank 
//var WidthBlank = document.getElementById('Title_Part').offsetHeight * 0.10;
var WidthBlank = 0;

//Set the blank heiht between each col-md;
var BlankHieght = WidthBlank;

var MainH = 0;
var MainW = 0;

var FullPosterHeight = 0;
var UnitWidth = 0.04;

var PosterPosition = "data/Images/";
var StarringName =null;
var PosterName = PosterPosition + "The_Big_Boss.jpg";

var durationTime = 1800;
var TotalKungFunumber = null;

var MovieData = null;

//Set the inital height of the Mid bottom part;
d3.select('#Main_Part')
.style("margin-top",windowHeight * (marginTopForMidPart) + BlankHieght +"px")
.style("height", windowHeight * (1-marginTopForMidPart) - BlankHieght+ "px");

MainH = document.getElementById('Main_Part').offsetHeight;
MainW = document.getElementById('Main_Part').offsetWidth;

//Change the size for each part when the Size of window changed.
window.onresize = function(){
	
		windowHeight = window.innerHeight;
		
		//The height of the Mid top part
		d3.select('#Title_Part')
		.style("height",windowHeight * (marginTopForMidPart - BlankHieght) + "px");
		
		//The height of the Mid bottom part
		d3.select('#Main_Part')
		.style("margin-top",windowHeight * marginTopForMidPart +"px")
		.style("height", windowHeight * (1-marginTopForMidPart) + "px");
	
		MainH = document.getElementById('Main_Part').offsetHeight;
		MainW = document.getElementById('Main_Part').offsetWidth;
    }

console.log('ModuleLevel');

//Load the data about Rank;
function Dataload()
{
	queue()
	.defer(d3.csv,'data/CSV File/MovieKungFuData.csv',parse)
	.await(dataLoaded);
}

Dataload();

//Controling the data
function dataLoaded(err,Movies)
{	
	MovieData = Movies;
	DrawPieChart(MovieData);
	console.log(MovieData);
	if(KeyWord!="")
		{
			 
		}	
}

// Change data to the Object
function parse(d)
{	
	var Movies = {};
	
	Movies.Type = d.Type;//The Type of the movie;	
	Movies.TotalMoves = +d.TotalMoves;//The Kung Fu moves Number in this movie;
	Movies.TotalKungFuTime = +d.TotalKungFuTime;//The Time Perform Kung Fu in this movie;
	Movies.TotalProtagonistTime = +d.TotalProtagonistTime;//The Time the protagonist perform Kung Fu in this movie;
	Movies.ProtagonistName = d.ProtagonistName;//The Name of the Protagonist;
	Movies.TotalAttackMoves = +d.TotalAttackMoves;//The Number of the Moves show the information of offensive;
	Movies.TotalDefenseMoves = +d.TotalDefenseMoves;//The Number of the Moves show the information of defensive;
	Movies.TotalOtherMoves = +d.TotalOtherMoves;//The Number of the Moves show something else, neither offensive nor defensive;
	Movies.TotalHurtMoves = +d.TotalHurtMoves;//The Number of the Moves show the Protagonist or his friend get hurt;
	Movies.AttackHandMoves = +d.AttackHandMoves;//The Number of the Moves perform by hand and show some offensive information;
	Movies.AttackKickMoves = +d.AttackKickMoves;//The Number of the Moves perform by leg and show some offensive information;
	Movies.ATKHHeadMoves = +d.ATKHHeadMoves;//The Number of those Moves using hand to attack the enemies' head;
	Movies.ATKHBodyMoves = +d.ATKHBodyMoves;//The Number of Those Moves using hand to attack the enemies' body;
	Movies.ATKHJointMoves = +d.ATKHJointMoves;//The Number of Those Moves using hand to attack the enemies' joint or grap them;
	Movies.ATKKHeadMoves = +d.ATKKHeadMoves;//The Number of Those Moves using kick to attack the enemies' head;
	Movies.ATKKBodyMoves = +d.ATKKBodyMoves;//The Number of Those Moves using kick to attack the enemies' body;
	Movies.ATKKJointMoves = +d.ATKKJointMoves;//The Number of Those Moves using kick to attack the enemies' joint or let them down;
	Movies.DEFBlockMoves = +d.DEFBlockMoves;//The Number of Those blocking moves;
	Movies.DEFEvadeMoves = +d.DEFEvadeMoves;//The Number of Those evading moves;
	Movies.DEFBHeadMoves = +d.DEFBHeadMoves;//The Number of Those blocking moves help protect the head;
	Movies.DEFBBodyMoves = +d.DEFBBodyMoves;//The Number of Those blocking moves help protect the body;
	Movies.DEFEHeadMoves = +d.DEFEHeadMoves;//The Number of Those moves help protect the head;
	Movies.DEFEBodyMoves = +d.DEFEBodyMoves;//The Number of Those moves help protect the body;
	Movies.HurtBloodMoves = +d.HurtBloodMoves;//The Number of Those moves lead the protagonist or his friend get hurt and bleeding;
	Movies.HurtNoBloodMoves = +d.HurtNoBloodMoves;//The Number of Those moves lead the protagonist or his friend get hurt but without bleeding;
	Movies.HBHeadMoves = +d.HBHeadMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their head and bleeding;
	Movies.HBBodyMoves = +d.HBBodyMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their body and bleeding;
	Movies.HBJointMoves = +d.HBJointMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their joint or grap them and bleeding;
	Movies.HNBHeadMoves = +d.HNBHeadMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their head but without bleeding;
	Movies.HNBBodyMoves = +d.HNBBodyMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their body but without bleeding;
	Movies.HNBJointMoves = +d.HNBJointMoves;//The Number of Those moves lead the protagonist orhis friend get hurt on their joint or grap them but without bleeding;
	Movies.TotalHeadMoves = +d.TotalHeadMoves;//The Number of those moves attack or hurt the head;
	Movies.TotalBodyMoves = +d.TotalBodyMoves;//The Number of Those moves attack or hurt the body;
	Movies.TotalJointMoves = +d.TotalJointMoves;//The Number of Those moves attack or hurt the joint;
	Movies.TotalProtagonistMoves = +d.TotalProtagonistMoves;//The Number of the moves preformed by the protagonist;
	Movies.TotalNoProtagonistMoves = +d.TotalNoProtagonistMoves;//The Number of the moves not preformed by the protagonist;
	Movies.TPBHeadMoves = +d.TPBHeadMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his head;
	Movies.TPBBodyMoves = +d.TPBBodyMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his body;
	Movies.TPEHeadMoves = +d.TPEHeadMoves;//The Number of the moves preformed by the protagonist, and he evade the enemies' attack, protect his head;
	Movies.TPEBodyMoves = +d.TPEBodyMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his body;
	Movies.TPKHeadMoves = +d.TPKHeadMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' head;
	Movies.TPKBodyMoves = +d.TPKBodyMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' body;
	Movies.TPKJointMoves = +d.TPKJointMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' joint;
	Movies.TPHHeadMoves = +d.TPHHeadMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' head;
	Movies.TPHBodyMoves = +d.TPHBodyMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' body;
	Movies.TPHJointMoves = +d.TPHJointMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' joint;
	Movies.TPPrepareMoves = +d.TPPrepareMoves;//The Number of the moves preformed by the protagonist, and he is preparing the battle;
	Movies.TPJumpMoves = +d.TPJumpMoves;//The Number of the moves preformed by the protagonist, and he show his jumping skill;
	Movies.TPHBHeadMoves = +d.TPHBHeadMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his head and bleeding;
	Movies.TPHBBodyMoves = +d.TPHBBodyMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his body and bleeding;
	Movies.TPHBJointMoves = +d.TPHBJointMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his joint and bleeding;
	Movies.TPHNBHeadMoves = +d.TPHNBHeadMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his head but without bleeding;
	Movies.TPHNBBodyMoves = +d.TPHNBBodyMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his body but without bleeding;
	Movies.TPHNBJointMoves = +d.TPHNBJointMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his joint but without bleeding;
	Movies.TOBHeadMoves = +d.TOBHeadMoves;//The Number of the moves not preformed by the protagonist, and they block the enemies' attack, protect their head;
	Movies.TOBBodyMoves = +d.TOBBodyMoves;//The Number of the moves not preformed by the protagonist, and they block the enemies' attack, protect their body;
	Movies.TOEHeadMoves = +d.TOEHeadMoves;//The Number of the moves not preformed by the protagonist, and they evade the enemies' attack, protect their head;
	Movies.TOEBodyMoves = +d.TOEBodyMoves;//The Number of the moves not preformed by the protagonist, and they evade the enemies' attack, protect their body;
	Movies.TOKHeadMoves = +d.TOKHeadMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' head;
	Movies.TOKBodyMoves = +d.TOKBodyMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' body;
	Movies.TOKJointMoves = +d.TOKJointMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' joint;
	Movies.TOHHeadMoves = +d.TOHHeadMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' head;
	Movies.TOHBodyMoves = +d.TOHBodyMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' body;
	Movies.TOHJointMoves = +d.TOHJointMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' joint;
	Movies.TOPrepareMoves = +d.TOPrepareMoves;//The Number of the moves not preformed by the protagonist, and they are preparing the battle;
	Movies.TOJumpMoves = +d.TOJumpMoves;//The Number of the moves not preformed by the protagonist, and they are showing their jumping skill;
	Movies.TOHBHeadMoves = +d.TOHBHeadMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their head and bleeding;
	Movies.TOHBBodyMoves = +d.TOHBBodyMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their body and bleeding;
	Movies.TOHNBHeadMoves = +d.TOHNBHeadMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their head but without bleeding;
	Movies.TOHNBBodyMoves = +d.TOHNBBodyMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their body but without bleeding;
	Movies.TOHBJointMoves = +d.TOHBJointMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their joint and bleeding;
	Movies.TOHNBJointMoves = +d.TOHNBJointMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their joint but without bleeding;
	Movies.TotalOthersMovesTime = +d.TotalOthersMovesTime;//The total time in this movie that they perform some Kung Fu moves and those moves have no strong meaning about defense and offensive;
	Movies.TotalPOtherMovesTime = +d.TotalPOtherMovesTime;//The total time in this movie that the Kung Fu is not performed by the protagonist;
	Movies.MovieName = d.MovieName;//The Name of the Movie;

	if(KeyWord=="Tragedy")
		{
			PosterName = PosterPosition + "The_Big_Boss.jpg"
		}
	else if(KeyWord=="Comedy")
		{
			PosterName = PosterPosition + "Rumble_in_the_Bronx.jpg";
		}	
	else if(KeyWord=="Visual")
		{
			PosterName = PosterPosition + "The_Matrix.jpg";
		}
	
	if(Movies.Type == KeyWord)
		{
			TitleText(d.Type,d.MovieName)
			StarringName = PosterPosition + d.ProtagonistName + ".png";
			console.log(StarringName);
			TotalKungFunumber = d.TotalMoves;
			DrawPoster(PosterName);
			DrawStarringPhoto(StarringName);
			StarringTips(d.ProtagonistName,d.TotalProtagonistMoves)
			MoveNumberText(TotalKungFunumber);
			ForeverText();
			FullPosterHeight = document.getElementById('MoviePoster').offsetHeight;
//			DrawLeftTimeBar(Movies.TKFTime,Movies.TOMovesTime,Movies.TPTime,Movies.TMoves,Movies.OMoveNo);
//			DrawLeftTimeBar(d);
			DrawFollowPart(d);
		}
	
	return Movies;
}


//Export the data to other function so that easy to draw the pictures.

function DrawPoster(PosterName)
{
	d3.select('#MoviePoster')
	.attr("src",PosterName)
	.style("margin-top",function(){
		var Margin_Top = windowHeight * ImageMarginTop;
		return Margin_Top + "px";
	})
	.attr("height",function(){
		var Height = windowHeight * PosterHeightPercentage;
		return Height + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
}

function DrawStarringPhoto(StarringName)
{	
	d3.select('#StarringPhoto')
	.attr("src",StarringName)
	.style("margin-top",function(){
		var Margin_Top = windowHeight * ImageMarginTop;
		return Margin_Top + "px";
	})
	.attr("height",function(){
		var Height = windowHeight * StarringHeightPercentage;
		return Height + "px";
	});
}

function DrawLeftTimeBar(Movies)
{	
	var Barwidth = 0.1;
	var BarBlankWidth = 40;
	
	console.log(Movies.TotalMoves)
			console.log("RUN");
	var Rectsvg = d3.select('#Main_Part')
		.append('svg')
		.attr('id','TimeBar_Part')
        .attr("width", function(){
			return 24.3+"%";
		})
        .attr("height", function(){
			return document.getElementById('MoviePoster').offsetHeight + "px";
		})
        .style("margin-left",function(){
			return 0+"%";
		})
		.style("margin-top",function(){
			return 0.125 * windowHeight + "px";
		})
		.style("position",'absolute')
        .append("g");
	
	var rect1 = Rectsvg
	    .append("rect")
        .attr("class", "rect")
        .style('fill',"rgb"+'('+'0,16,78'+')')
        .attr("x",function()
        {
			var Xlocation = (1-Barwidth) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";
        })
        .attr("y",0)
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			var barHeight = FullPosterHeight;
			return barHeight + "px";
        })
	
	var PrepareMovesPercentage = Movies.TotalOthersMovesTime/Movies.TotalKungFuTime;
	
	var rect2 = Rectsvg
		.append("rect")
        .attr("class", "rect")
        .style('fill',"rgb"+'('+'64,185,176'+')')
        .attr("x",function()
        {
			var Xlocation = (1-2*Barwidth) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation - BarBlankWidth + "px";
        })
        .attr("y",function(){
			return (1-PrepareMovesPercentage)*FullPosterHeight + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			var barHeight = FullPosterHeight * PrepareMovesPercentage;
			return barHeight + "px";
        })
	
	var ProtagonistPerformPercentage = Movies.TotalProtagonistTime/Movies.TotalKungFuTime;
	
	var rect3 = Rectsvg
		.append("rect")
        .attr("class", "rect")
        .style('fill',"rgb"+'('+'254,113,95'+')')
        .attr("x",function()
        {
			var Xlocation = (1-3*Barwidth) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation - 2*BarBlankWidth + "px";
        })
        .attr("y",function(){
			return (1-ProtagonistPerformPercentage)*FullPosterHeight + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			var barHeight = FullPosterHeight * ProtagonistPerformPercentage;
			return barHeight + "px";
        })
	
	var AverageTimeFor1Move = Movies.TotalKungFuTime/Movies.TotalMoves;
	var AverageTime1Parepare = Movies.TotalOthersMovesTime/Movies.TotalOtherMoves;
	
	var AverageTimeFor1MoveHeight = 0;
	
	var AverageTime1MoveBar = Rectsvg
		.append('rect')
		.attr("class","rect")
        .style('fill',"rgb"+'('+'0,16,78'+')')
		.attr("x",function(){
			var Xlocation = 0 + BarBlankWidth + Barwidth * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";
		})
		.attr("y",function(){
			AverageTimeFor1MoveHeight = 0.2*FullPosterHeight;
			return FullPosterHeight - AverageTimeFor1MoveHeight + "px";
		})
        .attr("width",function()
		{
			var Xlocation = (1 * Barwidth ) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			return AverageTimeFor1MoveHeight + "px";
        })	
	
	var AverageTimeFor1PrepareHeight = 0;
		AverageTimeFor1PrepareHeight = AverageTime1Parepare/AverageTimeFor1Move*AverageTimeFor1MoveHeight;
	
	var AverageTime1PrepareBar = Rectsvg
		.append('rect')
		.attr("class","rect")
        .style('fill',"rgb"+'('+'64,185,176'+')')
		.attr("x",function(){
			var Xlocation = (1-8*Barwidth) * document.getElementById('TimeBar_Part').offsetWidth;
            return 0 + "px";
		})
		.attr("y",function(){
			return FullPosterHeight - AverageTimeFor1PrepareHeight + "px";
		})
        .attr("width",function()
		{
			var Xlocation = (1 * Barwidth ) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			return AverageTimeFor1PrepareHeight + "px";
        })
	
	var rectShadowRect = Rectsvg
		.append("rect")
        .attr("class", "rect")
        .style('fill',"rgb(84,84,94)")
        .attr("x",function()
        {
			var Xlocation = (1-8*Barwidth-0.1) * document.getElementById('TimeBar_Part').offsetWidth;
            return 0 + "px";
        })
        .attr("y",function(){
			return 0 + "px";
		})
        .attr("width",function()
		{
			var Xlocation = (10 * Barwidth + 0.1) * document.getElementById('TimeBar_Part').offsetWidth;
            return Xlocation + "px";			
		})
        .attr("height",function() {
			var barHeight = FullPosterHeight * 1;
			return barHeight + "px";
        })
		.transition()
		.duration(durationTime)
		.attr("height",function(){
			return 0 + "px";
		});	
}

function DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,Color,StrokeWidth,Datavalue,ClassName)
{
	var M0X1 = M0X, M0Y1 = M0Y,
		C10X1 = C10X, C10Y1 = C10Y,
//		C11X1 = C11X, C11Y1 = C11Y,
		C12X1 = C12X, C12Y1 = C12Y,
//		C20X1 = C20X, C20Y1 = C20Y,
//		C21X1 = C21X, C21Y1 = C21Y,
		C22X1 = C22X, C22Y1 = C22Y,
		ColorHue = Color,
		StrokeWidthStroke = StrokeWidth,
		Value = Datavalue;
	
	var PathPart = d3.select("#Follow_Part")
		.append('g')
		.append('path')
		.attr('class','path')
		.attr('id',ClassName)
		.attr("stroke",ColorHue)
		.attr("fill","none")
		.attr("stroke-width",StrokeWidth + "px")
		.attr("disabled","disabled")
		.style("opacity",0.5)
		.attr('d',function(){
				var Heightspace = "None";
				Heightspace = "M" + M0X1 + ", " + M0Y1 + 
							  ", Q" + M0X1 + ", " + M0Y1 + 
							  ", " + M0X1 + ", " + M0Y1 + 					
				 			  ", T" + M0X1 + ", " + M0Y1;
				
				return Heightspace;	
		})
		.style("z-index",80)
		.on("mouseover",function(){
			d3.selectAll("#"+ClassName)
			.transition()
			.duration(durationTime/4)
			.style("opacity",0.8);
			
			ChangeText(Value);
			ChangePieChart(MovieData,ClassName);
		})
		.on("mouseout",function(){
			d3.selectAll("#"+ClassName)
			.transition()
			.duration(durationTime/4)			
			.style("opacity",0.5);
			
			ChangeText(TotalKungFunumber);
			ChangePieCharOut(MovieData);
		})	
		.transition()
		.duration(durationTime)
		.attr('d',function(){
				var Heightspace = "None";
				Heightspace = "M" + M0X1 + ", " + M0Y1 + 
							  ", Q" + C10X1 + ", " + C10Y1 + 
							  ", " + C12X1 + ", " + C12Y1 + 					
				 			  ", T" + C22X1 + ", " + C22Y1;
				
				return Heightspace;	
		})
		.attr("disabled",null)
}

function DrawTipImage()
{	
	DrawColorHue();
	TextInfo();
}

function DrawColorHue()
{
	var TotalColor = "rgb"+'('+'0,16,78'+')';
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';
	var ProtagonistColor = "rgb"+'('+'254,113,95'+')';
	
	var HuePart = d3.select('#Main_Part')
		.append('svg')
		.attr('class','svg')
		.attr("id","ColorHue_Part")	
		.style('margin-left',function()
		{
			return document.getElementById('Main_Part').offsetWidth*0.855 + 'px';
		})
		.style('margin-top',function(){
			return 0.75 * windowHeight + "px";
		})
		.style("position", "absolute")
		.attr("width",function(){
			return window.innerWidth*0.40 + "px";
		})
		.attr("height",function(){
			return windowHeight*0.25 + "px";
		})
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1);
	
	var OffensiveHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return (windowHeight*0.25*0.7) - 90 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",OffensiveColor)
		.attr("width",20+"px")
		.attr("height",30+"px")
		.style("opacity",1);
	
	var DefensivetHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return (windowHeight*0.25*0.7) - 60 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",DefensiveColor)
		.attr("width",20+"px")
		.attr("height",30+"px")
		.style("opacity",1);
	
	var HurtHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return (windowHeight*0.25*0.7) - 30 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",HurtColor)
		.attr("width",20+"px")
		.attr("height",30+"px")
		.style("opacity",1);
	
	var OtherHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.7 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",OtherColor)
		.attr("width",20+"px")
		.attr("height",30+"px")
		.style("opacity",1);
}

function TextInfo()
{
	var TotalColor = "rgb"+'('+'0,16,78'+')';
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';
	var ProtagonistColor = "rgb"+'('+'254,113,95'+')';
	
	var OffensivePartText = d3.select('#ColorHue_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 22 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.25*0.7 -90 + 10 + "px";
		})
		.attr("x",function(){
			return  document.getElementById('ColorHue_Part').offsetWidth*1*0.07 + "px";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("Offensive Kung Fu Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var DefensivePartText = d3.select('#ColorHue_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 22 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.25*0.7 - 60 + 10 + "px";
		})
		.attr("x",function(){
			return  document.getElementById('ColorHue_Part').offsetWidth*1*0.07 + "px";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("Defensive Kung Fu Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var HurtPartText = d3.select('#ColorHue_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 22 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.25*0.7 - 30 + 10 + "px";
		})
		.attr("x",function(){
			return document.getElementById('ColorHue_Part').offsetWidth*1*0.07 + "px";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("Moves cause hurt")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var OtherPartText = d3.select('#ColorHue_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 22 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.25*0.7 + 10 + "px";
		})
		.attr("x",function(){
			return document.getElementById('ColorHue_Part').offsetWidth*1*0.07 + "px";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("Other Kung Fu Moves")
		.style("font-size",12+"px")
		.style("fill","white");		
}

function DrawPieChart(MovieData)
{
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';	
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	
	var CircleSvg = d3.select('#Main_Part')
		.append('svg')
		.attr('id','CircleSvg')
		.attr('class','svg')
		.style('margin-left',function()
		{
			return 0 + '%';
		})
		.style('margin-top',function()
		{
			return windowHeight*ImageMarginTop + 'px';
		})
		.attr('width',function()
		{
			return window.innerWidth*0.23 + 'px';
		})
		.attr('height',function()
		{
			return windowHeight*(0.8 - ImageMarginTop) + 'px';
		})
	
	var OutR = windowHeight/11;
	var InR = OutR - 20;
	var Pi = Math.PI;
	
	var Arc = d3.svg.arc()
		.innerRadius(InR)
		.outerRadius(OutR)
		.startAngle(0) //converting from degs to radians
		.endAngle(360 * (Pi/180)) //just radians
	
	var TragedyPieData = CircleSvg
		.selectAll('path')
		.data(MovieData)
		.enter();
	
	var TragedyPie	= TragedyPieData
		.append('path')
		.attr('id',function(d)
		{
			return d.Type + "Pie";
		})
		.attr('d',Arc)
    	.attr("fill", function(d)
		{
//			if(d.Type == "Tragedy")
//				{
//					return OffensiveColor;
//				}
//			else if(d.Type == "Comedy")
//				{
//					return DefensiveColor;
//				}
//			else if(d.Type == "Visual")
//				{
//					return OtherColor;
//				}
			return "white";
		})
		.style("opacity",0)
		.attr("transform", function(d,i)
		{
			console.log(i);
			var Xposition = window.innerWidth*0.06;
			var Yposition = document.getElementById('CircleSvg').offsetHeight*0.135*(i+1) + 1.5*(i)*OutR;
			var CircleString = "translate(" + Xposition.toString() + "," + Yposition.toString() + ")";
			console.log(CircleString);
			return CircleString;
		})
		.transition()
		.duration(durationTime)
		.style("opacity",function(d)
		{
			if(d.Type == KeyWord)
				{
					return 1;
				}
			else
				{
					return 0.2;
				}
		})
	
	var InnerPieData = CircleSvg
		.selectAll('circle')
		.data(MovieData)
		.enter();
	
	var InnerPie = InnerPieData
		.append('circle')
		.attr('r',InR)
    	.attr("fill", function(d)
		{
//			if(d.Type == "Tragedy")
//				{
//					return OffensiveColor;
//				}
//			else if(d.Type == "Comedy")
//				{
//					return DefensiveColor;
//				}
//			else if(d.Type == "Visual")
//				{
//					return OtherColor;
//				}
			return "rgb"+'('+"129,183,195"+')';
		})
		.attr("transform", function(d,i)
		{
			var Xposition = window.innerWidth*0.06;
			var Yposition = document.getElementById('CircleSvg').offsetHeight*0.135*(i+1) + 1.5*(i)*OutR;
			var CircleString = "translate(" + Xposition.toString() + "," + Yposition.toString() + ")";
			return CircleString;
		})
		.style("opacity",0)
		.on('mouseover',function()
		{
			d3.select(this)
			.attr("fill","rgb"+'('+"129,183,255"+')')
		})
		.on('mouseout',function()
		{
			d3.select(this)
			.attr("fill","rgb"+'('+"129,183,195"+')')
		})	
		.on('click',function(d)
		{
			KeyWord = d.Type;
			DeleteColorHuePart();
			DeleteFollowPart();
			DeleteMoveNumberText();
			DeleteStarringText();
			DeleteTitleText();
			DeleteForeverText();
			DeleteCirclePart();
			Dataload();
		})
		.transition()
		.duration(durationTime)
		.style("opacity",function(d)
		{
			return 1;
		})
	
	var InnerTextData = CircleSvg
		.selectAll('text')
		.data(MovieData)
		.enter();
	
	var InnerText = InnerTextData
		.append('text')
		.style("font-size", 15+"px")
		.style("fill","white")
		.attr("text-anchor","middle")
		.attr("transform", function(d,i)
		{
			var Xposition = window.innerWidth*0.06;
			var Yposition = document.getElementById('CircleSvg').offsetHeight*0.135*(i+1) + (i)*1.5*OutR;
			var CircleString = "translate(" + Xposition.toString() + "," + Yposition.toString() + ")";
			return CircleString;
		})
		.text(function(d){
			return d.MovieName;
		})
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1)
	
	var InnerTextInfo = InnerTextData
		.append('text')
		.style("font-size", 15+"px")
		.style("fill","white")
		.attr("id",function(d)
		{
			return d.Type+"No";
		})
		.attr("text-anchor","middle")
		.attr("transform", function(d,i)
		{
			var Xposition = window.innerWidth*0.06;
			var Yposition = document.getElementById('CircleSvg').offsetHeight*0.135*(i+1) + (i)*1.5*OutR + 20;
			var CircleString = "translate(" + Xposition.toString() + "," + Yposition.toString() + ")";
			return CircleString;
		})
		.text(function(d){
			return 1*100+".0%";
		})
		.style("opacity",0)
		.transition()
		.duration(durationTime)
		.style("opacity",1)
}