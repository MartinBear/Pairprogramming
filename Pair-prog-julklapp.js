/*
START
	Alarm ringer
OM inte vakna
	Försova sig
		stressa till tuben

ANNARS så
	Ta på kläder
		ätafrukost
			Åka tbana
				Framme i tid
					Lärasigsaker i skolan
						SLUT OM
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
START
OM vakna i tid 
 gör kaffe
  ät frukost
   ta på kläder

MEDAN Tbana
 lyssna på musik

ANNARS så 
 spring till Tbanan
  köp frukost
   köp kaffe

ANNARS OM sovmorgon
 sov länge
  ta det lugnt resten av dagen
  SLUT OM
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////Pair prog
///////////////////////////////////////////////////////////////////


Julklapp
Hur mycket pengar har du?
OM mycket
	köp dator
OM lagom
	köp ett fint klädesplagg
OM lite
	bok/böcker

MEDAN present ej är inslagen
	slå in paketet

ANNARS pappret är slut
	gå till affären och köp nytt

*/

let pengar = prompt("Hur mycket pengar har du?");
let present = "";
const datorPris = 6000;//mycket
const kläderPris = 1000;//lagom
const bokPris = 300;//lite
let inslagen = prompt("Finns det papper? Ja= 1/Nej= 0") 

const julklapp = () => {
    
        while (pengar > 0){
            if (pengar >= 5000) {
            present += "dator";
            pengar -= datorPris;
            }
            else if (pengar >= 500 && 5000 > pengar) {
                present += "kläder";
                pengar -= kläderPris;
            }
            else if (pengar > 0 && pengar < 500) {
                present += "bok";
                pengar -= bokPris;
            }
            return present;
        }
            console.log("du har inte tillräckligt pengar för att köpa en julklapp");
}

if(inslagen){
    
    present += julklapp() + " som är inslagen";
    

}
if (pengar > 50) {
    pengar -= 50;
    console.log("Du har köpt papper för att slå in presenten.");
    present += " nyköptpapper";
}
else {
    console.log('Du har inte tillräckligt pengar kvar');
}

console.log("du har: SEK"+ pengar + " kvar efter ha köpt: " + present);
/*
/////////////////////////////////////////////////////////////////////////////////////////////////

function dice(){
var x = Math.floor((Math.random() * 6) + 1);
console.log(x);
}
dice();
*/
///Här är en kommentar 

//tagit bort en rad




