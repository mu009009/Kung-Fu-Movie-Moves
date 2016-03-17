function DrawFollowPart(Movies)
{
	var Barwidth = 0.003;
	var BlankWidth = 0.22;
	var TopBlank = 0.06;
	var HeightWidth = 0.09;
	var M0X,M0Y,C10X,C10Y,C11X,C11Y,C12X,C12Y,C20X,C20Y,C21X,C21Y,C22X,C22Y,StrokeWidthPX,ColorHue;
	var OpacityHue = 0.80;
	var Ichangenumber = 2;
	var Bardis = 10;
	var SecondTopBlank = 2*TopBlank;
	var TwodSecondTopBlank = TopBlank/2;
	
	var Followsvg = d3.select('#Main_Part')
		.append('svg')
		.attr('id','Follow_Part')
        .attr("width", function(){
			return 60+"%";
		})
        .attr("height", function(){
			return document.getElementById('Main_Part').offsetHeight + "px";
		})
        .style("margin-left",function(){
			return 40+"%";
		})
		.style("margin-top",function(){
			return 0 + "px";
		})
		.style("position", "absolute")
        .append("g");
	
	var FirstDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
//        .style('fill',"rgb"+'('+'0,16,78'+')')
		.style('fill','black')
        .attr("x",function()
        {
            return 0 + "px";
        })
        .attr("y",function(){
			var Height = windowHeight * ImageMarginTop
			return Height;
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.style("z-index",90)
		.attr("height",0+"px")
		.style('z-index',90)	
		.transition()
		.duration(durationTime)	
        .attr("height",function() {
			var barHeight = FullPosterHeight;
			return barHeight + "px";
        })
	
	var AtackMoveHeight = (Movies.TotalAttackMoves/Movies.TotalMoves)*FullPosterHeight;
	var AtackMovesNo = Movies.TotalAttackMoves;
	var PreviousBarHeigh = 0;
	var AttackBarY = 0;
	var SecondTopDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			AttackBarY = windowHeight * TopBlank;
			return AttackBarY + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.style('z-index',90)
		.transition()
		.duration(durationTime)
        .attr("height",function() {
			PreviousBarHeigh = AtackMoveHeight;
			return AtackMoveHeight + "px";
        })
	StrokeWidthPX = AtackMoveHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = (windowHeight * ImageMarginTop+AtackMoveHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C10Y = (windowHeight * ImageMarginTop+AtackMoveHeight/2/Bardis*i).toString();
//			C11X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
//			C11Y = (3/4*(windowHeight * (ImageMarginTop - TopBlank))+ windowHeight * TopBlank + AtackMoveHeight/2).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C12Y = (1/2*(windowHeight * (ImageMarginTop - TopBlank))+ windowHeight * TopBlank + AtackMoveHeight/2/Bardis*i).toString();
//			C20X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
//			C20Y = (1/4*(windowHeight * (ImageMarginTop - TopBlank))+ windowHeight * TopBlank + AtackMoveHeight/2).toString();
//			C21X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
//			C21Y = (windowHeight * TopBlank + AtackMoveHeight/2).toString();
			C22X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth) +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = (windowHeight * TopBlank + AtackMoveHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,AtackMovesNo,"AtackMovesNo");
			i=i+Ichangenumber;
		}
	
	var DefenseMoveHeight = (Movies.TotalDefenseMoves/Movies.TotalMoves)*FullPosterHeight;
	var Second2ndDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 2 * windowHeight * TopBlank + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.style('z-index',90)
		.transition()
		.duration(durationTime)	
        .attr("height",function() {
			return DefenseMoveHeight + "px";
        })
	
	StrokeWidthPX = DefenseMoveHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+DefenseMoveHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C10Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+DefenseMoveHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C12Y = (1/2*(windowHeight * (ImageMarginTop - 2*TopBlank))+ windowHeight * 2 * TopBlank + PreviousBarHeigh + DefenseMoveHeight/2/Bardis*i).toString();
			C22X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth) +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((2*windowHeight * TopBlank + PreviousBarHeigh)+DefenseMoveHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TotalDefenseMoves,"TotalDefenseMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + DefenseMoveHeight;
	
	var HurtMovesHeight = (Movies.TotalHurtMoves/Movies.TotalMoves)*FullPosterHeight;
	var Second3rdDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 3 * windowHeight * TopBlank + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.style('z-index',90)
		.transition()
		.duration(durationTime)	
        .attr("height",function() {
			return HurtMovesHeight + "px";
        })
	
	StrokeWidthPX = HurtMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+HurtMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C10Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+HurtMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C12Y = (1/2*(windowHeight * (ImageMarginTop - 3*TopBlank))+ windowHeight * 3 * TopBlank + PreviousBarHeigh + HurtMovesHeight/2/Bardis*i).toString();
			C22X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth) +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((3*windowHeight * TopBlank + PreviousBarHeigh)+HurtMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TotalHurtMoves,"TotalHurtMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + HurtMovesHeight;	
	
	var OtherMovesHeight = (Movies.TotalOtherMoves/Movies.TotalMoves)*FullPosterHeight;
	var Second4thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 4 * windowHeight * TopBlank + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.style('z-index',90)	
		.transition()
		.duration(durationTime)	
        .attr("height",function() {
			return OtherMovesHeight + "px";
        })
	
	StrokeWidthPX = OtherMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+OtherMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C10Y = ((windowHeight * ImageMarginTop+PreviousBarHeigh)+OtherMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2 +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C12Y = (1/2*(windowHeight * (ImageMarginTop - 4*TopBlank))+ windowHeight * 4 * TopBlank + PreviousBarHeigh + OtherMovesHeight/2/Bardis*i).toString();
			C22X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth) +Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((4*windowHeight * TopBlank + PreviousBarHeigh)+OtherMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"64,185,176"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TotalOtherMoves,"TotalOtherMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + OtherMovesHeight;
	PreviousBarHeigh = 0;
	
	var HandMovesHeight = (Movies.AttackHandMoves/Movies.TotalAttackMoves)*AtackMoveHeight;
	var Third1stDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * SecondTopBlank + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return HandMovesHeight + "px";
        })
	
	StrokeWidthPX = HandMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * TopBlank)+ HandMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * TopBlank)+ HandMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (SecondTopBlank - TopBlank))+ windowHeight * 1 * TopBlank + PreviousBarHeigh + HandMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1*windowHeight * SecondTopBlank + PreviousBarHeigh)+HandMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.AttackHandMoves,"AttackHandMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + HandMovesHeight;
	
	var KickMovesHeight = (Movies.AttackKickMoves/Movies.TotalAttackMoves)*AtackMoveHeight;
	var Third2ndDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 1 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return KickMovesHeight + "px";
        })
	
	StrokeWidthPX = KickMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * TopBlank)+ PreviousBarHeigh + KickMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * TopBlank)+ PreviousBarHeigh + KickMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * TwodSecondTopBlank + SecondTopBlank - TopBlank))+ windowHeight * 1 * TopBlank + PreviousBarHeigh + KickMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ KickMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.AttackKickMoves,"AttackKickMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + KickMovesHeight;
	
	var BlockMovesHeight = (Movies.DEFBlockMoves/Movies.TotalDefenseMoves)*DefenseMoveHeight;
	var Third3rdDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 2 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return BlockMovesHeight + "px";
        })
	
	StrokeWidthPX = BlockMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank)+ PreviousBarHeigh + BlockMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank)+ PreviousBarHeigh + BlockMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (2 * TwodSecondTopBlank + SecondTopBlank - 2 * TopBlank))+ windowHeight * 2 * TopBlank + PreviousBarHeigh + BlockMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ BlockMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.DEFBlockMoves,"DEFBlockMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + BlockMovesHeight;
	
	var EvadeMovesHeight = (Movies.DEFEvadeMoves/Movies.TotalDefenseMoves)*DefenseMoveHeight;
	var Third4thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 3 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return EvadeMovesHeight + "px";
        })
	
	StrokeWidthPX = EvadeMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank)+ PreviousBarHeigh + EvadeMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank)+ PreviousBarHeigh + EvadeMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (3 * TwodSecondTopBlank + SecondTopBlank - 2 * TopBlank))+ windowHeight * 2 * TopBlank + PreviousBarHeigh + EvadeMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(3 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ EvadeMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.DEFEvadeMoves,"DEFEvadeMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + EvadeMovesHeight;	
	
	var NoBloodMovesHeight = (Movies.HurtNoBloodMoves/Movies.TotalHurtMoves)*HurtMovesHeight;
	var Third5thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 4 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return NoBloodMovesHeight + "px";
        })
	
	StrokeWidthPX = NoBloodMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank)+ PreviousBarHeigh + NoBloodMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank)+ PreviousBarHeigh + NoBloodMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (4 * TwodSecondTopBlank + SecondTopBlank - 3 * TopBlank))+ windowHeight * 3 * TopBlank + PreviousBarHeigh + NoBloodMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(4 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ NoBloodMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.HurtNoBloodMoves,"HurtNoBloodMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + NoBloodMovesHeight;
	
	var BloodMovesHeight = (Movies.HurtBloodMoves/Movies.TotalHurtMoves)*HurtMovesHeight;
	var Third6thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth +Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 5 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return BloodMovesHeight + "px";
        })
	
	StrokeWidthPX = BloodMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank)+ PreviousBarHeigh + BloodMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank)+ PreviousBarHeigh + BloodMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (5 * TwodSecondTopBlank + SecondTopBlank - 3 * TopBlank))+ windowHeight * 3 * TopBlank + PreviousBarHeigh + BloodMovesHeight/2/Bardis*i).toString();
			C22X = (2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(5 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ BloodMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.HurtBloodMoves,"HurtBloodMoves");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + BloodMovesHeight;

	var TPPNo = +Movies.TPPrepareMoves;
	var TOPNo = +Movies.TOPrepareMoves;
	
	
	var PrepareMovesHeight = ((TOPNo+TPPNo)/Movies.TotalOtherMoves)*OtherMovesHeight;
	
	var Third7thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 6 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return PrepareMovesHeight + "px";
        })
	
	StrokeWidthPX = PrepareMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 4 * TopBlank)+ PreviousBarHeigh + PrepareMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 4 * TopBlank)+ PreviousBarHeigh + PrepareMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   ((2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth)+Barwidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (6 * TwodSecondTopBlank + SecondTopBlank - 4 * TopBlank))+ windowHeight * 4 * TopBlank + PreviousBarHeigh + PrepareMovesHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(6 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ PrepareMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"64,185,176"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,(TOPNo+TPPNo),"TOPNo");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + PrepareMovesHeight;	
	
	
	var TPJNo = +Movies.TPJumpMoves;
	var TOJNo = +Movies.TOJumpMoves;	
	var JumpMovesHeight = ((TPJNo+TOJNo)/Movies.TotalOtherMoves)*OtherMovesHeight;
	
	var Third8thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (SecondTopBlank + 7 * TwodSecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return JumpMovesHeight + "px";
        })
	
	StrokeWidthPX = JumpMovesHeight/Bardis;
	var i = 1;
	while(i<=19)
		{	
			M0X = (BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 4 * TopBlank)+ PreviousBarHeigh + JumpMovesHeight/2/Bardis*i).toString();
			C10X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 4 * TopBlank)+ PreviousBarHeigh + JumpMovesHeight/2/Bardis*i).toString();
			C12X = ((BlankWidth * document.getElementById('Follow_Part').offsetWidth + 1 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   ((2 * BlankWidth * document.getElementById('Follow_Part').offsetWidth)+Barwidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (7 * TwodSecondTopBlank + SecondTopBlank - 4 * TopBlank))+ windowHeight * 4 * TopBlank + PreviousBarHeigh + JumpMovesHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(7 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ JumpMovesHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"64,185,176"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,(TPJNo+TOJNo),"TPJNo");
			
			i=i+Ichangenumber;
		}
	PreviousBarHeigh = PreviousBarHeigh + JumpMovesHeight;
	PreviousBarHeigh = 0;

	var HHeadNo = +Movies.ATKHHeadMoves;
	var KHeadNo = +Movies.ATKKHeadMoves;
	var BHeadNo = +Movies.DEFBHeadMoves;
	var EHeadNo = +Movies.DEFEHeadMoves;
	var BHHeadNo = +Movies.HBHeadMoves;
	var NBHHeadNo = +Movies.HNBHeadMoves;
	var OtherMovesNo = +Movies.TotalOtherMoves
	var TotalMoves = +Movies.TotalMoves
	var TotalHeadMoves = (HHeadNo+KHeadNo+BHeadNo+EHeadNo+BHHeadNo+NBHHeadNo)
	
	var HeadMovesHeight = (TotalHeadMoves/(TotalMoves))*FullPosterHeight;
	
	var Fourth1stDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (1 * TopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return HeadMovesHeight + "px";
        })
	
	var HHeadHeight = (HHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = HHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * SecondTopBlank)+ PreviousBarHeigh + HHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * SecondTopBlank)+ PreviousBarHeigh + HHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (SecondTopBlank - TopBlank))+ windowHeight * 1 * TopBlank + PreviousBarHeigh + HHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + PreviousBarHeigh)+ HHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,HHeadNo,"HHeadNo");
			
			i=i+Ichangenumber;
		}
	
	var KHeadHeight = (KHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = KHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 1 * TwodSecondTopBlank - TopBlank)) + (HandMovesHeight - HHeadHeight)) + windowHeight * 1 * TopBlank + HHeadHeight + PreviousBarHeigh 
					+ KHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + HHeadHeight + PreviousBarHeigh)+ KHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,KHeadNo,"KHeadNo");
			
			i=i+Ichangenumber;
		}
	
	var BHeadHeight = (BHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = BHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 2 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 2 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 2 * TwodSecondTopBlank - TopBlank)) + (HandMovesHeight + KickMovesHeight - HHeadHeight - KHeadHeight)) 
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + PreviousBarHeigh + BHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + HHeadHeight + KHeadHeight + PreviousBarHeigh)+ BHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,BHeadNo,"BHeadNo");
			
			i=i+Ichangenumber;
		}
	
	var EHeadHeight = (EHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = EHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 3 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 3 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 3 * TwodSecondTopBlank - TopBlank)) + (HandMovesHeight + KickMovesHeight + BlockMovesHeight - HHeadHeight - KHeadHeight - BHeadHeight)) 
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + PreviousBarHeigh + EHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + HHeadHeight + KHeadHeight + BHeadHeight + PreviousBarHeigh)+ EHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,EHeadNo,"EHeadNo");
			
			i=i+Ichangenumber;
		}
	
	var NBHHeadHeight = (NBHHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = NBHHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 4 * TwodSecondTopBlank - TopBlank)) + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight
																								  - HHeadHeight - KHeadHeight - BHeadHeight - EHeadHeight)) 
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PreviousBarHeigh + NBHHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PreviousBarHeigh)+ NBHHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,NBHHeadNo,"NBHHeadNo");
			
			i=i+Ichangenumber;
		}	
	
	var BHHeadHeight = (BHHeadNo/TotalHeadMoves)*HeadMovesHeight
		StrokeWidthPX = BHHeadHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank))+ PreviousBarHeigh + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 5 * TwodSecondTopBlank - TopBlank)) + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
																								  - HHeadHeight - KHeadHeight - BHeadHeight - EHeadHeight - NBHHeadHeight)) 
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + NBHHeadHeight + PreviousBarHeigh + BHHeadHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * TopBlank) + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + NBHHeadHeight + PreviousBarHeigh)+ BHHeadHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,BHHeadNo,"BHHeadNo");
			
			i=i+Ichangenumber;
		}	
	
	PreviousBarHeigh = PreviousBarHeigh + HeadMovesHeight;
	
	var HBodyNo = +Movies.ATKHBodyMoves;
	var KBodyNo = +Movies.ATKKBodyMoves;
	var BBodyNo = +Movies.DEFBBodyMoves;
	var EBodyNo = +Movies.DEFEBodyMoves;
	var BHBodyNo = +Movies.HBBodyMoves;
	var NBBodyNo = +Movies.HNBBodyMoves;
	var OtherMovesNo = +Movies.TotalOtherMoves
	var TotalMoves = +Movies.TotalMoves
	var TotalBodyMoves = (HBodyNo+KBodyNo+BBodyNo+EBodyNo+BHBodyNo+NBBodyNo)
	
	var BodyMovesHeight = (TotalBodyMoves/(TotalMoves))*FullPosterHeight;

	var Fourth2ndDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (2 * TopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return BodyMovesHeight + "px";
        })
	
	var HBodyHeight = (HBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = HBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * SecondTopBlank)+  HHeadHeight + HBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * SecondTopBlank)+  HHeadHeight + HBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (2 * TopBlank - SecondTopBlank) + PreviousBarHeigh - HHeadHeight )+ windowHeight * 1 * SecondTopBlank + HHeadHeight + HBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + PreviousBarHeigh)+ HBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,HBodyNo,"HBodyNo");
			
			i=i+Ichangenumber;
		}
	
	var KBodyHeight = (KBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = KBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ KHeadHeight + HandMovesHeight + KBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ KHeadHeight + HandMovesHeight + KBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (2 * TopBlank - SecondTopBlank - 1 * TwodSecondTopBlank) + PreviousBarHeigh + HBodyHeight - KHeadHeight - HandMovesHeight )
					+ windowHeight * 1 * (SecondTopBlank + 1 * TwodSecondTopBlank)  
					+ HandMovesHeight + KHeadHeight + KBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + PreviousBarHeigh) + HBodyHeight + KBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,KBodyNo,"KBodyNo");
			
			i=i+Ichangenumber;
		}
	
	var BBodyHeight = (BBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = BBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 2 * TwodSecondTopBlank)) + BHeadHeight + HandMovesHeight + KickMovesHeight + BBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 2 * TwodSecondTopBlank)) + BHeadHeight + HandMovesHeight + KickMovesHeight + BBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 2 * TwodSecondTopBlank - 2 * TopBlank) + (HandMovesHeight + KickMovesHeight + BHeadHeight - HeadMovesHeight - KBodyHeight - HBodyHeight))) 
					+ windowHeight * 2 * TopBlank + HBodyHeight + KBodyHeight + PreviousBarHeigh + BBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + HBodyHeight + KBodyHeight + PreviousBarHeigh)+ BBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,BBodyNo,"BBodyNo");
			
			i=i+Ichangenumber;
		}
	
	var EBodyHeight = (EBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = EBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 3 * TwodSecondTopBlank))+ HandMovesHeight + KickMovesHeight + BlockMovesHeight + EHeadHeight + EBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 3 * TwodSecondTopBlank))+ HandMovesHeight + KickMovesHeight + BlockMovesHeight + EHeadHeight + EBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 3 * TwodSecondTopBlank - 2 * TopBlank)) 
					+ (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EHeadHeight - PreviousBarHeigh - HBodyHeight - KBodyHeight - BBodyHeight)) 
					+ windowHeight * 2 * TopBlank + HBodyHeight + KBodyHeight + BBodyHeight + PreviousBarHeigh + EBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + HBodyHeight + KBodyHeight + BBodyHeight + PreviousBarHeigh)+ EBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,EBodyNo,"EBodyNo");
			
			i=i+Ichangenumber;
		}
	
	var NBHBodyHeight = (NBBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = NBHBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight + NBHBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight + NBHBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 4 * TwodSecondTopBlank - 2 * TopBlank)) 
						 + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight
						- PreviousBarHeigh - HBodyHeight - KBodyHeight - BBodyHeight - EBodyHeight)) 
					+ windowHeight * 2 * TopBlank + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + PreviousBarHeigh + NBHBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + PreviousBarHeigh)+ NBHBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,NBBodyNo,"NBBodyNo");
			
			i=i+Ichangenumber;
		}	
	
	var BHBodyHeight = (BHBodyNo/TotalBodyMoves)*BodyMovesHeight
		StrokeWidthPX = BHBodyHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight + BHBodyHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight + BHBodyHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 5 * TwodSecondTopBlank - 2 * TopBlank))
						 + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight + BHHeadHeight
							- PreviousBarHeigh - HBodyHeight - KBodyHeight - BBodyHeight - EBodyHeight - NBHBodyHeight)) 
					+ windowHeight * 2 * TopBlank + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + NBHBodyHeight + PreviousBarHeigh + BHBodyHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(2 * TopBlank) + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + NBHBodyHeight + PreviousBarHeigh)+ BHBodyHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,BHBodyNo,"BHBodyNo");
			
			i=i+Ichangenumber;
		}	
	
	PreviousBarHeigh = PreviousBarHeigh + BodyMovesHeight;
	
	var HJointNo = +Movies.ATKHJointMoves;
	var KJointNo = +Movies.ATKKJointMoves;
	var BHJointNo = +Movies.HBJointMoves;
	var NBJointNo = +Movies.HNBJointMoves;
	var OtherMovesNo = +Movies.TotalOtherMoves
	var TotalMoves = +Movies.TotalMoves
	var TotalJointMoves = (HJointNo + KJointNo + BHJointNo + NBJointNo)
	
	var JointMovesHeight = (TotalJointMoves/(TotalMoves))*FullPosterHeight;

	var Fourth3rdDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (3 * TopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return JointMovesHeight + "px";
        })
	
	var HJointHeight = (HJointNo/TotalJointMoves)*JointMovesHeight
		StrokeWidthPX = HJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * SecondTopBlank) +  HHeadHeight + HBodyHeight + HJointHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * SecondTopBlank) +  HHeadHeight + HBodyHeight + HJointHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (3 * TopBlank - SecondTopBlank) + PreviousBarHeigh - HHeadHeight - HBodyHeight )+ windowHeight * 1 * SecondTopBlank + HHeadHeight + HBodyHeight
					+ HJointHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(3 * TopBlank) + PreviousBarHeigh)+ HJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,HJointNo,"HJointNo");
			
			i=i+Ichangenumber;
		}
	
	var KJointHeight = (KJointNo/TotalJointMoves)*JointMovesHeight
		StrokeWidthPX = KJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ KHeadHeight + KBodyHeight + HandMovesHeight + KJointHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 1 * TwodSecondTopBlank))+ KHeadHeight + KBodyHeight + HandMovesHeight + KJointHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (3 * TopBlank - SecondTopBlank - 1 * TwodSecondTopBlank) + PreviousBarHeigh + HJointHeight - KHeadHeight - KBodyHeight - HandMovesHeight )
					+ windowHeight * 1 * (SecondTopBlank + 1 * TwodSecondTopBlank)  
					+ HandMovesHeight + KHeadHeight + KBodyHeight + KJointHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(3 * TopBlank) + PreviousBarHeigh) + HJointHeight + KJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,KJointNo,"KJointNo");
			
			i=i+Ichangenumber;
		}
	
	var NBHJointHeight = (NBJointNo/TotalJointMoves)*JointMovesHeight
		StrokeWidthPX = NBHJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight 
				   + NBHHeadHeight + NBHBodyHeight + NBHJointHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 4 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight 
				   + NBHHeadHeight + NBHBodyHeight + NBHJointHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 4 * TwodSecondTopBlank - 3 * TopBlank)) 
						 + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NBHHeadHeight + NBHBodyHeight
						- PreviousBarHeigh - HJointHeight - KJointHeight)) 
					+ windowHeight * 3 * TopBlank + HJointHeight + KJointHeight + PreviousBarHeigh + NBHJointHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(3 * TopBlank) + HJointHeight + KJointHeight + PreviousBarHeigh)+ NBHJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,NBJointNo,"NBJointNo");
			
			i=i+Ichangenumber;
		}	
	
	var BHJointHeight = (BHJointNo/TotalJointMoves)*JointMovesHeight
		StrokeWidthPX = BHJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight + BHBodyHeight + BHJointHeight/2/Bardis*i).toString();
			C10X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * (SecondTopBlank+ 5 * TwodSecondTopBlank)) + HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight
				   + BHHeadHeight + BHBodyHeight + BHJointHeight/2/Bardis*i).toString();
			C12X = ((2*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*((windowHeight * (SecondTopBlank + 5 * TwodSecondTopBlank - 3 * TopBlank))
						 + (HandMovesHeight + KickMovesHeight + BlockMovesHeight + EvadeMovesHeight + NoBloodMovesHeight + BHHeadHeight + BHBodyHeight
							- PreviousBarHeigh - HJointHeight - KJointHeight - NBHJointHeight)) 
					+ windowHeight * 3 * TopBlank + HJointHeight + KJointHeight + NBHJointHeight + PreviousBarHeigh + BHJointHeight/2/Bardis*i).toString();
			C22X = (3 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(3 * TopBlank) + HJointHeight + KJointHeight + NBHJointHeight + PreviousBarHeigh)+ BHJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"218,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,BHJointNo,"BHJointNo");
			
			i=i+Ichangenumber;
		}	
	
	PreviousBarHeigh = PreviousBarHeigh + JointMovesHeight;
	PreviousBarHeigh = 0;
	
	var ProtagonistMovesHeight = (Movies.TotalProtagonistMoves/Movies.TotalMoves)*FullPosterHeight;

	var Fourth4thDis = Followsvg
	    .append("rect")
        .attr("class", "rect")
		.style('fill','black')
        .attr("x",function()
        {
			var Width = 4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Width + "px";
        })
        .attr("y",function(){
			var Height = 1 * windowHeight * (1 * SecondTopBlank) + PreviousBarHeigh;
			return Height + "px";
		})
        .attr("width",function()
		{
			var Xlocation = Barwidth * document.getElementById('Follow_Part').offsetWidth;
            return Xlocation + "px";			
		})
		.attr("height",0+"px")
		.transition()
		.duration(durationTime)
		.style('z-index',90)		
        .attr("height",function() {
			return ProtagonistMovesHeight + "px";
        })
	
	var PHHeadtHeight = (Movies.TPHHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHHeadtHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank) + PHHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank) + PHHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank) + PreviousBarHeigh)+ windowHeight * 1 * TopBlank + PHHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PHHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHHeadMoves,"TPHHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	var PKHeadtHeight = (Movies.TPKHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PKHeadtHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank + HHeadHeight) + PKHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank + HHeadHeight) + PKHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank) + PHHeadtHeight - HHeadHeight + PreviousBarHeigh)+ windowHeight * 1 * TopBlank + HHeadHeight + PKHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) +PHHeadtHeight+ PreviousBarHeigh)+ PKHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPKHeadMoves,"TPKHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	var PBHeadtHeight = (Movies.TPBHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PBHeadtHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight) + PBHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight) + PBHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank) + PHHeadtHeight + PKHeadtHeight - HHeadHeight - KHeadHeight + PreviousBarHeigh)+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + PBHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) +PHHeadtHeight + PKHeadtHeight + PreviousBarHeigh)+ PBHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPBHeadMoves,"TPBHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	var PEHeadtHeight = (Movies.TPEHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PEHeadtHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight) + PEHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight) + PEHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank)
					+ PHHeadtHeight + PKHeadtHeight + PBHeadtHeight - HHeadHeight - KHeadHeight - BHeadHeight + PreviousBarHeigh)
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + PEHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) +PHHeadtHeight + PKHeadtHeight + PBHeadtHeight + PreviousBarHeigh)+ PEHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPEHeadMoves,"TPEHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	var PHNBHeadtHeight = (Movies.TPHNBHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHNBHeadtHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight) + PHNBHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight) + PHNBHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank)
					+ PHHeadtHeight + PKHeadtHeight + PBHeadtHeight +PEHeadtHeight - HHeadHeight - KHeadHeight - BHeadHeight - EHeadHeight + PreviousBarHeigh)
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PHNBHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PHHeadtHeight + PKHeadtHeight + PBHeadtHeight + PEHeadtHeight + PreviousBarHeigh)+ PHNBHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHNBHeadMoves,"TPHNBHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	var PHBHeadtHeight = (Movies.TPHBHeadMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHBHeadtHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PHNBHeadtHeight) + PHBHeadtHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PHNBHeadtHeight) + PHBHeadtHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 1 * TopBlank)
					+ PHHeadtHeight + PKHeadtHeight + PBHeadtHeight + PEHeadtHeight + PHNBHeadtHeight - HHeadHeight - KHeadHeight - BHeadHeight - EHeadHeight - NBHHeadHeight + PreviousBarHeigh)
					+ windowHeight * 1 * TopBlank + HHeadHeight + KHeadHeight + BHeadHeight + EHeadHeight + PHNBHeadtHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PHHeadtHeight + PKHeadtHeight + PBHeadtHeight + PEHeadtHeight + PHNBHeadtHeight + PreviousBarHeigh)+ PHBHeadtHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHBHeadMoves,"TPHBHeadMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHHeadtHeight + PKHeadtHeight + PBHeadtHeight + PEHeadtHeight + PHNBHeadtHeight + PHBHeadtHeight;
	
	var PHBodytHeight = (Movies.TPHBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHBodytHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + PHBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + PHBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh - HeadMovesHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + PHBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PHBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHBodyMoves,"TPHBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	var PKBodytHeight = (Movies.TPKBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PKBodytHeight/Bardis;
	
	PreviousBarHeigh = PreviousBarHeigh + PHBodytHeight;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + PKBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + PKBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh  - HeadMovesHeight - HBodyHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + HBodyHeight + PKBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh )+ PKBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPKBodyMoves,"TPKBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PKBodytHeight;
	
	var PBBodytHeight = (Movies.TPBBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PBBodytHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + PBBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + PBBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh  - HeadMovesHeight - HBodyHeight - KBodyHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + HBodyHeight + KBodyHeight + PBBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh )+ PBBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPBBodyMoves,"TPBBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PBBodytHeight;
	
	var PEBodytHeight = (Movies.TPEBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PEBodytHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + PEBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + PEBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh  - HeadMovesHeight - HBodyHeight - KBodyHeight - BBodyHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + PEBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh )+ PEBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"104,187,223"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPEBodyMoves,"TPEBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PEBodytHeight;
	
	var PHNBBodytHeight = (Movies.TPHNBBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHNBBodytHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + PHNBBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + PHNBBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh  - HeadMovesHeight - HBodyHeight - KBodyHeight - BBodyHeight - EBodyHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + PHNBBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh )+ PHNBBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHNBBodyMoves,"TPHNBBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHNBBodytHeight;
	
	var PHBBodytHeight = (Movies.TPHBBodyMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHBBodytHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + NBHBodyHeight + PHBBodytHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 2 * TopBlank) + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + NBHBodyHeight + PHBBodytHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 2 * TopBlank) 
					+ PreviousBarHeigh  - HeadMovesHeight - HBodyHeight - KBodyHeight - BBodyHeight - EBodyHeight - NBHBodyHeight)
					+ windowHeight * 2 * TopBlank + HeadMovesHeight + HBodyHeight + KBodyHeight + BBodyHeight + EBodyHeight + NBHBodyHeight + PHBBodytHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh )+ PHBBodytHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHBBodyMoves,"TPHBBodyMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHBBodytHeight;
	
	var PHJointHeight = (Movies.TPHJointMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + PHJointHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + PHJointHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 3 * TopBlank) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight)
					+ windowHeight * 3 * TopBlank + HeadMovesHeight + BodyMovesHeight + PHJointHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PHJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHJointMoves,"TPHJointMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHJointHeight;
	
	var PKJointHeight = (Movies.TPKJointMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PKJointHeight/Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + PKJointHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + PKJointHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 3 * TopBlank) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight - HJointHeight)
					+ windowHeight * 3 * TopBlank + HeadMovesHeight + BodyMovesHeight + HJointHeight + PKJointHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PKJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"255,58,129"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPKJointMoves,"TPKJointMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PKJointHeight;
	
	var PHNBJointHeight = (Movies.TPHNBJointMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHNBJointHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + PHNBJointHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + PHNBJointHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 3 * TopBlank) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight - HJointHeight - KJointHeight)
					+ windowHeight * 3 * TopBlank + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + PHNBJointHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PHNBJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHNBJointMoves,"TPHNBJointMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHNBJointHeight;
	
	var PHBJointHeight = (Movies.TPHBJointMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = PHBJointHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + NBHJointHeight + PHBJointHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * 3 * TopBlank) + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + NBHJointHeight + PHBJointHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - 3 * TopBlank) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight - HJointHeight - KJointHeight - NBHJointHeight)
					+ windowHeight * 3 * TopBlank + HeadMovesHeight + BodyMovesHeight + HJointHeight + KJointHeight + NBHJointHeight + PHBJointHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ PHBJointHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"281,216,167"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPHBJointMoves,"TPHBJointMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + PHBJointHeight;
	
	var TPPrepareHeight = (Movies.TPPrepareMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = TPPrepareHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * (3 * TopBlank + SecondTopBlank)) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + TPPrepareHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * (3 * TopBlank + SecondTopBlank)) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + TPPrepareHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - (3 * TopBlank + SecondTopBlank)) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight - JointMovesHeight)
					+ windowHeight * (3 * TopBlank + SecondTopBlank) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + TPPrepareHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ TPPrepareHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"64,185,176"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPPrepareMoves,"TPPrepareMoves");
			
			i=i+Ichangenumber;
		}
	
	PreviousBarHeigh = PreviousBarHeigh + TPPrepareHeight;
	
	var TPJumpHeight = (Movies.TPJumpMoves/Movies.TotalProtagonistMoves)*ProtagonistMovesHeight
		StrokeWidthPX = TPJumpHeight /Bardis;
	
	var i = 1;
	while(i<=19)
		{	
			M0X = (3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			M0Y = ((windowHeight * (3 * TopBlank + SecondTopBlank + TwodSecondTopBlank)) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + PrepareMovesHeight + TPJumpHeight/2/Bardis*i).toString();
			C10X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C10Y = ((windowHeight * (3 * TopBlank + SecondTopBlank + TwodSecondTopBlank)) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + PrepareMovesHeight + TPJumpHeight/2/Bardis*i).toString();
			C12X = ((3*BlankWidth * document.getElementById('Follow_Part').offsetWidth + 3 * Barwidth * document.getElementById('Follow_Part').offsetWidth)+
				   (BlankWidth * document.getElementById('Follow_Part').offsetWidth)/2).toString();
			C12Y = (1/2*(windowHeight * (1 * SecondTopBlank - (3 * TopBlank + SecondTopBlank + TwodSecondTopBlank)) 
					+ PreviousBarHeigh - HeadMovesHeight - BodyMovesHeight - JointMovesHeight - PrepareMovesHeight)
					+ windowHeight * (3 * TopBlank + SecondTopBlank + TwodSecondTopBlank) + HeadMovesHeight + BodyMovesHeight + JointMovesHeight + PrepareMovesHeight + TPJumpHeight/2/Bardis*i).toString();
			C22X = (4 * BlankWidth * document.getElementById('Follow_Part').offsetWidth + 2 * Barwidth * document.getElementById('Follow_Part').offsetWidth).toString();
			C22Y = ((1 * windowHeight *(1 * SecondTopBlank) + PreviousBarHeigh)+ TPJumpHeight/2/Bardis*i).toString();

			ColorHue = "rgb"+'('+"64,185,176"+')';
			DrawPath(M0X,M0Y,C10X,C10Y,C12X,C12Y,C22X,C22Y,ColorHue,StrokeWidthPX,Movies.TPJumpMoves,"TPJumpMoves");
			
			i=i+Ichangenumber;
		}
	
//	((1 * windowHeight *(7 * TwodSecondTopBlank + SecondTopBlank) + PreviousBarHeigh)+ JumpMovesHeight/2/Bardis*i).toString()
	
	PreviousBarHeigh = PreviousBarHeigh + TPJumpHeight;	
	
	PreviousBarHeigh = 0;
	
	DrawTipImage();
}