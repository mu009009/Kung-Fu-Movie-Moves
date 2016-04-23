function CreateSvg()
{
	d3.select('#Main_Part')
	.append('svg')
	.attr('class','svg')
	.attr('id','MovesTitle')
	.attr('width',function()
	{
		return FontLittleSize*32.5 + 'px';
	})
	.attr('height',function()
	{
		return FontLittleSize*6 + 'px';
	})
	.style('margin-Left',function()
	{
		return FontLittleSize*15 + 'px';
	})
	.style('margin-top',function()
	{
		return FontLittleSize*47.6 + 'px';
	})
	.style('z-index',91)
	.style('position','absolute');
	
	d3.select('#Main_Part')
	.append('svg')
	.attr('class','svg')
	.attr('id','MovesExplain')
	.attr('width',function()
	{
		return FontLittleSize*46.5 + 'px';
	})
	.attr('height',function()
	{
		return FontLittleSize*20 + 'px';
	})
	.style('margin-Left',function()
	{
		return FontLittleSize*1 + 'px';
	})
	.style('margin-top',function()
	{
		return FontLittleSize*54 + 'px';
	})
	.style('z-index',91)
	.style('position','absolute');
	
	CreateText();
	return null;
}

function CreateText()
{
	console.log('Yes');
	
	d3.select('#MovesTitle')
	.append('text')
	.attr('class','text')
	.attr('id','MovesTitleText')
	.text('All Moves')
	.attr('x',function()
	{
		return 0;
	})
	.attr('y',function()
	{
		return FontLargeSize*1.5 + 'px';
	})
	.style('fill','white')
	.style('font-size',function()
	{
		return FontLargeSize;
	})
	.style('opacity',0)
	.transition()
	.duration(durationTime)
	.style('opacity',1);	
	
	var Explain = d3.select('#MovesExplain')
	.append('text')
	.attr('class','text')
	.attr('id','MovesExplainText')
	.attr('x',function()
	{
		return 0;
	})
	.attr('y',function()
	{
		return 0 + 'px';
	})
	.style('fill','white')
	.style('font-size',function()
	{
		return FontMiddleSize;
	});
	
	var ContentString = "The number below means all moves shown in this movie."
	var NewString = ContentString.split(';');
	
	Explain.selectAll('tspan')
	.data(NewString)
	.enter()
	.append('tspan')
	.attr('x',FontLittleSize)
	.attr('dy',function()
	{
		return FontMiddleSize*1.5 + 'px';
	})
	.text(function(d)
	{
		return d;
	})
	.style('opacity',0)
	.transition()
	.duration(durationTime)
	.style('opacity',1);
	
	return null;
}

function ChangeMovesTitleText(ClassName)
{
	switch (ClassName)
				{
					case "TotalAttackMoves":
						ChangeMovesTitleTextDetail("Offensive Moves");
						break;
					case "TotalDefenseMoves":
						ChangeMovesTitleTextDetail("Defensive Moves");
						break;
					case "TotalHurtMoves":
						ChangeMovesTitleTextDetail("Moves Causing Pain");
						break;
					case "TotalOtherMoves":
						ChangeMovesTitleTextDetail("Preparing and Jumping Moves");
						break;
					case "AttackHandMoves":
						ChangeMovesTitleTextDetail("Punches");
						ChangeExplainText(
							"This kind of moves is the most common way to attack the enemies,;takes the highest proportion in Kung Fu movies. It include all the moves ;talking about how to use your hand to attack the enemies. ;Including punches, palms, weapons and so on.")
						break;
					case "AttackKickMoves":
						ChangeMovesTitleTextDetail("Kicks");
						ChangeExplainText(
							"Based on my experience of practicing Kung Fu, this kind of moves is more ;difficult to perform than punches, it ask more strength and speed of your legs. ;Still a basic kind of offensive moves, but could make more pain.")
						break;
					case "DEFBlockMoves":
						ChangeMovesTitleTextDetail("Blocking");
						ChangeExplainText(
							"Use the hand or the leg to block the enemies' attack. Perform in different way ;could lead totally different visual effect and meaning. You could compare this ;kind of moves in different scene of the example movies here. ;In addition, I think more blocking will cause the character more like a hero. ;Due to the character who perform the block to protect himself, will still ;get the pain from the attack, and he will not been beaten by the attack. ;This also show the character's strength.")						
						break;
					case "DEFEvadeMoves":
						ChangeMovesTitleTextDetail("Evading");
						ChangeExplainText(
							"Another way to protect yourself. However, the difference of the evading ;between the blocking is that I think sometimes the evading also contain the ;meaning of run away, especially in Jackie Chan's Comedy Kung Fu movies. ;When perform the evading, it also show the meaning that this character can ;not take this pain, so sometimes the number of this kind of moves could ;represent the number of the enemy perform some powerful attack.")							
						break;
					case "HurtNoBloodMoves":
						ChangeMovesTitleTextDetail("Pain without Blood");
						ChangeExplainText(
							"This kind of moves show the number of the enemy successful attack our ;protagonists, but not seriously, just some little pain and our hero could easily ;through this kind of suffer. ;Compare the different kind of pain moves, Like in Bruce Lee's example movie ;here, the number of moves cause Bruce Lee get hurt is very limited, but the ;number of moves cause pain on the protagonists take the similar or even ;more proportion with the other kind of movies, that means Bruce Lee's ;friends are much easier to get pain than Bruce Lee, and this is also why ;Bruce Lee looks like a powerful hero.")		
						break;
					case "HurtBloodMoves":
						ChangeMovesTitleTextDetail("Pain with Blood");
						ChangeExplainText(
							"The character is bleeding! This is kind of moves often shows some deadly ;pain, and it means that the character has been beaten or will be beaten vary ;soon. Just except Bruce Lee, you could compare Bruce Lee's bleeding clips ;with others to see the difference.")
						break;
					case "TOPNo":
						ChangeMovesTitleTextDetail("Preparing Moves");
						ChangeExplainText(
							"Some preparing moves before the battle. This kind of moves means you are ;prepare an offensive move or a defensive move. And sometimes it means ;you are trying to control your breath before the battle. This kind of moves ;could often be the representative moves of Chinese Kung Fu, because the ;movie viewers will remember them. And this also may be because this kind of ;moves usually need more time to perform just one of them.")						
						break;
					case "TPJNo":
						ChangeMovesTitleTextDetail("Jamping Moves");
						ChangeExplainText(
							"Another kind of impressive moves, and also a kind of moves need a lot of ;time, a lot of scene to perform one. This kind of moves itself does not have a ;strong meaning of the offensive or defensive, it could have one of them or ;none of them based on the situation. And sometimes it just means the ;character wants to make a big movement."
						)						
						break;
					case "ATKHHeadMoves":
						ChangeMovesTitleTextDetail("Punches on Head");
						ChangeExplainText(
							"One punch on head, and the enemy down, this usually happen in Bruce Lee's ;and other Kung Fu movies which try to build a Kung Fu hero. ;However, here you could see in Jackie Chen's example movies, it take the ;highest proportion, this is because in the Rumble in the Bronx, there is a long ;scene talking about Jackie Chen practice Kung Fu with a wood piles, not in ;the real fight. And Jackie Chen could not take his enemies down so easy like ;Bruce Lee does, he may need more punches to end his enemies."
						)
						break;
					case "ATKKHeadMoves":
						ChangeMovesTitleTextDetail("Kicks on Head");
						ChangeExplainText(
							"I believe this kind of moves is the most hard one to perform. It ask a lot of ;your strength, speed, balance, the height you lift your leg and so on. This kind ;of moves also like punches on the head, provide a lot even more pain to the ;enemy. ;And because this kind of moves need more technique to perform, so I doubt ;this is the reason why Bruce Lee design a lot of this kind of moves in his ;movies. This is also a way to show the amazing and the power of Kung Fu."
						)						
						break;
					case "DEFBHeadMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Head");
						ChangeExplainText(
							"Some blocking moves to protect the head, the number of the moves could ;represent the moves that the enemy try to attack the protagonist's head, but ;failed. And because all of the examples I use here could consider as the ;Southern Style of Kung Fu movies, which means will try to show the real ;Kung Fu fight on the screen. So the less number of the blocking, evading and ;pain causing on the head than the body moves, the more the character will ;be looks like a hero."
						)						
						break;
					case "DEFEHeadMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Head");
						ChangeExplainText(
							"Some evading moves to protect the head, the number of the moves could ;represent the moves that the enemy try to attack the protagonist's head but ;failed."
						)						
						break;
					case "HNBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head without Blood");
						ChangeExplainText(
							"Get some pain on the head, sometimes means the character will be dizzy after ;this kind of pain."
						)						
						break;
					case "HBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head with Bleeding");
						ChangeExplainText(
							"Get some pain on the head and let the head start bleeding, this may be the worst ;pain in all of the kinds of pain here. It usually to say some bad thing will ;happen on the protagonist soon after this. Except Bruce Lee, he still will be ;more offensive even after this kind of pain."
						)							
						break;
					case "ATKHBodyMoves":
						ChangeMovesTitleTextDetail("Punches on Body");
						ChangeExplainText(
							"Use your hand or the weapon on hand to attack your enemies' body. Hit on ;the head will be more effective if you just want to beat somebody down, but ;sometimes you could hard to do that, the head is easier to protect than the ;body, so you could try to attack their body instead. This also could ;create a lot of pain."
						)						
						break;
					case "ATKKBodyMoves":
						ChangeMovesTitleTextDetail("Kicks on Body");
						ChangeExplainText(
							"The meaning of this kind of moves is similar to the punches on the body. ;When the character could not perform a kick on the enemies' head, they may ;perform this kind of moves to create pain on their enemies and let the ;enemy get away from them."
						)						
						break;
					case "DEFBBodyMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Body");
						ChangeExplainText(
							"Perform some blocking moves to protect the body. The number of this kind ;of moves could represent part of the enemy try to make some regular attack."
						)						
						break;
					case "DEFEBodyMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Body");
						ChangeExplainText(
							"Perform some evading moves to protect the body. The number of this kind ;of moves is another part, to show how many times the enemy try to make ;some regular attack."
						)						
						break;
					case "HNBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body without Blood");
						ChangeExplainText(
							"Get some pain on the body, also the most usually pain to see in the movies."
						)						
						break;
					case "HBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body with Blood");
						ChangeExplainText(
							"Any time, any part(Head, Body or joint), bleeding is not a good sign. The more ;this kind of moves, the worse the situation of the protagonists. Except Bruce ;Lee himself, you could compare the movie clips I have here to see the ;difference between them."
						)						
						break;
					case "ATKHJointMoves":
						ChangeMovesTitleTextDetail("Punches on Joint");
						ChangeExplainText(
							"This kind of offensive moves have more meaning to stop the enemy's next ;movement. Like grab their hands to stop their punches, also create the ;chance for the protagonists to make some further attacks."
						)						
						break;
					case "ATKKJointMoves":
						ChangeMovesTitleTextDetail("Kicks on Joint");
						ChangeExplainText(
							"The same meaning with the Punches on Joint moves, but use your leg to do ;this ask more skills. And Bruce Lee perform much more this kind of moves to ;show his profession."
						)						
						break;
					case "HNBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint without Blood");
						ChangeExplainText(
							"This kind of moves means the protagonists' movement has been successful ;stopped by their enemies, or the protagonists has been grabbed. So this kind of ;the moves also have the meaning that some dangerous is coming."
						)						
						break;
					case "HBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint with Blood");
						break;
					case "TPHHeadMoves":
						ChangeMovesTitleTextDetail("Punches on Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Two punches on head moves performed by Bruce Lee. Mainly to show the ;power of his punch and we could see the enemy in this clip even hard to ;suffer only one punch. And show again this kind of moves could create a lot ;of damage to the enemies. ;In Bruce Lee's movie, he not design a lot of this kind of moves, but each of his ;punches look very powerful, so we could consider him fight in a high effective ;way, and this is one way he builds himself as a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One punch move to attack the enemy's head, also this kind of moves will be ;one of the most powerful moves, but Jackie Chan could still combine his ;humor with it. And because that Jackie Chan and Keanu Reeves would ;perform less this kind of moves than Bruce Lee, this show a meaning that their ;punch is not so effective as Bruce Lee's."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One punch move on head performed by Keanu Reeves. Have the same ;meaning as this kind of moves in other example movies."
								)								
							}						
						break;
					case "TPKHeadMoves":
						ChangeMovesTitleTextDetail("Kicks on Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Some represent kicks performed by Bruce Lee, this kind of moves also is one ;of the most important moves to show the powerful of Bruce Lee."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One kick move on the head, performed by Jackie Chan, this one may looks ;different with some other regular kick moves, but it just like other moves in ;this category, this should be the most difficult one and powerful one."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Two kick moves on the head, performed by Keanu Reeves, have the same ;meaning as this kind of moves in other example movies."
								)								
							}						
						break;
					case "TPBHeadMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Two blocking moves performed by Bruce Lee."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One blocking moves performed by Jackie Chan, different from Bruce Lee and ;Keanu Reeves, Jackie Chan protect his head successfully, however we could ;see that this move is not easy for him from his face."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One blocking moves performed by Keanu Reeves, the higher the number ;of this kind of moves, means the more chance the enemies have to make a ;huge pain on the protagonist. Also shows that the protagonist may not so ;proficient in Kung Fu so that his enemies could have a lot of this kind of ;chance."
								)								
							}						
						break;						
					case "TPEHeadMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Three evading moves and two of them protect Bruce Lee's head."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One evading moves protect Jackie Chan's head. He perform the most ;quantity of this kind of moves, and I feel the more this kind of moves, the ;more meaning of escaping or avoiding. ;This is also the way he avoid to build himself looks so similar to a hero."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One evading moves performed by Keanu Reeves, the features of the evading ;moves in The Matrix is that sometimes it combine the computer visual effect ;and play it very slowly, so that the viewers could clearly see what happen ;and how the protagonist perform the evade to protect himself, you could find ;the relevant movie clips example in the 'Evading and Protect Body' part."
								)								
							}						
						break;
					case "TPHNBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One moves hurt Bruce Lee's head, it is very hard to find where in the movie ;Bruce Lee will get hurt. Compare the number of this kind of moves with the ;number of 'Pain on Head without Bleeding' moves, you will find that there ;still a lot of moves cause the protagonists hurt. That means in this movie, ;Bruce Lee's friends are much easier to get hurt than himself, and this is also ;one way that make Bruce Lee so different with others, like a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One moves hurt Jackie Chan's head, compare to Bruce Lee Jackie Chan is much ;easier to get hurt. And this is the way Jackie Chan show his sacrifice, he will ;get a lot of pain through his plan, but he still will insist on his plan to save ;his friends."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One moves hurt Keanu Reeves's head, similar to Jackie Chan's style, but the ;number of this kind of moves works so different with Bruce Lee's and Jackie ;Chan's example movies here. Not like Bruce Lee's just take very little ;proportion to build a hero or like Jackie Chan's take almost all the proportion ;to show the sacrifice. Just take a part of the proportion show a meaning that ;Keanu Reeves is not so different with his friends and they are fighting ;together."
								)								
							}						
						break;
					case "TPHBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head with Bleed");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"No data for this kind of moves in this movie."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One moves hurt Jackie Chan's head with bleeding, this kind of moves show ;the worst pain and it also show a meaning that some bad things is coming. ;Jackie Chan use some of this kind of moves in his movies show the idea again, ;that he is not a invincible hero, he will suffer a lot through his actions."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"No data for this kind of moves in this movie."
								)								
							}						
						break;
					case "TPHBodyMoves":
						ChangeMovesTitleTextDetail("Punches on Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Two punches moves performed by Bruce Lee and hit the enemy's body. ;Similar to the Punches on Body, high effective and useful."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Three punches moves performed by Jackie Chan and hit the enemy's body. ;Jackie Chan need more punches to take his enemies down, and this may be ;the reason that the number of his punches is more than Bruce Lee's."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Four punches moves performed by Keanu Reeves and hit the enemy's body. ;Similar to Jackie Chan's, need more to work, his style does not like the ;Bruce Lee's punches."
								)								
							}						
						break;
					case "TPKBodyMoves":
						ChangeMovesTitleTextDetail("Kicks on Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Three kick moves performed by Bruce Lee and hit the enemy's body. ;Still show his powerful and effective Kung Fu."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One kick moves performed by Jackie Chan and hit the enemy's body."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Two kick moves performed by Keanu Reeves and hit the enemy's body."
								)								
							}						
						break;
					case "TPBBodyMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Two blocking moves performed by Bruce Lee and protect his body. ;One of the blocking moves performed through his kicking skills."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One blocking moves performed by Jackie Chan and protect his body. ;Jackie Chan's special way to perform Kung Fu and protect himself. ;Do not like some super hero, who only trust their own body and strength. ;Jackie Chan will use anything on hand could help him to fight."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One blocking moves performed by Keanu Reeves and protect his body."
								)								
							}						
						break;
					case "TPEBodyMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Two evading moves performed by Bruce Lee and protect his body."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One evading moves performed by Jackie Chan and protect his body."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One evading moves performed by Keanu Reeves and protect his body. ;This one may be the most reprehensive moves in this movie. ;This is just one move but take a lot of time to perform, because of this viewers ;could have more chance to remember it, and this maybe the reason that in ;The Matrix, there will not be so many moves, but people will still have a ;strong impression to the Kung Fu in this movie."
								)								
							}							
						break;
					case "TPHNBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One move cause Bruce Lee get pain, hurt his body. ;All kinds of pain moves is limited to Bruce Lee, and this is one way to make ;himself looks like a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One move cause Jackie Chan get pain, hurt his body. ;Not like this kind of moves in Bruce Lee's example movies, we could see ;Jackie Chan feel so bad from this pain."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One move cause Keanu Reeves get pain, hurt his body. ;We could see that how this move combine the visual effect to show he is ;really in a worse situation."
								)								
							}						
						break;
					case "TPHBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body with Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One move cause Bruce Lee get pain, hurt his body, let him bleed. ;And this kind of moves in Bruce Lee's movie is somehow different with it in ;other movies. This kind of pain seems could enrage Bruce Lee, rather than ;defeat him. While, in other example movies, when this move happen, it often ;means the protagonist is almost defeated or die."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One move cause Jackie Chan get pain, hurt his body and let him bleed. ;We could see Jackie Chan suffer a great pain through this kind of moves from ;his face. ;And because the other example of this kind of moves in this movie is not fit to ;make a clips, I use the same clip example for the bleeding part again and again ;here."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One move cause Keanu Reeves get pain, hurt his body and let him bleed. ;Combine the visual effect again and really leave a impression that this pain ;is very painful."
								)								
							}						
						break;
					case "TPHJointMoves":
						ChangeMovesTitleTextDetail("Punches on Joint");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One Punches on Joint move, performed by Bruce Lee. ;This kind move is trying to stop or grab the enemy and create the chance to ;help them perform some offensive moves later."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One Punches on Joint move, performed by Jackie Chan. ;They really like to use their cloth to make this kind of moves."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One Punches on Joint move, performed by Keanu Reeves. ;He is trying to create some chance to help him make some effective attacks."
								)								
							}						
						break;
					case "TPKJointMoves":
						ChangeMovesTitleTextDetail("Kicks on Joint");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One Kicks on Joint move, performed by Bruce Lee. ;This kind move need more skills, and I doubt this maybe the reason Bruce Lee ;perform more this kind of moves in his movies, because I think he may not ;need use this kind of moves to create many opportunities to attack."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One Kicks on Joint move, performed by Jackie Chan. ;Let his enemy down, and he got some chance to punches the enemy's head ;or body."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Two Kicks on Joint move, performed by Keanu Reeves. ;He is trying to create some chance to help him make some effective attacks."
								)								
							}						
						break;
					case "TPHNBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One times hurt on the joint or has been grabbed, and we could also see from ;the clips that Bruce Lee need to face a bad situation because of this kind of ;pain. And from the number we could know that Bruce Lee seldom need to face this kind of problems."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One times hurt on the joint or has been grabbed, Jackie Chan and ;Keanu Reeves really suffer much more times on this kind of moves."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One times hurt on the joint or has been grabbed, Jackie Chan and ;Keanu Reeves really suffer much more times on this kind of moves."
								)								
							}						
						break;
					case "TPHBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint with Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"No data for this kind of moves in this movie."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"No data for this kind of moves in this movie."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"No data for this kind of moves in this movie."
								)								
							}						
						break;
					case "TPPrepareMoves":
						ChangeMovesTitleTextDetail("Preparing Moves");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One preparing move performed by Bruce Lee. The number of this kind of ;moves shows that this kind of moves take some proportion in the movies, and ;I think each of them need much more time than punches or kicks, ;so they leave a strong impression to viewers. So that for other Kung Fu ;movie come after this one, this kind of moves has been shown in the similar ;way to let viewers recognize that the movie include the Kung Fu."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One preparing move performed by Jackie Chan. This move in the example ;clips also show Jackie Chan's style of acrobatics."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One preparing move performed by Keanu Reeves. We could see a lot of ;actions here, but in fact this is only one preparing moves. The number of this ;kind of moves in this movie is heigher than other example movies, this is the ;way using this kind of moves to help movie viewers to recognize that the ;movie include the Kung Fu."
								)								
							}						
						break;
					case "TPJumpMoves":
						ChangeMovesTitleTextDetail("Jamping Moves");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One jumping move performed by Bruce Lee. ;Another kind of moves which could lead a strong impression to movie viewers."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One jumping move performed by Jackie Chan. ;A good example to say that each of this kind of moves need a lot of time to ;show."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One jumping move performed by Keanu Reeves. ;Both the function and the time it use to show here are very impressive."
								)								
							}						
						break;
				}
	
	return null;
}

function ChangeMovesTitleTextDetail(TitleString)
{
	d3.select('#MovesTitleText')
	.text(TitleString);
	
	return null;
}

function ChangeExplainText(TextString)
{
	var Explain = d3.select('#MovesExplainText');
	
	Explain.selectAll('tspan')
	.remove();
	
	var NewString = TextString.split(';');
	
	Explain.selectAll('tspan')
	.data(NewString)
	.enter()
	.append('tspan')
	.attr('x',FontLittleSize)
	.attr('dy',function()
	{
		return FontMiddleSize*1.5 + 'px';
	})
	.text(function(d)
	{
		return d;
	})
	.style('opacity',0)
	.transition()
	.duration(durationTime)
	.style('opacity',1);	
	
	return null;
}