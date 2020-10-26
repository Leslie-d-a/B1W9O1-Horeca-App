var bier = 0;
var fris = 0;
var wijn = 0;
const bierPrijs = 2.00;
const frisPrijs = 1.50;
const wijnPrijs = 10.00;
var bierTotaal;
var frisTotaal;
var wijnTotaal;
var bestelling;
var aantal;
var totaal;
var repeat = true;

//maakt een p element aan in de body
function createPElement(text) {
    var pElement = document.createElement("p");
    var pElementText = document.createTextNode(text);
    pElement.appendChild(pElementText);
    document.body.appendChild(pElement);
}

while (repeat == true) {
    bestelling = prompt("Welke bestelling wilt u toevoegen?\nbier €2\nfris €1,50\nwijn €10\nstop. klaar met dingen toevoegen.");
    bestelling = bestelling.toLowerCase();


    if (bestelling == "stop") {
        repeat = false
    } else {
        if (bestelling == "bier" || bestelling == "fris" || bestelling == "wijn") {
            while (repeat == true) {
                aantal = prompt("Hoeveel " + bestelling + " wilt u toevoegen aan uw bestelling?\ntype annuleer om iets anders te kiezen.");
                aantal = aantal.toLowerCase();
                if (bestelling == "bier") {
                    bier = Number(bier) + Number(aantal);
                    repeat = false
                } else if (bestelling == "fris") {
                    fris = Number(fris) + Number(aantal);
                    repeat = false
                } else if (bestelling == "wijn") {
                    wijn = Number(wijn) + Number(aantal);
                    repeat = false
                } else if (bestelling == "annuleer") {
                    alert("geannuleerd.");
                    repeat = false
                } else {
                    alert("voer a.u.b. een aantal in. of type annuleer om iets anders te kiezen.");
                }
            }
            repeat = true
        } else {
            alert("voer a.u.b. bier, fris, wijn of stop in.");
        }
    }
}

bierTotaal = bier * bierPrijs
frisTotaal = fris * frisPrijs
wijnTotaal = wijn * wijnPrijs
totaal = Number(bierTotaal) + Number(frisTotaal) + Number(wijnTotaal);

createPElement("bier = " + bier + " * €" + bierPrijs + " = €" + bierTotaal);
createPElement("fris = " + fris + " * €" + frisPrijs + " = €" + frisTotaal);
createPElement("wijn = " + wijn + " * €" + wijnPrijs + " = €" + wijnTotaal);
createPElement("totaal = €" + totaal);