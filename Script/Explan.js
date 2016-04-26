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
							"This kind of move is the most common way to attack enemies, and it ;comprises the highest proportion of actions in Kung Fu movies. It includes all ;moves that use the hand to attack enemies, including punches, palms strikes, ;and handheld weapons.")
						break;
					case "AttackKickMoves":
						ChangeMovesTitleTextDetail("Kicks");
						ChangeExplainText(
							"Based on my experience of practicing Kung Fu, this kind of move is more ;difficult to perform than punches, requiring more strength and leg speed. ;Kicks are a basic kind of offensive move, but they can cause more pain than ;punches.")
						break;
					case "DEFBlockMoves":
						ChangeMovesTitleTextDetail("Blocking");
						ChangeExplainText(
							"The hands or legs can be used to block enemies' attacks. Performing blocks in ;different ways results in totally different visual effects and meanings. ;This kind of move can be compared in different scenes of the example ;movies. Further, I think blocking causes a character to look more like a hero. ;When a character protects himself by blocking, he will still receive pain from ;the attack, but he will not be beaten by it. This demonstrates ;the character's strength.")						
						break;
					case "DEFEvadeMoves":
						ChangeMovesTitleTextDetail("Evading");
						ChangeExplainText(
							"Another way to protect against an enemy is to evade the attack. The ;difference between blocking and evading is that evading contains ;the meaning of running away, especially in Jackie Chan's comedy Kung Fu ;movies. Performing an evading move implies that the character cannot ;handle pain. The number of such moves could represent the number of ;powerful attacks performed by the enemy.")						
						break;
					case "HurtNoBloodMoves":
						ChangeMovesTitleTextDetail("Pain without Blood");
						ChangeExplainText(
							"This kind of move shows a successful attack by the enemy, but our protagonist ;is not seriously injured, there is just some pain, which our hero can easily ;suffer. In Bruce Lee's The Big Boss, the number of moves that cause Lee to ;get hurt is very limited, but the number of moves causing pain to the other ;protagonists is similar to or even greater than that found in other movies, ;meaning that Lee's friends are much more likely to be hurt than he is. ;This is part of what makes Lee look like a powerful hero.")		
						break;
					case "HurtBloodMoves":
						ChangeMovesTitleTextDetail("Pain with Blood");
						ChangeExplainText(
							"The character is bleeding! This kind of move often shows some deadly pain, ;and it means that the character has been beaten or will be beaten ;soon—except for Bruce Lee. When comparing Lee's bleeding clips with ;others, there is an obvious difference.")
						break;
					case "TOPNo":
						ChangeMovesTitleTextDetail("Preparing Moves");
						ChangeExplainText(
							"This type of move occurs before the battle and indicates the character is ;preparing an offensive or defensive move. It could also mean the character is ;trying to control his breath before the battle. Preparing moves are often ;representative of Chinese Kung Fu. This is because movie viewers will ;remember them since they usually require more time to perform.")						
						break;
					case "TPJNo":
						ChangeMovesTitleTextDetail("Jumping Moves");
						ChangeExplainText(
							"Another kind of impressive move involves jumping. Such moves require a lot ;of time to perform. Jumping moves do not have a strong offensive or ;defensive meaning they could have either meaning or none based on the ;situation. Sometimes, jumping just means the character wants to make a big ;movement."
						)						
						break;
					case "ATKHHeadMoves":
						ChangeMovesTitleTextDetail("Punches on Head");
						ChangeExplainText(
							"One punch to the head and the enemy is usually down. This often happens in ;Lee's and other Kung Fu movies, which seek to build a Kung Fu hero. In ;Jackie Chan's Rumble in the Bronx, such punches make up the highest ;proportion of moves, but this is because there is a long scene in which ;Chan practices Kung Fu with a woodpile, not in a real fight. Moreover, ;Chan does not take his enemies down as easily as Lee he usually needs ;more punches to defeat his enemies."
						)
						break;
					case "ATKKHeadMoves":
						ChangeMovesTitleTextDetail("Kicks on Head");
						ChangeExplainText(
							"I believe this kind of move is the most difficult to perform. High kicks require ;strength, speed, balance, proper leg height, and so on. Like punches on the ;head, kicks on the head cause great pain to the enemy. I believe Lee included ;a lot of these kinds of moves into his movies because they show the amazing ;power of Kung Fu."
						)						
						break;
					case "DEFBHeadMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Head");
						ChangeExplainText(
							"Some blocking moves are intended to protect the head, and the number of ;such moves represents the amount of times that the enemy attempts to ;attack the protagonist's head but fails. As all the examples I use here could ;be considered Southern style Kung Fu movies, they portray real Kung Fu ;fights on the screen. Thus, the less number of the blocking, evading and pain ;causing on the head than the body moves, the more the character will be ;looks like a hero."
						)						
						break;
					case "DEFEHeadMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Head");
						ChangeExplainText(
							"Some evading moves aim to protect the head, and as with blocking, such ;moves indicate that the enemy has attempted to attack the protagonist's head ;but failed."
						)						
						break;
					case "HNBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head without Blood");
						ChangeExplainText(
							"When receiving pain to the head, the character will sometimes become dizzy."
						)						
						break;
					case "HBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head with Bleeding");
						ChangeExplainText(
							"This is the worst type of pain among all the moves. Pain on the head with ;bleeding usually means that something bad will soon happen to the ;protagonist, except for Bruce Lee, who only becomes more aggressive ;after receiving such a blow."
						)							
						break;
					case "ATKHBodyMoves":
						ChangeMovesTitleTextDetail("Punches on Body");
						ChangeExplainText(
							"This refers to using the hand or a weapon on the hand to attack the ;enemy’s body. A hit on the head will be most effective if the ;intention is to beat somebody down, but it is often difficult to do this. ;The head is easier to protect than the body, so an attack to the body may be ;a good alternative. Body punches can also cause a lot of pain."
						)						
						break;
					case "ATKKBodyMoves":
						ChangeMovesTitleTextDetail("Kicks on Body");
						ChangeExplainText(
							"This kind of move is similar to punches to the body. When the character is ;unable to perform a kick to the enemy's head, a kick to the body can cause ;pain and let the enemy get away."
						)						
						break;
					case "DEFBBodyMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Body");
						ChangeExplainText(
							"Some blocking moves are performed to protect the body. The number of such ;blocks could, in part, represent that the enemy is attempting to make some ;attack."
						)						
						break;
					case "DEFEBodyMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Body");
						ChangeExplainText(
							"Evading moves are sometimes used to protect the body. The number of such ;moves is another indicator of how many times the enemy attempts an attack."
						)						
						break;
					case "HNBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body without Blood");
						ChangeExplainText(
							"The most commonly seen pain in Kung Fu movies is to the body."
						)						
						break;
					case "HBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body with Blood");
						ChangeExplainText(
							"Bleeding from any part of the body (head, body, or joint) is not a good sign. ;The more this kind of move occurs, the worse the situation is for the ;protagonists. Again, Lee is the exception. "
						)						
						break;
					case "ATKHJointMoves":
						ChangeMovesTitleTextDetail("Punches on Joint");
						ChangeExplainText(
							"This kind of offensive move is meant to stop the enemy's next movement, ;for instance, grabbing a hand to stop a punch. These moves also create an ;opportunity for the protagonists to make some further attacks."
						)						
						break;
					case "ATKKJointMoves":
						ChangeMovesTitleTextDetail("Kicks on Joint");
						ChangeExplainText(
							"Kicks on joints have the same meaning as punches, but they use the leg and ;thus require greater skill. Lee performs many of these moves to demonstrate ;his profession of Kung Fu."
						)						
						break;
					case "HNBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint without Blood");
						ChangeExplainText(
							"This kind of move means that the protagonists' movements have been ;successful stopped by their enemies, or the protagonists have been grabbed. ;Thus, these moves indicate that some danger is coming."
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
									"Bruce Lee performs two punches on the head, mainly to show the power of ;his punch, and the enemy in this clip suffers terribly from a single punch. This ;shows again that this kind of move could cause tremendous damage to ;the enemies. In Lee's movie, he did not design a lot of head punches, but each ;looks very powerful. Lee fights in a highly effective manner, and this is one ;way he portrays himself as a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Jackie Chan punches his enemy's head one time. While this is one of the most ;powerful moves, Chan still combines humor with it. Moreover, Chan and ;Reeves perform more such moves than Lee, which suggests that their ;punches are not as effective as Lee's."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Keanu Reeves performs one punch move to the head. His punches have the ;same meaning as in the other example movies."
								)								
							}						
						break;
					case "TPKHeadMoves":
						ChangeMovesTitleTextDetail("Kicks on Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs some of these kicks, which showcase his power."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one kick move to the head. While this head kick may look ;different than other regular kick moves, it is just like other moves in this ;category however, it still could be one of the most difficult and powerful ;attack."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs two kick moves to the head, which have the same meaning ;as in the other example movies."
								)								
							}						
						break;
					case "TPBHeadMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs two blocking moves."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan utilizes one blocking move. Unlike Lee and Reeves, Chan protects his ;head successfully, although we can see from his expression that this is not ;easy for him."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one blocking move. More of this kind of moves means that ;the enemy has more chances to cause huge pain to the protagonist. If the ;enemies have many such opportunities, it could also indicate that the ;protagonist may not so proficient in Kung Fu."
								)								
							}						
						break;						
					case "TPEHeadMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Head");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs three evading moves, two of which protect his head."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan protects his head with one evading move. This is the most common ;move that Chan performs in his movies, and it carries a meaning of escaping ;or avoiding attack. Chan uses evasion to avoid building himself up as a hero."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one evading move. One feature of evading moves in ;The Matrix is that they are sometimes combined with computerized visual ;effects and played very slowly, allowing the viewers to clearly see what is ;happening and how the protagonist is protecting himself. Relevant movie clip ;examples can be found in the “Evading and Protecting the Body” section."
								)								
							}						
						break;
					case "TPHNBHeadMoves":
						ChangeMovesTitleTextDetail("Pain on Head without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One move here hurts Lee's head. Such a move is hard to find in the movie. ;However, there were still many moves that hurt the protagonists. That means ;that in this movie, Lee's friends are much easier to hurt than Lee. This is one ;way that Lee is portrayed differently—like a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"One move hurts Chan's head. Compared to Lee, Chan is far more likely to get ;hurt, and this is how Chan demonstrates his sacrifice: his plan will result in ;him getting hurt, but he refuses to quit until he saves his friends."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"One move hurts Reeves's head, and in a style similar to Chan's. However, ;the number of these moves is very different from Lee's and Chan's example ;movies. Unlike Lee, who is rarely get hurt because he is a hero, or Chan, who ;gets hurt often to demonstrate his sacrifice so he gets all of the pain, Reeves ;get hurt occasionally, showing that he is not so different from his friends, and ;they are fighting together."
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
									"Chan is hurt once on the head with bleeding. This kind of move results in the ;worst pain, and it also indicates that something bad is about to happen. Chan ;often uses this kind of move in his movies to show that he is not an invincible ;hero and that he will suffer from his actions."
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
									"Lee performs two punch moves that hit his enemies’ bodies. Such punches ;are effective and useful."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs three punch moves that hit his enemies’ bodies. Chan needs ;more punches to take his enemies down, and this may be the reason that his ;number of punches is greater than Lee's."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves punches his enemies in the body four times. Similar to Chan, Reeves ;needs more punches than Lee to hurt his enemies."
								)								
							}						
						break;
					case "TPKBodyMoves":
						ChangeMovesTitleTextDetail("Kicks on Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee hits his opponents in the body with three kicks, demonstrating his ;powerful and effective Kung Fu."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan hits his enemy’s body with a kick one time."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs two kick moves that hit his enemies’ bodies."
								)								
							}						
						break;
					case "TPBBodyMoves":
						ChangeMovesTitleTextDetail("Blocking and Protect Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs two blocking moves to protect his body, one of which utilizes ;his kicking skills."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one blocking move to protect his body. Chan has a special way ;of performing Kung Fu and protecting himself. He is not some superhero who ;only trusts in his own body and strength. Instead, Chan will use anything on ;hand to help him when he fights."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one blocking move to protect his body."
								)								
							}						
						break;
					case "TPEBodyMoves":
						ChangeMovesTitleTextDetail("Evading and Protect Body");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs two evading moves to protect his body."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one evading move to protect his body."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one evading move to protect his body. This may be one of ;the most representative moves in The Matrix. It is just one move, but it takes ;a long time to perform, and because of this it is very memorable for viewers. ;This may explain why, although there are relatively few moves in the movie, ;viewers are left with a strong impression of Kung Fu."
								)								
							}							
						break;
					case "TPHNBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"One move causes Lee to receive pain on his body. Lee receives little pain in ;all of this movie, and this is another way he is portrayed as a hero."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan is hurt on his body by one move. Unlike Lee, Chan clearly indicates that ;this move caused him pain."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves is hit on the body one time. The visual effects added to this move ;make the damage more apparent."
								)								
							}						
						break;
					case "TPHBBodyMoves":
						ChangeMovesTitleTextDetail("Pain on Body with Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee is hit twice in the body in a way that causes him to bleed. However, this ;kind of pain seems to enrage Lee rather than defeat him. This is different from ;the other example movies, in which such moves usually mean the protagonist ;is almost defeated or about to die."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan is hit by one move that hurts his body and leaves him bleeding. It is ;clear from Chan’s face that he suffers great pain. As the other example of this ;kind of moves in this movie was not suitable for making a clip, I used the same ;clip example for the bleeding part repeatedly."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves is hurt by one blow to his body, which causes him to bleed. Visual ;effects are again used to create the impression that this move was very ;painful."
								)								
							}						
						break;
					case "TPHJointMoves":
						ChangeMovesTitleTextDetail("Punches on Joint");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs one punch to a joint. This move is intended to stop or grab the ;enemy and create an opportunity for subsequent offensive moves."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one punch to a joint. He likes to use his clothing to perform ;this kind of move, so does Lee."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one punch to a joint in an attempt to open up attack ;opportunities."
								)								
							}						
						break;
					case "TPKJointMoves":
						ChangeMovesTitleTextDetail("Kicks on Joint");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Similarly, Lee performs one kick on a joint. Such a move requires considerable ;skill. I think Lee performed few such moves because he did not need them to ;create opportunities to attack."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one kick on a joint, which knocks his enemy down and provides ;him with the opportunity to punch his enemy's head or body."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs two kicks to joints in an attempt to create effective ;opportunities to attack his opponents."
								)								
							}						
						break;
					case "TPHNBJointMoves":
						ChangeMovesTitleTextDetail("Pain on Joint without Blood");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee is hurt on the joint or grabbed only one time, and clearly the pain created ;a difficult situation. As a powerful hero, Lee seldom faces this kind of ;problem."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan is hurt one time by such a move. Both Chan and Reeves suffer much ;more often than Lee from this type of move."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves is hurt by an attack on his joint one time. He and Chan suffer more ;than Lee from this kind of attack."
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
									"Lee performs one preparing move. The number of this kind of move shows ;that this kind of move takes some proportion in the movies. ;Preparing moves take much more time than punches or kicks, so they leave a ;strong impression on viewers. In later Kung Fu movies, this kind of move is ;often shown in a similar way so viewers will recognize that the movie includes ;Kung Fu."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one preparing move, which also showcases his unique style ;of acrobatics."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one preparing move. While there are many actions involved, ;in fact this is only one preparing move. The number of such moves in ;The Matrix is higher than in the other example movies, and this helps ;viewers recognize that the movie includes Kung Fu."
								)								
							}						
						break;
					case "TPJumpMoves":
						ChangeMovesTitleTextDetail("Jumping Moves");
						if(KeyWord=="Tragedy")
							{
								ChangeExplainText(
									"Lee performs one jumping move. This is another type of move that could ;leave a strong impression on movie viewers."
								)
							}
						else if(KeyWord=="Comedy")
							{
								ChangeExplainText(
									"Chan performs one jumping move. This move is a good example that ;jumping moves take a lot of time."
								)								
							}	
						else if(KeyWord=="Visual")
							{
								ChangeExplainText(
									"Reeves performs one jumping move. Both the function and the time it takes ;to show this move are very impressive."
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