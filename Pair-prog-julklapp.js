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



var pengar = prompt("Hur mycket pengar har du?");
var present = "";
var datorPris = 6000;//mycket
var kläderPris = 1000;//lagom
var bokPris = 300;//lite
var inslagen = prompt("Finns det papper? Ja= 1/Nej= 0") 

if (pengar > 5000) {
present += "dator"
pengar -= datorPris;
}
else if (pengar > 500 && 5000 > pengar) {
	present += "kläder"
	pengar -= kläderPris;
}
else{
	present += "bok"
	pengar -= bokPris;
}
while(inslagen){
present += "papper"
console.log(present);

}
pengar -= 50
present += "nyköptpapper"
console.log("du har:"+ pengar + "kvar efter ha köpt:" + present);
/////////////////////////////////////////////////////////////////////////////////////////////////

function dice(){
var x = Math.floor((Math.random() * 6) + 1);
console.log(x);
}
dice();






