//Get the Height of the window
var windowHeight = window.innerHeight;

//Set the percentage heigh of the Mid part.
var marginTopForMidPart = 0.0;

var ImageMarginTop = 0.125;
var PosterHeightPercentage = 0.625;
var KeyWord = null;

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
var PosterName = PosterPosition + "The_Big_Boss.jpg";

var durationTime = 1800;

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
	var MovieData = Movies;
	console.log(MovieData);
	if(KeyWord!="")
		{
			 DrawPieChart(MovieData);
		}	
}

// Change data to the Object
function parse(d)
{	
	var Movies = {};
	
	Movies.type = d.Type;//The Type of the movie;	
	Movies.TMoves = +d.TotalMoves;//The Kung Fu moves Number in this movie;
	Movies.TKFTime = +d.TotalKungFuTime;//The Time Perform Kung Fu in this movie;
	Movies.TPTime = +d.TotalProtagonistTime;//The Time the protagonist perform Kung Fu in this movie;
	Movies.PName = d.ProtagonistName;//The Name of the Protagonist;
	Movies.ATKMoveNo = +d.TotalAttackMoves;//The Number of the Moves show the information of offensive;
	Movies.DEFMoveNo = +d.TotalDefenseMoves;//The Number of the Moves show the information of defensive;
	Movies.OMoveNo = +d.TotalOtherMoves;//The Number of the Moves show something else, neither offensive nor defensive;
	Movies.THMovesNo = +d.TotalHurtMoves;//The Number of the Moves show the Protagonist or his friend get hurt;
	Movies.ATKHMovesNo = +d.AttackHandMoves;//The Number of the Moves perform by hand and show some offensive information;
	Movies.ATKKMovesNo = +d.AttackKickMoves;//The Number of the Moves perform by leg and show some offensive information;
	Movies.ATKHHMovesNo = +d.ATKHHeadMoves;//The Number of those Moves using hand to attack the enemies' head;
	Movies.ATKHBMovesNo = +d.ATKHBodyMoves;//The Number of Those Moves using hand to attack the enemies' body;
	Movies.ATKHJMovesNo = +d.ATKHJointMoves;//The Number of Those Moves using hand to attack the enemies' joint or grap them;
	Movies.ATKKHMovesNo = +d.ATKKHeadMoves;//The Number of Those Moves using kick to attack the enemies' head;
	Movies.ATKKBMovesNo = +d.ATKKBodyMoves;//The Number of Those Moves using kick to attack the enemies' body;
	Movies.ATKKJMovesNo = +d.ATKKJointMoves;//The Number of Those Moves using kick to attack the enemies' joint or let them down;
	Movies.DEFBMovesNo = +d.DEFBlockMoves;//The Number of Those blocking moves;
	Movies.DEFEMovesNo = +d.DEFEvadeMoves;//The Number of Those evading moves;
	Movies.DEFBHMovesNo = +d.DEFBHeadMoves;//The Number of Those blocking moves help protect the head;
	Movies.DEFBBMovesNo = +d.DEFBBodyMoves;//The Number of Those blocking moves help protect the body;
	Movies.DEFHMovesNo = +d.DEFEHeadMoves;//The Number of Those moves help protect the head;
	Movies.DEFEBMovesNo = +d.DEFEBodyMoves;//The Number of Those moves help protect the body;
	Movies.HBMovesNo = +d.HurtBloodMoves;//The Number of Those moves lead the protagonist or his friend get hurt and bleeding;
	Movies.HNBMovesNo = +d.HurtNoBloodMoves;//The Number of Those moves lead the protagonist or his friend get hurt but without bleeding;
	Movies.HBHMovesNo = +d.HBHeadMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their head and bleeding;
	Movies.HBBMovesNo = +d.HBBodyMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their body and bleeding;
	Movies.HBJMovesNo = +d.HBJointMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their joint or grap them and bleeding;
	Movies.HNBHeadMovesNo = +d.HNBHeadMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their head but without bleeding;
	Movies.HNBodyBMovesNo = +d.HNBBodyMoves;//The Number of Those moves lead the protagonist or his friend get hurt on their body but without bleeding;
	Movies.HNBJointMovesNo = +d.HNBJointMoves;//The Number of Those moves lead the protagonist orhis friend get hurt on their joint or grap them but without bleeding;
	Movies.THeadMovesNo = +d.TotalHeadMoves;//The Number of those moves attack or hurt the head;
	Movies.TBodyMovesNo = +d.TotalBodyMoves;//The Number of Those moves attack or hurt the body;
	Movies.TJointMovesNo = +d.TotalJointMoves;//The Number of Those moves attack or hurt the joint;
	Movies.TPMovesNo = +d.TotalProtagonistMoves;//The Number of the moves preformed by the protagonist;
	Movies.TNPMovesNo = +d.TotalNoProtagonistMoves;//The Number of the moves not preformed by the protagonist;
	Movies.TPBHMovesNo = +d.TPBHeadMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his head;
	Movies.TPBBMovesNo = +d.TPBBodyMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his body;
	Movies.TPEHMovesNo = +d.TPEHeadMoves;//The Number of the moves preformed by the protagonist, and he evade the enemies' attack, protect his head;
	Movies.TPEBMovesNo = +d.TPEBodyMoves;//The Number of the moves preformed by the protagonist, and he block the enemies' attack, protect his body;
	Movies.TPKHMovesNo = +d.TPKHeadMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' head;
	Movies.TPKBMovesNo = +d.TPKBodyMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' body;
	Movies.TPKJMovesNo = +d.TPKJointMoves;//The Number of the moves preformed by the protagonist, and he kick the enemies' joint;
	Movies.TPHHMovesNo = +d.TPHHeadMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' head;
	Movies.TPHBMovesNo = +d.TPHBodyMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' body;
	Movies.TPHJMovesNo = +d.TPHJointMoves;//The Number of the moves preformed by the protagonist, and he punch the enemies' joint;
	Movies.TPPMovesNo = +d.TPPrepareMoves;//The Number of the moves preformed by the protagonist, and he is preparing the battle;
	Movies.TPJMovesNo = +d.TPJumpMoves;//The Number of the moves preformed by the protagonist, and he show his jumping skill;
	Movies.TPHBHMovesNo = +d.TPHBHeadMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his head and bleeding;
	Movies.TPHBBMovesNo = +d.TPHBBodyMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his body and bleeding;
	Movies.TPHBJMovesNo = +d.TPHBJointMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his joint and bleeding;
	Movies.TPHNBHMovesNo = +d.TPHNBHeadMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his head but without bleeding;
	Movies.TPHNBBMovesNo = +d.TPHNBBodyMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his body but without bleeding;
	Movies.TPHNBJMovesNo = +d.TPHNBJointMoves;//The Number of the moves preformed by the protagonist, show he get hurt on his joint but without bleeding;
	Movies.TOBHMovesNo = +d.TOBHeadMoves;//The Number of the moves not preformed by the protagonist, and they block the enemies' attack, protect their head;
	Movies.TOBBMovesNo = +d.TOBBodyMoves;//The Number of the moves not preformed by the protagonist, and they block the enemies' attack, protect their body;
	Movies.TOEHMovesNo = +d.TOEHeadMoves;//The Number of the moves not preformed by the protagonist, and they evade the enemies' attack, protect their head;
	Movies.TOEBMovesNo = +d.TOEBodyMoves;//The Number of the moves not preformed by the protagonist, and they evade the enemies' attack, protect their body;
	Movies.TOKHMovesNo = +d.TOKHeadMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' head;
	Movies.TOKBMovesNo = +d.TOKBodyMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' body;
	Movies.TOKJMovesNo = +d.TOKJointMoves;//The Number of the moves not preformed by the protagonist, and they kick the enemies' joint;
	Movies.TOHHMovesNo = +d.TOHHeadMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' head;
	Movies.TOHBMovesNo = +d.TOHBodyMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' body;
	Movies.TOHJMovesNo = +d.TOHJointMoves;//The Number of the moves not preformed by the protagonist, and they punch the enemies' joint;
	Movies.TOPMovesNo = +d.TOPrepareMoves;//The Number of the moves not preformed by the protagonist, and they are preparing the battle;
	Movies.TOJMovesNo = +d.TOJumpMoves;//The Number of the moves not preformed by the protagonist, and they are showing their jumping skill;
	Movies.TOHBHMovesNo = +d.TOHBHeadMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their head and bleeding;
	Movies.TOHBBodyMovesNo = +d.TOHBBodyMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their body and bleeding;
	Movies.TOHNBHMovesNo = +d.TOHNBHeadMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their head but without bleeding;
	Movies.TOHNBBMovesNo = +d.TOHNBBodyMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their body but without bleeding;
	Movies.TOHBJMovesNo = +d.TOHBJointMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their joint and bleeding;
	Movies.TOHNBJMovesNo = +d.TOHNBJointMoves;//The Number of the moves not preformed by the protagonist, show they get hurt on their joint but without bleeding;
	Movies.TOMovesTime = +d.TotalOthersMovesTime;//The total time in this movie that they perform some Kung Fu moves and those moves have no strong meaning about defense and offensive;
	Movies.TPOMovesTime = +d.TotalPOtherMovesTime;//The total time in this movie that the Kung Fu is not performed by the protagonist;
	Movies.Name = d.MovieName;//The Name of the Movie;

	
	KeyWord = "Visual";
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
	
	if(Movies.type == KeyWord)
		{
			console.log(Movies.type);
			DrawPoster(PosterName);
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
	
//	var CircleSize = document.getElementById('TimeBar_Part').offsetWidth;
//	var CirclePercentage = 0.37;
	
//	var KungFuAverageTime = d3.select('#TimeClock')
//		.attr("width",function()
//		{	
//			return (CirclePercentage * CircleSize)/2 + "px";
//		})
//		.attr("height", function(){
//			return (CirclePercentage * CircleSize)/2 + "px";
//		})
//		.style("margin-left",function(){
//			return 5 + "%";
//		})
//		.style("margin-top",function(){
//			var Topblank = 0.375 * document.getElementById('Main_Part').offsetHeight;
//			var MarginDis = Topblank - (CirclePercentage * CircleSize)/2;			
//			return Topblank + "px";
//		})
//	
//	var PrepareAverageTime = d3.select('#TimePreClock')
//		.attr("width",function()
//		{	
//			var CircleWidth = CirclePercentage * CircleSize * AverageTime1Parepare/AverageTimeFor1Move;
//			console.log(CircleWidth);
//			return CircleWidth/2 + "px";
//		})
//		.attr("height", function(){
//			var CircleHeight = CirclePercentage * CircleSize * AverageTime1Parepare/AverageTimeFor1Move;			
//			return CircleHeight/2 + "px";
//		})
//		.style("margin-left",function(){
//			return 5 + "%";
//		})
//		.style("margin-top",function(){
//			var Topblank = 0.75 * document.getElementById('Main_Part').offsetHeight;
//			var MarginDis = Topblank - (CirclePercentage * CircleSize * AverageTime1Parepare/AverageTimeFor1Move)/2;
//			return MarginDis + "px";
//		})	
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
		.append('path')
		.attr('class','path')
		.attr('id',ClassName)
		.attr("stroke",ColorHue)
		.attr("fill","none")
		.attr("stroke-width",StrokeWidth + "px")
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
			console.log(Value);
			d3.selectAll("#"+ClassName)
			.transition()
			.duration(durationTime/4)
			.style("opacity",0.8);
		})
		.on("mouseout",function(){
			d3.selectAll("#"+ClassName)
			.transition()
			.duration(durationTime/4)			
			.style("opacity",0.5);
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
}

function DrawTipImage()
{
	d3.select('#KungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight * 0.8;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#OffensiveKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.69;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#DefenseKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.76;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);	
	
	d3.select('#GetHurtKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.83;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#OtherKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.90;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#HandATKKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.68;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#KickATKKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.73;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#BlockDEFKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.78;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#EvadeDEFKungFu')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.83;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Noblood')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.90;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#blood')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.94;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Head')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.71;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Body')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.76;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#JointCapture')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.81;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Prepare')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.86;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Jump')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.91;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	d3.select('#Protagonist')
	.style("margin-top",function(){
		var MTOP = windowHeight*0.81;
		return MTOP + "px";
	})
	.style("opacity",0)
	.transition()
	.duration(durationTime)
	.style("opacity",1);
	
	DrawColorHue();
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
		.style('margin-left',0+"px")
		.style('margin-top',function(){
			return 0.75 * windowHeight + "px";
		})
		.style("position", "absolute")
		.attr("width",function(){
			return window.innerWidth*0.40 + "px";
		})
		.attr("height",function(){
			return windowHeight*0.25 + "px";
		});
	
	
	var TotalHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.4 + "px";
		})
		.style('x',function(){
			return 0 + "%";
		})
		.style("fill",TotalColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	var ProtagonistHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.7 + "px";
		})
		.style('x',function(){
			return 0 + "%";
		})
		.style("fill",ProtagonistColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	var OffensiveHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.4 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",OffensiveColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	var DefensivetHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.7 + "px";
		})
		.style('x',function(){
			return 30 + "%";
		})
		.style("fill",DefensiveColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	var HurtHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.4 + "px";
		})
		.style('x',function(){
			return 60 + "%";
		})
		.style("fill",HurtColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	var OtherHue = d3.select('#ColorHue_Part')
		.append('rect')
		.attr('class','rect')
		.style('y',function(){
			return windowHeight*0.25*0.7 + "px";
		})
		.style('x',function(){
			return 60 + "%";
		})
		.style("fill",OtherColor)
		.attr("width",60+"px")
		.attr("height",30+"px")
		.style("opacity",1)
//		.transition()
//		.duration(durationTime)
//		.styel("opacity",1);
	
	TextInfo();
}

function TextInfo()
{
	var TotalColor = "rgb"+'('+'0,16,78'+')';
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';
	var ProtagonistColor = "rgb"+'('+'254,113,95'+')';
	
//	var TotalPartText = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 22 + "%";
//		})
//		.attr("height",function(){
//			return 30 + "px"
//		})
//		.attr("y",function(){
//			return windowHeight*0.25*0.4 + 10 + "px";
//		})
//		.attr("x",function(){
//			return  60 + "px";
//		})
//		.append("text")
//		.attr('x',10 + "px")
//		.attr('y',function(){
//			return 15 + "px";
//		})
//		.text("All actors' Kung Fu Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");	
//	
//	var ProtagonistPartText = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 22 + "%";
//		})
//		.attr("height",function(){
//			return 30 + "px"
//		})
//		.attr("y",function(){
//			return windowHeight*0.25*0.7 + 10 + "px";
//		})
//		.attr("x",function(){
//			return  60 + "px";
//		})
//		.append("text")
//		.attr('x',10 + "px")
//		.attr('y',function(){
//			return 15 + "px";
//		})
//		.text("Starring Kung Fu Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");	
	
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
			return windowHeight*0.25*0.4 + 10 + "px";
		})
		.attr("x",function(){
			return  window.innerWidth*0.3*0.4 + 60 + "px";
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
			return windowHeight*0.25*0.7 + 10 + "px";
		})
		.attr("x",function(){
			return  window.innerWidth*0.3*0.4 + 60 + "px";
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
			return windowHeight*0.25*0.4 + 10 + "px";
		})
		.attr("x",function(){
			return  window.innerWidth*0.6*0.4 + 60 + "px";
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
			return  window.innerWidth*0.6*0.4 + 60 + "px";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("Other Kung Fu Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var FollowPart1stText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 10 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.85 + 10 + "px";
		})
		.attr("x",function(){
			return  2 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("1st Bar: All Kung Fu Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var OffensiveText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.74 + 10 + "px";
		})
		.attr("x",function(){
			return  21.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("1st Row: Offensive Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var DeffensiveText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.80 + 10 + "px";
		})
		.attr("x",function(){
			return  21.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("2nd Row: Defensive Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var HurtText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.88 + 10 + "px";
		})
		.attr("x",function(){
			return  21.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("3rd Row: Moves cause hurt")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var OtherText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.94 + 10 + "px";
		})
		.attr("x",function(){
			return  21.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("4th Row: Other Moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var HandText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.72 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("1st Row: Punches moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var KickText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.76 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("2nd Row: Kicking moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var BlockText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.81 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("3rd Row: Blocking moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var EvadeText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.86 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("4th Row: Evading moves")
		.style("font-size",12+"px")
		.style("fill","white");

		var HurtwithoutbloodText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.91 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("5th Row: Injured without bleeding")
		.style("font-size",12+"px")
		.style("fill","white");
	
	var HurtwithbloodText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.96 + 10 + "px";
		})
		.attr("x",function(){
			return  42 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("6th Row: Injured with bleeding")
		.style("font-size",12+"px")
		.style("fill","white");
	
	var HeadText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.75 + 10 + "px";
		})
		.attr("x",function(){
			return  62.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("1st Row: Hit on head")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var BodyText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.79 + 10 + "px";
		})
		.attr("x",function(){
			return  62.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("2nd Row: Hit on body")
		.style("font-size",12+"px")
		.style("fill","white");
	
	var JointText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.85 + 10 + "px";
		})
		.attr("x",function(){
			return  62.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("3nd Row: Hit on joint or capture")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var PrepareText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.89 + 10 + "px";
		})
		.attr("x",function(){
			return  62.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("4th Row: Prepare position moves")
		.style("font-size",12+"px")
		.style("fill","white");
	
	var PrepareText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.94 + 10 + "px";
		})
		.attr("x",function(){
			return  62.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("5th Row: Jumping moves")
		.style("font-size",12+"px")
		.style("fill","white");	
	
	var StarringText = d3.select('#Follow_Part')
		.append("svg")
		.attr("class","svg")
		.attr("width",function(){
			return 20 + "%";
		})
		.attr("height",function(){
			return 30 + "px"
		})
		.attr("y",function(){
			return windowHeight*0.85 + 10 + "px";
		})
		.attr("x",function(){
			return  82.5 + "%";
		})
		.append("text")
		.attr('x',10 + "px")
		.attr('y',function(){
			return 15 + "px";
		})
		.text("1st Row: Starring moves")
		.style("font-size",12+"px")
		.style("fill","white");
	
//Left Time Part Key words.////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	var AveragePart1Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 2 + "px";
//		})
//		.attr("x",function(){
//			return  0 + "px";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Seconds")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var AveragePart2Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 17 + "px";
//		})
//		.attr("x",function(){
//			return  0 + "px";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Per")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var AveragePart3Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 32 + "px";
//		})
//		.attr("x",function(){
//			return  0 + "px";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Other")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var AveragePart4Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 47 + "px";
//		})
//		.attr("x",function(){
//			return  0 + "px";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
//	var AveragePart21Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 2 + "px";
//		})
//		.attr("x",function(){
//			return  11.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Seconds")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var AveragePart22Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 17 + "px";
//		})
//		.attr("x",function(){
//			return  11.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Per")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var AveragePart23Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 32 + "px";
//		})
//		.attr("x",function(){
//			return  11.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	var Starring1Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 2 + "px";
//		})
//		.attr("x",function(){
//			return  32 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("The Time")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Starring2Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 60 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 17 + "px";
//		})
//		.attr("x",function(){
//			return  32 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Starring")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Starring3Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 32 + "px";
//		})
//		.attr("x",function(){
//			return  32 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Performed")
//		.style("font-size",12+"px")
//		.style("fill","white");	
//	
//	var Starring4Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 47 + "px";
//		})
//		.attr("x",function(){
//			return  32 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Kung Fu")
//		.style("font-size",12+"px")
//		.style("fill","white");	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	var Other1Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 2 + "px";
//		})
//		.attr("x",function(){
//			return  43.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("The Time")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Other2Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 17 + "px";
//		})
//		.attr("x",function(){
//			return  43.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Performed")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Starring3Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 32 + "px";
//		})
//		.attr("x",function(){
//			return  43.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Other")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Starring4Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 47 + "px";
//		})
//		.attr("x",function(){
//			return  43.5 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	var Total1Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 2 + "px";
//		})
//		.attr("x",function(){
//			return  55 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("The Time")
//		.style("font-size",12+"px")
//		.style("fill","white");
//	
//	var Total2Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 17 + "px";
//		})
//		.attr("x",function(){
//			return  55 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Performed")
//		.style("font-size",12+"px")
//		.style("fill","white");	
//	
//	LeftTextPart();
//}
//	
//	
//function LeftTextPart()
//{
//		var Total3Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 32 + "px";
//		})
//		.attr("x",function(){
//			return  55 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Kung Fu")
//		.style("font-size",12+"px")
//		.style("fill","white");	
//
//	var Total4Text = d3.select('#ColorHue_Part')
//		.append("svg")
//		.attr("class","svg")
//		.attr("width",function(){
//			return 50 + "px";
//		})
//		.attr("height",function(){
//			return 50 + "px"
//		})
//		.attr("y",function(){
//			return 47 + "px";
//		})
//		.attr("x",function(){
//			return  55 + "%";
//		})
//		.append("text")
//		.attr('x',1 + "px")
//		.attr('y',function(){
//			return 11 + "px";
//		})
//		.style("position","absolute")
//		.text("Moves")
//		.style("font-size",12+"px")
//		.style("fill","white");		
}
	
function DrawPieChart(TimeData)
{
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';	
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	
	var TotalKungFuMoves = null;
	TotalKungFuMoves = [null]
	for(var i=0;i<TimeData.length;i++)
		{
			if(i==0)
				{
					TotalKungFuMoves[i] = TimeData[i].TMoves;
				}
			else
				{
					TotalKungFuMoves.push(TimeData[i].TMoves);
				}
		}
	
	
	console.log(TotalKungFuMoves);
	
	var TotalKungFuTime = null;
	TotalKungFuTime = [null];
	for(var i=0;i<TimeData.length;i++)
		{
			if(i==0)
				{
					TotalKungFuMoves[i] = TimeData[i].TKFTime;
				}
			else
				{
					TotalKungFuMoves.push(TimeData[i].TKFTime);
				}
		}	
	
	return null;
}