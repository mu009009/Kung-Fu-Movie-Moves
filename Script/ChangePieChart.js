function ChangePieChart(MovieData,ClassName)
{
	var OffensiveColor = "rgb"+'('+"255,58,129"+')';
	var DefensiveColor = "rgb"+'('+"104,187,223"+')';
	var OtherColor = "rgb"+'('+"64,185,176"+')';	
	var HurtColor = "rgb"+'('+"281,216,167"+')';
	
	for(var i=0;i<MovieData.length;i++)
		{
			switch (ClassName)
				{
					case "TotalAttackMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TotalAttackMoves,MovieData[i].TotalMoves);
						break;
					case "TotalDefenseMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TotalDefenseMoves,MovieData[i].TotalMoves);
						break;
					case "TotalHurtMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TotalHurtMoves,MovieData[i].TotalMoves);
						break;
					case "TotalOtherMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TotalOtherMoves,MovieData[i].TotalMoves);
						break;
					case "AttackHandMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].AttackHandMoves,MovieData[i].TotalMoves);
						break;
					case "AttackKickMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].AttackKickMoves,MovieData[i].TotalMoves);
						break;
					case "DEFBlockMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFBlockMoves,MovieData[i].TotalMoves);
						break;
					case "DEFEvadeMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFEvadeMoves,MovieData[i].TotalMoves);
						break;
					case "HurtNoBloodMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HurtNoBloodMoves,MovieData[i].TotalMoves);
						break;
					case "HurtBloodMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HurtBloodMoves,MovieData[i].TotalMoves);
						break;
					case "TOPNo":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPPrepareMoves+MovieData[i].TOPrepareMoves,MovieData[i].TotalMoves);
						break;
					case "TPJNo":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPJumpMoves+MovieData[i].TOJumpMoves,MovieData[i].TotalMoves);
						break;
					case "ATKHHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKHHeadMoves,MovieData[i].TotalMoves);
						break;
					case "ATKKHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKKHeadMoves,MovieData[i].TotalMoves);
						break;
					case "DEFBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFBHeadMoves,MovieData[i].TotalMoves);
						break;
					case "DEFEHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFEHeadMoves,MovieData[i].TotalMoves);
						break;
					case "HNBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HNBHeadMoves,MovieData[i].TotalMoves);
						break;
					case "HBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HBHeadMoves,MovieData[i].TotalMoves);
						break;
					case "ATKHBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKHBodyMoves,MovieData[i].TotalMoves);
						break;
					case "ATKKBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKKBodyMoves,MovieData[i].TotalMoves);
						break;
					case "DEFBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "DEFEBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].DEFEBodyMoves,MovieData[i].TotalMoves);
						break;
					case "HNBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HNBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "HBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "ATKHJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKHJointMoves,MovieData[i].TotalMoves);
						break;
					case "ATKKJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].ATKKJointMoves,MovieData[i].TotalMoves);
						break;
					case "HNBJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HNBJointMoves,MovieData[i].TotalMoves);
						break;
					case "HBJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].HBJointMoves,MovieData[i].TotalMoves);
						break;
					case "TPHHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHHeadMoves,MovieData[i].TotalMoves);
						break;
					case "TPKHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPKHeadMoves,MovieData[i].TotalMoves);
						break;
					case "TPBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPBHeadMoves,MovieData[i].TotalMoves);
						break;						
					case "TPEHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPEHeadMoves,MovieData[i].TotalMoves);
						break;
					case "TPHNBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHNBHeadMoves,MovieData[i].TotalMoves);
						break;
					case "TPHBHeadMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHBHeadMoves,MovieData[i].TotalMoves);
						break;
					case "TPHBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPKBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPKBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPEBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPEBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPHNBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHNBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPHBBodyMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHBBodyMoves,MovieData[i].TotalMoves);
						break;
					case "TPHJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHJointMoves,MovieData[i].TotalMoves);
						break;
					case "TPKJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPKJointMoves,MovieData[i].TotalMoves);
						break;
					case "TPHNBJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHNBJointMoves,MovieData[i].TotalMoves);
						break;
					case "TPHBJointMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPHBJointMoves,MovieData[i].TotalMoves);
						break;
					case "TPPrepareMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPPrepareMoves,MovieData[i].TotalMoves);
						break;
					case "TPJumpMoves":
						ChagePieChartDetail(MovieData[i].Type,MovieData[i].TPJumpMoves,MovieData[i].TotalMoves);
						break;
				}
		}
	
	return null;
	
}

function ChagePieChartDetail(Type,Value,TotalNumber)
{
	var OutR = windowHeight/11;
	var InR = OutR - 20;
	var Pi = Math.PI;
	
	var ChangeAngle = 360 * Value/TotalNumber;
	console.log(ChangeAngle);
	
	var Arc = d3.svg.arc()
		.innerRadius(InR)
		.outerRadius(OutR)
		.startAngle(0) //converting from degs to radians
		.endAngle(ChangeAngle * (Pi/180)) //just radians
	
	d3.select('#'+Type + "Pie")
	.transition()
	.duration(durationTime/10)
	.attr('d',Arc);
	
	ChangeInerText(Type,Value,TotalNumber);
	
	return null;
}

function ChangePieCharOut(MovieData)
{
	for(var i=0;i<MovieData.length;i++)
		{
			ChagePieChartDetail(MovieData[i].Type,MovieData[i].TotalMoves,MovieData[i].TotalMoves);
			ChangeInerTextOut(MovieData[i].Type);
		}
	
	return null;
}