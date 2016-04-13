function DeleteColorHuePart()
{
	d3.select('#ColorHue_Part')
//	.transition()
//	.duration(durationTime)
//	.style('opacity',0)
	.remove();
	
	d3.select('#PainHue')
	.remove();
	
	return null;
}

function DeleteCirclePart()
{
	d3.select('#CircleSvg')
	.remove();
	return null;
}

function DeleteFollowPart()
{
	d3.select('#Follow_Part')
	.remove();
	return null;
}

function DeleteMoveNumberText()
{
	d3.select('#MoveNumberText')
	.remove();
	return null;
}

function DeleteTitleText()
{
	d3.select('#TitleTextSvg')
	.remove();
	return null;
}

function DeleteForeverText()
{
	d3.select('#ForeverText')
	.remove();
	return null;
}

function DeleteStarringText()
{
	d3.select('#StarringText')
	.remove();
	return null;
}