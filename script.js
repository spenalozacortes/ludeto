let sperteco = 0;
let sano = 100;
let oreroj = 50;
let nunaBatalilo = 0;
let batalato;
let monstroSano;
let inventaro = ["bastono"];

const butono1 = document.querySelector('#butono1');
const butono2 = document.querySelector("#butono2");
const butono3 = document.querySelector("#butono3");
const teksto = document.querySelector("#teksto");
const spertecoTeksto = document.querySelector("#sperteco-teksto");
const sanoTeksto = document.querySelector("#sano-teksto");
const orerojTeksto = document.querySelector("#oreroj-teksto");
const monstroStatistikajxoj = document.querySelector("#monstro-statistikajxoj");
const monstroNomo = document.querySelector("#monstro-nomo");
const monstroSanoTeksto = document.querySelector("#monstro-sano");
const bataliloj = [
  { nomo: 'bastono', potenco: 5 },
  { nomo: 'dago', potenco: 30 },
  { nomo: 'martelo', potenco: 50 },
  { nomo: 'glavo', potenco: 100 }
];
const monstroj = [
  {
    nomo: "Idisto",
    saluto: "Me odias akuzativo!",
    nivelo: 2,
    sano: 15
  },
  {
    nomo: "Kapitalisto",
    saluto: "Ni jam havas internacian lingvon: la anglan!",
    nivelo: 8,
    sano: 60
  },
  {
    nomo: "Krokodilego",
    saluto: "I really don't like you!",
    nivelo: 20,
    sano: 300
  }
]
const lokoj = [
  {
    nomo: "placo",
    "butonaj tekstoj": ["Iri al vendejo", "Iri al kaverno", "Batali Krokodilegon"],
    "butonaj funkcioj": [iriVendejon, iriKavernon, bataliKrokodilegon],
    teksto: "Vi estas en la placo. Vi vidas pendoŝildon, kiu diras \"Vendejo\"."
  },
  {
    nomo: "vendejo",
    "butonaj tekstoj": ["Aĉeti 10 sano-poentojn (10 oreroj)", "Aĉeti batalilon (30 oreroj)", "Iri al placo"],
    "butonaj funkcioj": [acxetiSanon, acxetiBatalilon, iriPlacon],
    teksto: "Vi eniras la vendejon."
  },
  {
    nomo: "kaverno",
    "butonaj tekstoj": ["Batali Idiston", "Batali Kapitaliston", "Iri al placo"],
    "butonaj funkcioj": [bataliIdiston, bataliKapitaliston, iriPlacon],
    teksto: "Vi eniras la kavernon. Vi vidas kelkajn monstrojn."
  },
  {
    nomo: "batali",
    "butonaj tekstoj": ["Ataki", "Eviti", "Kuri"],
    "butonaj funkcioj": [ataki, eviti, iriPlacon],
    teksto: "Vi estas batalanta monstron."
  },
  {
    nomo: "mortigi monstron",
    "butonaj tekstoj": ["Iri al placo", "Iri al placo", "Iri al placo"],
    "butonaj funkcioj": [iriPlacon, iriPlacon, paskaOvo],
    teksto: 'Mortante, la monstro kriegas "Ve!". Vi gajnas sperteco-poentojn kaj trovas orerojn.'
  },
  {
    nomo: "malvenki",
    "butonaj tekstoj": ["ĈU RELUDI?", "ĈU RELUDI?", "ĈU RELUDI?"],
    "butonaj funkcioj": [rekomenci, rekomenci, rekomenci],
    teksto: "Vi mortas. &#x2620;"
  },
  { 
    nomo: "venki", 
    "butonaj tekstoj": ["ĈU RELUDI?", "ĈU RELUDI?", "ĈU RELUDI?"], 
    "butonaj funkcioj": [rekomenci, rekomenci, rekomenci], 
    teksto: "Vi venkas la Krokodilegon! VI ESTAS VENKISTO! &#x1F389;" 
  },
  {
    nomo: "paska ovo",
    "butonaj tekstoj": ["2", "8", "Iri al placo?"],
    "butonaj funkcioj": [elektiDu, elektiOk, iriPlacon],
    teksto: "Vi trovas sekretan ludon. Elektu nombron supre. Dek nombroj estos hazarde elektitaj inter 0 kaj 10. Se la nombro, kiun vi elektos, kongruos kun unu el la hazardaj nombroj, vi venkos!"
  }
];

butono1.onclick = iriVendejon;
butono2.onclick = iriKavernon;
butono3.onclick = bataliKrokodilegon;

function gxisdatigi(loko) {
  monstroStatistikajxoj.style.display = "none";
  butono1.innerText = loko["butonaj tekstoj"][0];
  butono2.innerText = loko["butonaj tekstoj"][1];
  butono3.innerText = loko["butonaj tekstoj"][2];
  butono1.onclick = loko["butonaj funkcioj"][0];
  butono2.onclick = loko["butonaj funkcioj"][1];
  butono3.onclick = loko["butonaj funkcioj"][2];
  teksto.innerHTML = loko.teksto;
}

function iriPlacon() {
  gxisdatigi(lokoj[0]);
}

function iriVendejon() {
  gxisdatigi(lokoj[1]);
}

function iriKavernon() {
  gxisdatigi(lokoj[2]);
}

function acxetiSanon() {
  if (oreroj >= 10) {
    oreroj -= 10;
    sano += 10;
    orerojTeksto.innerText = oreroj;
    sanoTeksto.innerText = sano;
  } else {
    teksto.innerText = "Vi ne havas sufiĉe da oreroj por aĉeti sano-poentojn.";
  }
}

function acxetiBatalilon() {
  if (nunaBatalilo < bataliloj.length - 1) {
    if (oreroj >= 30) {
      oreroj -= 30;
      nunaBatalilo++;
      orerojTeksto.innerText = oreroj;
      let novaBatalilo = bataliloj[nunaBatalilo].nomo;
      teksto.innerText = "Vi nun havas " + novaBatalilo + "n.";
      inventaro.push(novaBatalilo);
      teksto.innerText += " En via inventaro vi havas: " + inventaro;
    } else {
      teksto.innerText = "Vi ne havas sufiĉe da oreroj por aĉeti batalilon.";
    }
  } else {
    teksto.innerText = "Vi jam havas la plej potencan batalilon!";
    butono2.innerText = "Vendi batalilon kontraŭ 15 oreroj";
    butono2.onclick = vendiBatalilon;
  }
}

function vendiBatalilon() {
  if (inventaro.length > 1) {
    oreroj += 15;
    orerojTeksto.innerText = oreroj;
    let nunaBatalilo = inventaro.shift();
    teksto.innerText = "Vi vendis " + nunaBatalilo + "n.";
    teksto.innerText += " En via inventaro vi havas: " + inventaro;
  } else {
    teksto.innerText = "Ne vendu vian solan batalilon!";
  }
}

function bataliIdiston() {
  batalato = 0;
  iriBatali();
}

function bataliKapitaliston() {
  batalato = 1;
  iriBatali();
}

function bataliKrokodilegon() {
  batalato = 2;
  iriBatali();
}

function iriBatali() {
  gxisdatigi(lokoj[3]);
  monstroSano = monstroj[batalato].sano;
  monstroStatistikajxoj.style.display = "block";
  monstroNomo.innerText = monstroj[batalato].nomo;
  monstroSanoTeksto.innerText = monstroSano;
}

function ataki() {
  teksto.innerText = "La " + monstroj[batalato].nomo + " atakas.";
  teksto.innerText += " Ĝi krias \"" + monstroj[batalato].saluto + "\".";
  teksto.innerText += " Vi atakas ĝin per via " + bataliloj[nunaBatalilo].nomo + ".";
  sano -= akiriValoronDeMonstraAtako(monstroj[batalato].nivelo);
  if (cxuMonstroBatita()) {
    monstroSano -= bataliloj[nunaBatalilo].potenco + Math.floor(Math.random() * sperteco) + 1;    
  } else {
    teksto.innerText += " Vi maltrafis ĝin.";
  }
  sanoTeksto.innerText = sano;
  monstroSanoTeksto.innerText = monstroSano;
  if (sano <= 0) {
    malvenki();
  } else if (monstroSano <= 0) {
    if (batalato === 2) {
      venkiLudon();
    } else {
      venkiMonstron();
    }
  }
  if (Math.random() <= .1 && inventaro.length !== 1) {
    teksto.innerText += " Via " + inventaro.pop() + " rompiĝis.";
    nunaBatalilo--;
  }
}

function akiriValoronDeMonstraAtako(nivelo) {
  const bato = (nivelo * 5) - (Math.floor(Math.random() * sperteco));
  return bato > 0 ? bato : 0;
}

function cxuMonstroBatita() {
  return Math.random() > .2 || sano < 20;
}

function eviti() {
  teksto.innerText = "Vi evitis la atakon de " + monstroj[batalato].nomo + ".";
}

function venkiMonstron() {
  oreroj += Math.floor(monstroj[batalato].nivelo * 6.7);
  sperteco += monstroj[batalato].nivelo;
  orerojTeksto.innerText = oreroj;
  spertecoTeksto.innerText = sperteco;
  gxisdatigi(lokoj[4]);
}

function malvenki() {
  gxisdatigi(lokoj[5]);
}

function venkiLudon() {
  gxisdatigi(lokoj[6]);
}

function rekomenci() {
  sperteco = 0;
  sano = 100;
  oreroj = 50;
  nunaBatalilo = 0;
  inventaro = ["bastono"];
  orerojTeksto.innerText = oreroj;
  sanoTeksto.innerText = sano;
  spertecoTeksto.innerText = sperteco;
  iriPlacon();
}

function paskaOvo() {
  gxisdatigi(lokoj[7]);
}

function elektiDu() {
  elekti(2);
}

function elektiOk() {
  elekti(8);
}

function elekti(diveno) {
  const nombroj = [];
  while (nombroj.length < 10) {
    nombroj.push(Math.floor(Math.random() * 11));
  }
  teksto.innerText = "Vi divenis " + diveno + ". Jen la hazardaj nombroj:\n";
  for (let i = 0; i < 10; i++) {
    teksto.innerText += nombroj[i] + "\n";
  }
  if (nombroj.includes(diveno)) {
    teksto.innerText += "Prave! Vi gajnas 20 orerojn!";
    oreroj += 20;
    orerojTeksto.innerText = oreroj;
  } else {
    teksto.innerText += "Malprave! Vi perdas 10 sano-poentojn!";
    sano -= 10;
    sanoTeksto.innerText = sano;
    if (sano <= 0) {
      malvenki();
    }
  }
}
