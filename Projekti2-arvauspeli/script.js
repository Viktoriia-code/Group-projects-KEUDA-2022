var kerrat = 0;
var luvut = document.getElementsByClassName('nayta');
let arvoLuku = Math.ceil(Math.random()*10);
let win = 0;
var winNumero = 0;
var loseNumero = 0;

function arvaa(arpa) {
  kerrat++;
  var arvaus = arpa.value;
  if ((kerrat < 3)&&(win==0)) {
    if (arvaus < arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian pienen numeron';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if(arvaus > arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian suuren numeron';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if (arvaus == arvoLuku) {
      document.getElementById('viesti').innerHTML ='Oikein, käytit ' + kerrat + ' kertaa<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumber').innerHTML = winNumero;
    }
  } else if ((kerrat==3)&&(win==0)) {
    if (arvaus < arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian pienen numeron ja käytit kaikki arvauksesi,<br> oikea luku on ' + arvoLuku + '<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
      loseNumero += 1;
      document.getElementById('loseNumber').innerHTML = loseNumero;
      document.getElementById(''+arvoLuku+'').classList.add("levitate");
    } else if(arvaus > arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian suuren numeron ja käytit kaikki arvauksesi,<br> oikea luku on ' + arvoLuku + '<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
      loseNumero += 1;
      document.getElementById('loseNumber').innerHTML = loseNumero;
      document.getElementById(''+arvoLuku+'').classList.add("levitate");
    } else if (arvaus == arvoLuku) {
      document.getElementById('viesti').innerHTML ='Oikein, käytit ' + kerrat + ' kertaa<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumber').innerHTML = winNumero;
    }
  } else if (win==1){
      document.getElementById('viesti').innerHTML ='Löysit jo oikean luvun, se on ' +arvoLuku + '<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.add("oikein");
  }
}
//play again
function pelaaTaas() {
  for (i=0;i<luvut.length;i++) {
    luvut[i].classList.remove("vaarin");
    luvut[i].classList.remove("oikein");
    luvut[i].classList.remove("levitate");
    luvut[i].disabled = false;
  }
  kerrat = 0;
  win = 0;
  arvoLuku = Math.ceil(Math.random()*10);
  document.getElementById('viesti').innerHTML = '';
}

animation()
