//ALL JavaScript Code

{//Rolling the dice cups & Displaying the dice the user has rolled
 function rollCup(){//rolling the users hand, or 'cup'
 	die1=0, die2=0, die3=0, die4=0, die5=0;
 	die1=(Math.floor(Math.random()*6)+1);
 		displayDie1(die1);
 	die2=(Math.floor(Math.random()*6)+1);
 		displayDie2(die2);
 	die3=(Math.floor(Math.random()*6)+1);
 		displayDie3(die3);
 	die4=(Math.floor(Math.random()*6)+1);
 		displayDie4(die4);
 	die5=(Math.floor(Math.random()*6)+1);
 		displayDie5(die5);
 }
  function displayDie1(X){//showing the first die
  	
  	switch (X){
  	case 1:
  		document.getElementById("firstDie").src="https://cn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-1-128.png";
  		document.getElementById("firstDie").alt='You rolled a One (1)';
  		document.getElementById("firstDie").title='A single Die displaying a One (1)';
  		break;
  	case 2:
  		document.getElementById("firstDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-2-128.png";
  		document.getElementById("firstDie").alt='You rolled a Two (2)';
  		document.getElementById("firstDie").title='A single Die displaying a Two (2)';
  		break;
  	case 3:
  		document.getElementById("firstDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-3-128.png";
  		document.getElementById("firstDie").alt='You rolled a Three (3)';
  		document.getElementById("firstDie").title='A single Die displaying a Three (3)';
  		break;
  	case 4:
  		document.getElementById("firstDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-4-128.png";
  		document.getElementById("firstDie").alt='You rolled a Four (4)';
  		document.getElementById("firstDie").title='A single Die displaying a Four (4)';
  		break;
  	case 5:
  		document.getElementById("firstDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-5-128.png";
  		document.getElementById("firstDie").alt='You rolled a Five (5)';
  		document.getElementById("firstDie").title='A single Die displaying a Five (5)';
  		break;
  	case 6:
  		document.getElementById("firstDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-6-128.png";
  		document.getElementById("firstDie").alt='You rolled a Six (6)';
  		document.getElementById("firstDie").title='A single Die displaying a Six (6)';
  		break;
  	}
   }
   function displayDie2(X){//showing the second die
  	
  	switch (X){
  	case 1:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-1-128.png";
  		document.getElementById("secondDie").alt='You rolled a One (1)';
  		document.getElementById("secondDie").title='A single Die displaying a One (1)';
  		break;
  	case 2:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-2-128.png";
  		document.getElementById("secondDie").alt='You rolled a Two (2)';
  		document.getElementById("secondDie").title='A single Die displaying a Two (2)';
  		break;
  	case 3:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-3-128.png";
  		document.getElementById("secondDie").alt='You rolled a Three (3)';
  		document.getElementById("secondDie").title='A single Die displaying a Three (3)';
  		break;
  	case 4:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-4-128.png";
  		document.getElementById("secondDie").alt='You rolled a Four (4)';
  		document.getElementById("secondDie").title='A single Die displaying a Four (4)';
  		break;
  	case 5:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-5-128.png";
  		document.getElementById("secondDie").alt='You rolled a Five (5)';
  		document.getElementById("secondDie").title='A single Die displaying a Five (5)';
  		break;
  	case 6:
  		document.getElementById("secondDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-6-128.png";
  		document.getElementById("secondDie").alt='You rolled a Six (6)';
  		document.getElementById("secondDie").title='A single Die displaying a Six (6)';
  		break;
  	}
   }	 
    function displayDie3(X){//showing the third die
  	
  	switch (X){
  	case 1:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-1-128.png";
  		document.getElementById("thirdDie").alt='You rolled a One (1)';
  		document.getElementById("thirdDie").title='A single Die displaying a One (1)';
  		break;
  	case 2:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-2-128.png";
  		document.getElementById("thirdDie").alt='You rolled a Two (2)';
  		document.getElementById("thirdDie").title='A single Die displaying a Two (2)';
  		break;
  	case 3:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-3-128.png";
  		document.getElementById("thirdDie").alt='You rolled a Three (3)';
  		document.getElementById("thirdDie").title='A single Die displaying a Three (3)';
  		break;
  	case 4:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-4-128.png";
  		document.getElementById("thirdDie").alt='You rolled a Four (4)';
  		document.getElementById("thirdDie").title='A single Die displaying a Four (4)';
  		break;
  	case 5:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-5-128.png";
  		document.getElementById("thirdDie").alt='You rolled a Five (5)';
  		document.getElementById("thirdDie").title='A single Die displaying a Five (5)';
  		break;
  	case 6:
  		document.getElementById("thirdDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-6-128.png";
  		document.getElementById("thirdDie").alt='You rolled a Six (5)';
  		document.getElementById("thirdDie").title='A single Die displaying a Six (6)';
  		break;
  	}
   }	 
     function displayDie4(X){//showing the fourth die
  	
  	switch (X){
  	case 1:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-1-128.png";
  		document.getElementById("fourthDie").alt='You rolled a One (1)';
  		document.getElementById("fourthDie").title='A single Die displaying a One (1)';
  		break;
  	case 2:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-2-128.png";
  		document.getElementById("fourthDie").alt='You rolled a Two (2)';
  		document.getElementById("fourthDie").title='A single Die displaying a Two (2)';
  		break;
  	case 3:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-3-128.png";
  		document.getElementById("fourthDie").alt='You rolled a Three (3)';
  		document.getElementById("fourthDie").title='A single Die displaying a Three (3)';
  		break;
  	case 4:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-4-128.png";
  		document.getElementById("fourthDie").alt='You rolled a Four (4)';
  		document.getElementById("fourthDie").title='A single Die displaying a Four (4)';
  		break;
  	case 5:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-5-128.png";
  		document.getElementById("fourthDie").alt='You rolled a Five (5)';
  		document.getElementById("fourthDie").title='A single Die displaying a Five (5)';
  		break;
  	case 6:
  		document.getElementById("fourthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-6-128.png";
  		document.getElementById("fourthDie").alt='You rolled a Six (6)';
  		document.getElementById("fourthDie").title='A single Die displaying a Six (6)';
  		break;
  	}
   }	 
      function displayDie5(X){//showing the fifth die
 	
 	switch (X){
 	case 1:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-1-128.png";
  		document.getElementById("fifthDie").alt='You rolled a One (1)';
  		document.getElementById("fifthDie").title='A single Die displaying a One (1)';
 		break;
 	case 2:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-2-128.png";
  		document.getElementById("fifthDie").alt='You rolled a Two (2)';
  		document.getElementById("fifthDie").title='A single Die displaying a Two (2)';
 		break;
 	case 3:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-3-128.png";
  		document.getElementById("fifthDie").alt='You rolled a Three (3)';
  		document.getElementById("fifthDie").title='A single Die displaying a Three (3)';
 		break;
 	case 4:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-side-4-128.png";
  		document.getElementById("fifthDie").alt='You rolled a Four (4)';
  		document.getElementById("fifthDie").title='A single Die displaying a Four (4)';
 		break;
 	case 5:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-5-128.png";
  		document.getElementById("fifthDie").alt='You rolled a Five (5)';
  		document.getElementById("fifthDie").title='A single Die displaying a Five (5)';
 		break;
 	case 6:
 		document.getElementById("fifthDie").src="https://cdn1.iconfinder.com/data/icons/slimicons-gambling/24/gambling_dice-6-128.png";
  		document.getElementById("fifthDie").alt='You rolled a Six (6)';
  		document.getElementById("fifthDie").title='A single Die displaying a Six (6)';
 		break;
 	}
  }
 function npcRoll(){//Rolling the NPC's dice
//NPC1's Dice
	NPC1die1=(Math.floor(Math.random()*6)+1);
	NPC1die2=(Math.floor(Math.random()*6)+1);
	NPC1die3=(Math.floor(Math.random()*6)+1);
	NPC1die4=(Math.floor(Math.random()*6)+1);
	NPC1die5=(Math.floor(Math.random()*6)+1);
//NPC2's Dice
	NPC2die1=(Math.floor(Math.random()*6)+1);
	NPC2die2=(Math.floor(Math.random()*6)+1);
	NPC2die3=(Math.floor(Math.random()*6)+1);
	NPC2die4=(Math.floor(Math.random()*6)+1);
	NPC2die5=(Math.floor(Math.random()*6)+1);
//NPC3's Dice
	NPC3die1=(Math.floor(Math.random()*6)+1);
	NPC3die2=(Math.floor(Math.random()*6)+1);
	NPC3die3=(Math.floor(Math.random()*6)+1);
	NPC3die4=(Math.floor(Math.random()*6)+1);
	NPC3die5=(Math.floor(Math.random()*6)+1);
//NPC4's Dice
	NPC4die1=(Math.floor(Math.random()*6)+1);
	NPC4die2=(Math.floor(Math.random()*6)+1);
	NPC4die3=(Math.floor(Math.random()*6)+1);
	NPC4die4=(Math.floor(Math.random()*6)+1);
	NPC4die5=(Math.floor(Math.random()*6)+1);
//NPC5's Dice
	NPC5die1=(Math.floor(Math.random()*6)+1);
	NPC5die2=(Math.floor(Math.random()*6)+1);
	NPC5die3=(Math.floor(Math.random()*6)+1);
	NPC5die4=(Math.floor(Math.random()*6)+1);
	NPC5die5=(Math.floor(Math.random()*6)+1);
}
}

{//Initializing variables
 var die1=0, die2=0, die3=0, die4=0, die5=0;
 var NPCdie1=0, NPCdie2=0, NPCdie3=0, NPCdie4=0, NPCdie5=0;
 var total1=0, total2=0, total3=0, total4=0, total5=0, total6=0;
 var userBidAmount=1, userBidValue=1, dieAmountStart=1, dieValueStart=1;
 var amountNum=0, valueNum=0;
 var name="";
 var currentWinStreak=0, bestWinStreak=0;
 
 var npc1Amount=0, npc1Value=0;
 var npc2Amount=0, npc2Value=0;
 var npc3Amount=0, npc3Value=0;
 var npc4Amount=0, npc4Value=0;
 var npc5Amount=0, npc5Value=0;
 
 var validBid= false;
}

{//Code for Next Round, Preset, & Phases
 function nextRound(){//Code for the Next Round button
 	preset();
 	var bidAmountMenu=document.bid.dieAmount;
 	bidAmountMenu.selectedIndex=(0);
 	var bidValueMenu=document.bid.dieValue;
 	bidValueMenu.selectedIndex=(0);
	document.getElementById("liarBox").selectedIndex=0;
 	var x=29, y=5;
 	while (x>=0){
 		document.getElementById("dieAmount").options[x].disabled=false;
		x--;
 	}
 	while (y>=0){
 		document.getElementById("dieValue").options[y].disabled=false;
		y--;
 	}
 	document.getElementById("userBid").innerHTML="? - ?'s";
 	document.getElementById("npc1Bid").innerHTML="? - ?'s";
 	document.getElementById("npc2Bid").innerHTML="? - ?'s";
 	document.getElementById("npc3Bid").innerHTML="? - ?'s";
 	document.getElementById("npc4Bid").innerHTML="? - ?'s";
 	document.getElementById("npc5Bid").innerHTML="? - ?'s";
 	
 }
  function preset(){
  	die1=0, die2=0, die3=0, die4=0, die5=0;
  	NPCdie1=0, NPCdie2=0, NPCdie3=0, NPCdie4=0, NPCdie5=0;
  	total1=0, total2=0, total3=0, total4=0, total5=0, total6=0;
  	userBidAmount=1, userBidValue=1, dieAmountStart=1, dieValueStart=1;
  	amountNum=0, valueNum=0;
  	
  	npc1Amount=0, npc1Value=0;
  	npc2Amount=0, npc2Value=0;
  	npc3Amount=0, npc3Value=0;
  	npc4Amount=0, npc4Value=0;
  	npc5Amount=0, npc5Value=0;
  	document.getElementById(id="message").innerHTML="Here is your cup of Dice<br/>";
  	
  	document.getElementById("rollButton").disabled=false;
  	document.getElementById("bidButton").disabled=true;
  	document.getElementById("liarButton").disabled=true;
  	document.getElementById("nextRoundButton").disabled=true;
  	document.getElementById("bidAgain").disabled=true;
	
	validBid= false;
  }
   //Enabling/disabling buttons based on what stage of the game they're in
   function phase1(){//After the player has rolled the dice cups
		document.getElementById(id="message").innerHTML="You have rolled. . .<br/>";
		
		document.getElementById("rollButton").disabled=true;
		document.getElementById("bidButton").disabled=false;
		document.getElementById("liarButton").disabled=true;
		document.getElementById("nextRoundButton").disabled=true;
		document.getElementById("bidAgain").disabled=true;
   }
    function phase2(){//After the player has placed a bid
		document.getElementById("rollButton").disabled=true;
		document.getElementById("bidButton").disabled=true;
		document.getElementById("liarButton").disabled=false;
		document.getElementById("nextRoundButton").disabled=true;
		document.getElementById("bidAgain").disabled=false;
	    validBid=false;
	}
     function phase3(){//After someone has been called a liar
		document.getElementById("rollButton").disabled=true;
		document.getElementById("bidButton").disabled=true;
		document.getElementById("liarButton").disabled=true;
		document.getElementById("nextRoundButton").disabled=false;
		document.getElementById("bidAgain").disabled=true;
	}
	function phase4(){//After the player has chosen to bid again
		document.getElementById("rollButton").disabled=true;
		document.getElementById("bidButton").disabled=false;
		document.getElementById("liarButton").disabled=true;
		document.getElementById("nextRoundButton").disabled=true;
		document.getElementById("bidAgain").disabled=true;
	}
}

{//Script for Bidding Functions - NPC & Player
 function userBid(){//Bid script for the Player	
	userBidAmount=document.getElementById("dieAmount").selectedIndex+1;
	userBidValue=(document.bid.dieValue.selectedIndex)+1;
	if (userBidValue>5)
		userBidValue=6;
	if (!validBid){
		if (userBidAmount!=npc5Amount || userBidValue!=npc5Value){
			validBid=true;
			document.getElementById("userBid").innerHTML=(userBidAmount+" - "+userBidValue+"'s");
	}
		else if(userBidAmount==npc5Amount && userBidValue==npc5Value)
			alert("ERROR!\nBids must not match any previous bids. Please enter a new bid that increments at least one of the fields by one (1)");
	}
	if (validBid)
		phase2();	
}
  function bidFloor(){
  //setting the floor for dieAmount bids
 	var bidAmountMenu=(document.bid.dieAmount);
 	bidAmountMenu.selectedIndex=(npc5Amount-1);
 	var Y=(npc5Amount-1);
	document.getElementById("dieAmount").options[Y].disabled=false;
	Y--;
 	while ((Y>=0)&&(Y<=29)){
 		document.getElementById("dieAmount").options[Y].disabled=true;
 		Y--;
 	}
	
 //setting the floor for dieValue bids
 	var bidValueMenu=document.bid.dieValue;
 	bidValueMenu.selectedIndex=(npc5Value-1);
 	var X=(npc5Value-1);
	document.getElementById("dieValue").options[X].disabled=false;
	X--;
 	while ((X>=0)&&(X<=5)){
 		document.getElementById("dieValue").options[X].disabled=true;
 		X--;
 	}
	
 }
  function bidCeiling(){
  //setting the ceiling for dieAmount bids
 	var bidAmountMenu=(document.bid.dieAmount);
 	var Y=(npc5Amount);	
	if (npc5Amount<30){
		document.getElementById("dieAmount").options[Y].disabled=false;
		Y++;
	}
 	while ((Y<=29)&&(Y>=0)){
 		document.getElementById("dieAmount").options[Y].disabled=true;
 		Y++;
 	}  
  //setting the ceiling for dieValue bids
 	var bidValueMenu=document.bid.dieValue;
 	var X=(npc5Value);
	if (npc5Value<6){
		document.getElementById("dieValue").options[X].disabled=false;
		X++;
	}
 	while ((X<=5)&&(X>=0)){
 		document.getElementById("dieValue").options[X].disabled=true;
 		X++; 	
 }
}
   function findTotals(){//Finding the total amount of each die value in the game
    	//tallying up the user's dice
    	tallyUp(die1);
    	tallyUp(die2);
    	tallyUp(die3);
    	tallyUp(die4);
    	tallyUp(die5);
    	//tallying up the NPC1's dice
    	tallyUp(NPC1die1);
    	tallyUp(NPC1die2);
    	tallyUp(NPC1die3);
    	tallyUp(NPC1die4);
    	tallyUp(NPC1die5);
    	//tallying up the NPC2's dice
    	tallyUp(NPC2die1);
    	tallyUp(NPC2die2);
    	tallyUp(NPC2die3);
    	tallyUp(NPC2die4);
    	tallyUp(NPC2die5);
    	//tallying up the NPC3's dice
    	tallyUp(NPC3die1);
    	tallyUp(NPC3die2);
    	tallyUp(NPC3die3);
    	tallyUp(NPC3die4);
    	tallyUp(NPC3die5);
    	//tallying up the NPC4's dice
    	tallyUp(NPC4die1);
    	tallyUp(NPC4die2);
    	tallyUp(NPC4die3);
    	tallyUp(NPC4die4);
    	tallyUp(NPC4die5);
    	//tallying up the NPC5's dice
    	tallyUp(NPC5die1);
    	tallyUp(NPC5die2);
    	tallyUp(NPC5die3);
    	tallyUp(NPC5die4);
    	tallyUp(NPC5die5);
    	
    	console.log("total 1's rolled: "+total1);
    	console.log("total 2's rolled: "+total2);
    	console.log("total 3's rolled: "+total3);
    	console.log("total 4's rolled: "+total4);
    	console.log("total 5's rolled: "+total5);
    	console.log("total 6's rolled: "+total6);
    	console.log("- - - - - - - - - -");
    	console.log("Total dice in play: "+(total1+total2+total3+total4+total5+total6));
    }
    function tallyUp(die){//Adding each die to its respective total
 		if (die==1)
 			total1++;
 		if (die==2)
 			total2++;
 		if (die==3)
 			total3++;
 		if (die==4)
 			total4++;
 		if (die==5)
 			total5++;
 		if (die==6)
 			total6++;
 	}
}
 {//***NPC Bidding***
	function npcBidAmount(dieAmountStart){
		dieAmountStart++;
		return dieAmountStart;}
	function npcBidValue(dieValueStart){
		dieValueStart++;
		return dieValueStart;}
	
	 function npcBidding(){

{//NPC1 Bidding
	 var rng1=(Math.floor(Math.random()*4)+1);
	 if ((rng1<=3)&&(npc1Value<6)){
		npc1Amount=npcBidAmount(dieAmountStart);
		npc1Value=userBidValue;
	}
	 if ((rng1==4)&&(npc1Value<6)){
		npc1Amount=userBidAmount;
		npc1Value=npcBidValue(dieValueStart);
	}
	if (npc1Value>5||userBidValue>=5){
		npc1Amount=userBidAmount+1;
		npc1Value=6;
	}
	if (npc1Amount>30){
		npc1Amount=30;
	}
	
	if (userBidAmount!=1){
		rng1=(Math.floor(Math.random()*4)+1);
		if ((rng1<=3)&&(npc1Value<6)){
			npc1Amount=npcBidAmount(userBidAmount);
			npc1Value=userBidValue;
		}
		if ((rng1==4)&&(npc1Value<6)){
			npc1Amount=userBidAmount;
			npc1Value=npcBidValue(userBidValue);
		}		
	}
}

{//NPC2 Bidding
	 var rng2=(Math.floor(Math.random()*4)+1);
	 if ((rng2<=3)&&(npc2Value<6)){
		npc2Amount=npcBidAmount(npc1Amount);
		npc2Value=npc1Value;
	}
	 if ((rng2==4)&&(npc2Value<6)){
		npc2Amount=npc1Amount;
		npc2Value=npcBidValue(npc1Value);
	}
	if (npc2Value>5){
		npc2Amount=npc1Amount+1;
		npc2Value=6;
	}
	if (npc2Amount>30){
		npc2Amount=30;
	}
}

{//NPC3 Bidding
	 var rng3=(Math.floor(Math.random()*4)+1);
	 if ((rng3<=3)&&(npc3Value<6)){
		npc3Amount=npcBidAmount(npc2Amount);
		npc3Value=npc2Value;
	}
	 if ((rng3==4)&&(npc3Value<6)){
		npc3Amount=npc2Amount;
		npc3Value=npcBidValue(npc2Value);
	}
	if (npc3Value>5){
		npc3Amount=npc2Amount+1;
		npc3Value=6;
	}
	if (npc3Amount>30){
		npc3Amount=30;
	}
}

{//NPC4 Bidding
	 var rng4=(Math.floor(Math.random()*4)+1);
	 if ((rng4<=3)&&(npc4Value<6)){
		npc4Amount=npcBidAmount(npc3Amount);
		npc4Value=npc3Value;
	}
	 if ((rng4==4)&&(npc4Value<6)){
		npc4Amount=npc3Amount;
		npc4Value=npcBidValue(npc3Value);
	}
	if (npc4Value>5){
		npc4Amount=npc3Amount+1;
		npc4Value=6;
	}
	if (npc4Amount>30){
		npc4Amount=30;
	}
}		

{//NPC5 Bidding
	 var rng5=(Math.floor(Math.random()*4)+1);
	 if ((rng5<=3)&&(npc5Value<6)){
		npc5Amount=npcBidAmount(npc4Amount);
		npc5Value=npc4Value;
	}
	 if ((rng5==4)&&(npc5Value<6)){
		npc5Amount=npc4Amount;
		npc5Value=npcBidValue(npc4Value);
	}
	if (npc5Value>5){
		npc5Amount=npc4Amount+1;
		npc5Value=6;
	}
	if (npc5Amount>30){
		npc5Amount=30;
	}
}

		document.getElementById("npc1Bid").innerHTML=(npc1Amount+ " - "+ npc1Value+ "'s");
		document.getElementById("npc2Bid").innerHTML=(npc2Amount+ " - "+ npc2Value+ "'s");
		document.getElementById("npc3Bid").innerHTML=(npc3Amount+ " - "+ npc3Value+ "'s");
		document.getElementById("npc4Bid").innerHTML=(npc4Amount+ " - "+ npc4Value+ "'s");
		document.getElementById("npc5Bid").innerHTML=(npc5Amount+ " - "+ npc5Value+ "'s");
		
		bidFloor();
		bidCeiling();
	}
}


{//Rules pop-up script
 var rules=document.getElementById("myModal");
 var button=document.getElementById("rules");
 var span=document.getElementsByClassName("closeRules")[0];

 button.onclick=function(){
 	rules.style.display="block";
 	console.log("test");
 }
 span.onclick=function(){
 	rules.style.display="none";
 }
 window.onclick=function(event){
 	if (event.target==rules){
 		rules.style.display="none";
 	}
 }
}
{//Version pop-up script
 var versionHistory=document.getElementById("myModal2");
 var button=document.getElementById("versionHistory");
 var span=document.getElementsByClassName("closeVersion")[0];

 button.onclick=function(){
 	versionHistory.style.display="block";
 	console.log("test");
 }
 span.onclick=function(){
 	versionHistory.style.display="none";
 }
 window.onclick=function(event){
 	if (event.target==versionHistory){
 		versionHistory.style.display="none";
 	}
 }
}

{//Liar Button Script
var userWins=0, npc1Wins=0, npc2Wins=0, npc3Wins=0, npc4Wins=0, npc5Wins=0;
var userLosses=0, npc1Losses=0, npc2Losses=0, npc3Losses=0, npc4Losses=0, npc5Losses=0;
 function callOut(){
 	if (document.getElementById("liarBox").selectedIndex==0){
		name="NPC 1";
		lieTest(npc1Amount, npc1Value, name);
 	}
 	if (document.getElementById("liarBox").selectedIndex==1){
		name="NPC 2";
		lieTest(npc2Amount, npc2Value, name);
 	}
 	if (document.getElementById("liarBox").selectedIndex==2){
		name="NPC 3";
		lieTest(npc3Amount, npc3Value, name);
 	}
 	if (document.getElementById("liarBox").selectedIndex==3){
		name="NPC 4";
		lieTest(npc4Amount, npc4value, name);
 	}
 	if (document.getElementById("liarBox").selectedIndex==4){
		name="NPC 5";
		lieTest(npc5Amount, npc5Value, name);
 	}
 }
  function lieTest(amount, value, name){
  
	if(value==1){//Testing the total amount of 1's and updating the Score Chart
		if (amount<=total1){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total1+" - 1's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total1+" - 1's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}

	if(value==2){//Testing the total amount of 2's and updating the Score Chart
		if (amount<=total2){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total2+" - 2's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total2+" - 2's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}

	if(value==3){//Testing the total amount of 3's and updating the Score Chart
		if (amount<=total3){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total3+" - 3's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total3+" - 3's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}

	if(value==4){//Testing the total amount of 4's and updating the Score Chart
		if (amount<=total4){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total4+" - 4's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total4+" - 4's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}

	if(value==5){//Testing the total amount of 5's and updating the Score Chart
		if (amount<=total5){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total5+" - 5's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total5+" - 5's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}

	if(value==6){//Testing the total amount of 6's and updating the Score Chart
		if (amount<=total6){//They were not bluffing, user losses
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Sadly, they were not bluffing. You have lost this round.<br/>There were a total of "+total6+" - 6's rolled this round";
			if (name=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			userLosses++; currentWinStreak=0;
			document.getElementById("userLosses").innerHTML=(userLosses);
		}
		else{//They were bluffing, user wins
			document.getElementById("message").innerHTML="You Called "+name+"'s Bluff! Good move, considering it was indeed a Bluff! You have won this round.<br/>There were a total of "+total6+" - 6's rolled this round";
			if (name=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			userWins++; currentWinStreak++;
			document.getElementById("userWins").innerHTML=(userWins);
		}
	}
 }
}

{//Script for NPC's Calling Bluffs
function npcCallOut(){
	var rng=(Math.floor(Math.random()*5)+1);
	console.log("Callout rng="+rng);
	if (rng==1){
		console.log("npc1 callout");
		npc1CallOut();}
	if (rng==2){
		console.log("npc2 callout");
		npc2CallOut();}
	if (rng==3){
		console.log("npc3 callout");
		npc3CallOut();}
	if (rng==4){
		console.log("npc4 callout");
		npc4CallOut();}
	if (rng==5){
		console.log("npc5 callout");
		npc5CallOut();}
}

  function lieTest2(amount, value, name1, name2){//NPC calling out another NPC or The User
  
	if(value==1){//Testing the total amount of 1's and updating the Score Chart
		if (amount<=total1){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total1+" - 1's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++; currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total1+" - 1's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
	
	if(value==2){//Testing the total amount of 2's and updating the Score Chart
		if (amount<=total2){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total2+" - 2's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++; currrentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total2+" - 2's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name1=="You"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
	
	if(value==3){//Testing the total amount of 3's and updating the Score Chart
		if (amount<=total3){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total3+" - 3's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total3+" - 3's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name1=="You"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
	
	if(value==4){//Testing the total amount of 4's and updating the Score Chart
		if (amount<=total4){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total4+" - 4's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total4+" - 4's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name1=="You"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
	
	if(value==5){//Testing the total amount of 5's and updating the Score Chart
		if (amount<=total5){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total5+" - 5's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total5+" - 5's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
	
	if(value==6){//Testing the total amount of 6's and updating the Score Chart
		if (amount<=total6){//They were not bluffing, the caller Losses
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Sadly, they were not bluffing. "+name1+" has lost this round.<br/>There were a total of "+total6+" - 6's rolled this round";
			//tallying up the losing scores
			if (name1=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name1=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name1=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name1=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name1=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			//tallying up the winning scores
			if (name2=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name2=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name2=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name2=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name2=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			if (name2=="the Player (You)"){
				userWins++;  currentWinStreak++;
				document.getElementById("userWins").innerHTML=(userWins);
			}
		}
		else{//They were bluffing, the caller wins
			document.getElementById("message").innerHTML=name1+" Called the Bluff of "+name2+"! Good move, considering it was indeed a Bluff! "+name1+" has won this round.<br/>There were a total of "+total6+" - 6's rolled this round";
			//tallying up the winning scores
			if (name1=="NPC 1"){
				npc1Wins++;
				document.getElementById("npc1Wins").innerHTML=(npc1Wins);
			}
			if (name1=="NPC 2"){
				npc2Wins++;
				document.getElementById("npc2Wins").innerHTML=(npc2Wins);
			}
			if (name1=="NPC 3"){
				npc3Wins++;
				document.getElementById("npc3Wins").innerHTML=(npc3Wins);
			}
			if (name1=="NPC 4"){
				npc4Wins++;
				document.getElementById("npc4Wins").innerHTML=(npc4Wins);
			}
			if (name1=="NPC 5"){
				npc5Wins++;
				document.getElementById("npc5Wins").innerHTML=(npc5Wins);
			}
			//tallying up the losing scores
			if (name2=="NPC 1"){
				npc1Losses++;
				document.getElementById("npc1Losses").innerHTML=(npc1Losses);
			}
			if (name2=="NPC 2"){
				npc2Losses++;
				document.getElementById("npc2Losses").innerHTML=(npc2Losses);
			}
			if (name2=="NPC 3"){
				npc3Losses++;
				document.getElementById("npc3Losses").innerHTML=(npc3Losses);
			}
			if (name2=="NPC 4"){
				npc4Losses++;
				document.getElementById("npc4Losses").innerHTML=(npc4Losses);
			}
			if (name2=="NPC 5"){
				npc5Losses++;
				document.getElementById("npc5Losses").innerHTML=(npc5Losses);
			}
			if (name2=="the Player (You)"){
				userLosses++; currentWinStreak=0;
				document.getElementById("userLosses").innerHTML=(userLosses);
			}
		}
	}
 }
	function npc1CallOut(){
		var X=(npc1Amount+npc2Amount+npc3Amount+npc4Amount+npc5Amount+userBidAmount);
		var rng=(Math.floor(Math.random())*100)+X;
		var name1="NPC 1";
		if (rng>=40){
		var rng2=(Math.floor(Math.random()*5)+1);
			if (rng2==1){//calling out the user
				name2="the Player (You)";
				lieTest2(userBidAmount, userBidValue, name1, name2);
			}
			if (rng2==2){//calling out NPC 2
				name2="NPC 2";
				lieTest2(npc2Amount, npc2Value, name1, name2);
			}
			if (rng2==3){//calling out NPC 3
				name2="NPC 3";
				lieTest2(npc3Amount, npc3Value, name1, name2);
			}
			if (rng2==4){//calling out NPC 4
				name2="NPC 4";
				lieTest2(npc4Amount, npc4Value, name1, name2);
			}
			if (rng2==5){//calling out NPC 5
				name2="NPC 5";
				lieTest2(npc5Amount, npc5Value, name1, name2);
			}
			phase3();
		}
	}
	function npc2CallOut(){
		var X=(npc1Amount+npc2Amount+npc3Amount+npc4Amount+npc5Amount+userBidAmount);
		var rng=(Math.floor(Math.random())*100)+X;
		var name1="NPC 2";
		if (rng>=40){
		var rng2=(Math.floor(Math.random()*5)+1);
			if (rng2==1){//calling out the user
				name2="the Player (You)";
				lieTest2(userBidAmount, userBidValue, name1, name2);
			}
			if (rng2==2){//calling out NPC 1
				name2="NPC 1";
				lieTest2(npc1Amount, npc1Value, name1, name2);
			}
			if (rng2==3){//calling out NPC 3
				name2="NPC 3";
				lieTest2(npc3Amount, npc3Value, name1, name2);
			}
			if (rng2==4){//calling out NPC 4
				name2="NPC 4";
				lieTest2(npc4Amount, npc4Value, name1, name2);
			}
			if (rng2==5){//calling out NPC 5
				name2="NPC 5";
				lieTest2(npc5Amount, npc5Value, name1, name2);
			}
			phase3();
			
		}
	}
	function npc3CallOut(){
		var X=(npc1Amount+npc2Amount+npc3Amount+npc4Amount+npc5Amount+userBidAmount);
		var rng=(Math.floor(Math.random())*100)+X;
		var name1="NPC 3";
		if (rng>=40){
		var rng2=(Math.floor(Math.random()*5)+1);
			if (rng2==1){//calling out the user
				name2="the Player (You)";
				lieTest2(userBidAmount, userBidValue, name1, name2);
			}
			if (rng2==2){//calling out NPC 2
				name2="NPC 2";
				lieTest2(npc2Amount, npc2Value, name1, name2);
			}
			if (rng2==3){//calling out NPC 1
				name2="NPC 1";
				lieTest2(npc1Amount, npc1Value, name1, name2);
			}
			if (rng2==4){//calling out NPC 4
				name2="NPC 4";
				lieTest2(npc4Amount, npc4Value, name1, name2);
			}
			if (rng2==5){//calling out NPC 5
				name2="NPC 5";
				lieTest2(npc5Amount, npc5Value, name1, name2);
			}
			phase3();
			
		}
	}
	function npc4CallOut(){
		var X=(npc1Amount+npc2Amount+npc3Amount+npc4Amount+npc5Amount+userBidAmount);
		var rng=(Math.floor(Math.random())*100)+X;
		var name1="NPC 4";
		if (rng>=40){
		var rng2=(Math.floor(Math.random()*5)+1);
			if (rng2==1){//calling out the user
				name2="the Player (You)";
				lieTest2(userBidAmount, userBidValue, name1, name2);
			}
			if (rng2==2){//calling out NPC 2
				name2="NPC 2";
				lieTest2(npc2Amount, npc2Value, name1, name2);
			}
			if (rng2==3){//calling out NPC 3
				name2="NPC 3";
				lieTest2(npc3Amount, npc3Value, name1, name2);
			}
			if (rng2==4){//calling out NPC 1
				name2="NPC 1";
				lieTest2(npc1Amount, npc1Value, name1, name2);
			}
			if (rng2==5){//calling out NPC 5
				name2="NPC 5";
				lieTest2(npc5Amount, npc5Value, name1, name2);
			}
			phase3();
			
		}
	}
	function npc5CallOut(){
		var X=(npc1Amount+npc2Amount+npc3Amount+npc4Amount+npc5Amount+userBidAmount);
		var rng=(Math.floor(Math.random())*100)+X;
		var name1="NPC 5";
		if (rng>=40){
		var rng2=(Math.floor(Math.random()*5)+1);
			if (rng2==1){//calling out the user
				name2="the Player (You)";
				lieTest2(userBidAmount, userBidValue, name1, name2);
			}
			if (rng2==2){//calling out NPC 2
				name2="NPC 2";
				lieTest2(npc2Amount, npc2Value, name1, name2);
			}
			if (rng2==3){//calling out NPC 3
				name2="NPC 3";
				lieTest2(npc3Amount, npc3Value, name1, name2);
			}
			if (rng2==4){//calling out NPC 4
				name2="NPC 4";
				lieTest2(npc4Amount, npc4Value, name1, name2);
			}
			if (rng2==5){//calling out NPC 1
				name2="NPC 1";
				lieTest2(npc1Amount, npc1Value, name1, name2);
			}
			phase3();
			
		}
	}
}

{//Changing the button availabilities
 document.getElementById("html").addEventListener("click", changeColour);
 function changeColour(){
 //roll button
 	if (document.getElementById("rollButton").disabled==true){
 		document.getElementById("rollButton").style.borderStyle="inset";
 		document.getElementById("rollButton").style.opacity=0.5;
 		document.getElementById("rollButton").style.cursor="not-allowed";
 	}
 	else{
 		document.getElementById("rollButton").style.borderStyle="outset";
 		document.getElementById("rollButton").style.opacity=1.0;
 		document.getElementById("rollButton").style.cursor="pointer";
 	}
 //bid button
 	if (document.getElementById("bidButton").disabled==true){
 		document.getElementById("bidButton").style.borderStyle="inset";
 		document.getElementById("bidButton").style.opacity=0.5;
 		document.getElementById("bidButton").style.cursor="not-allowed";
 	}
 	else{
 		document.getElementById("bidButton").style.borderStyle="outset";
 		document.getElementById("bidButton").style.opacity=1.0;
 		document.getElementById("bidButton").style.cursor="pointer";
 	}
 //liar button
 	if (document.getElementById("liarButton").disabled==true){
 		document.getElementById("liarButton").style.borderStyle="inset";
 		document.getElementById("liarButton").style.opacity=0.5;
 		document.getElementById("liarButton").style.cursor="not-allowed";
 	}
 	else{
 		document.getElementById("liarButton").style.borderStyle="outset";
 		document.getElementById("liarButton").style.opacity=1.0;
 		document.getElementById("liarButton").style.cursor="pointer";
 	}
 //next round button
 	if (document.getElementById("nextRoundButton").disabled==true){
 		document.getElementById("nextRoundButton").style.borderStyle="inset";
 		document.getElementById("nextRoundButton").style.opacity=0.5;
 		document.getElementById("nextRoundButton").style.cursor="not-allowed";
 	}
 	else{
 		document.getElementById("nextRoundButton").style.borderStyle="outset";
 		document.getElementById("nextRoundButton").style.opacity=1.0;
 		document.getElementById("nextRoundButton").style.cursor="pointer";
 	}
 //Bid Again button
 	if (document.getElementById("bidAgain").disabled==true){
 		document.getElementById("bidAgain").style.borderStyle="inset";
 		document.getElementById("bidAgain").style.opacity=0.5;
 		document.getElementById("bidAgain").style.cursor="not-allowed";
 	}
 	else{
 		document.getElementById("bidAgain").style.borderStyle="outset";
 		document.getElementById("bidAgain").style.opacity=1.0;
 		document.getElementById("bidAgain").style.cursor="pointer";
	}
  }
}

{//Starting a New Game (essentially resetting all variables)
 function newGame(){
	preset();
	document.getElementById("userWins").innerHTML=0;
	document.getElementById("npc1Wins").innerHTML=0;
	document.getElementById("npc2Wins").innerHTML=0;
	document.getElementById("npc3Wins").innerHTML=0;
	document.getElementById("npc4Wins").innerHTML=0;
	document.getElementById("npc5Wins").innerHTML=0;
	document.getElementById("userLosses").innerHTML=0;
	document.getElementById("npc1Losses").innerHTML=0;
	document.getElementById("npc2Losses").innerHTML=0;
	document.getElementById("npc3Losses").innerHTML=0;
	document.getElementById("npc4Losses").innerHTML=0;
	document.getElementById("npc5Losses").innerHTML=0;
	currentWinStreak=0;
	updateWinStreak();
	document.getElementById("liarBox").selectedIndex=0;
	
 	var bidAmountMenu=document.bid.dieAmount;
 	bidAmountMenu.selectedIndex=(0);
 	var bidValueMenu=document.bid.dieValue;
 	bidValueMenu.selectedIndex=(0);
 	var x=29, y=5;
 	while (x>=0){
 		document.getElementById("dieAmount").options[x].disabled=false;
		x--;
 	}
 	while (y>=0){
 		document.getElementById("dieValue").options[y].disabled=false;
		y--;
 	}
 }
}

{//Updating the Win Streak Table
	function updateWinStreak(){
		if (currentWinStreak>bestWinStreak)
			bestWinStreak=currentWinStreak;
			
		document.getElementById("currentWinStreak").innerHTML=("Current Win Streak: "+ currentWinStreak);
		document.getElementById("bestWinStreak").innerHTML=("Best Win Streak: "+ bestWinStreak);
	}
}

{//Increasing the Bids
	function increaseBids(){
		document.getElementById("userBid").innerHTML="? - ?'s";
		validBid==false;
	}
}

{//Contact information scripts
	function emailMe(){
		var confirmButton= confirm("This will open a new window with a pre-filled email. Proceed?\n\nAlternatively you can send the email to: \"BrendonBusic@gmail.com\" if you do not want to open a new window (or if you have pop-ups blocked)\n\n*Please be mature about the email subject. Thank you.")
		if (confirmButton==true)
			window.location= "mailto:brendonbusic@gmail.com?subject=Regarding the Liar's Dice game...";
	}
	function TwitterProfile(){
		window.open("https://twitter.com/scott_exe");
	}
	function gitHubProfile(){
		window.open("https://github.com/BusicMusic");
	}
}

{//? ? ? ? ?
}
