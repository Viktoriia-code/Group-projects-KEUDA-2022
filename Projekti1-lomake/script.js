function formValidation(form) {
  var etunimi = form.enimi.value;
  var sukunimi = form.snimi.value;
  var sahkoposti = form.sposti.value;
  var palaute = form.palaute.value;
  var pallukka = form.info;
  var check = form.box;
//Tarkistetaan etunimi
  if (etunimi.length < 5) {
    alert("Anna vähintään 5-merkkinen etunimi");
    form.enimi.focus();
    return false;
  }
//Tarkistetaan sukunimi
  if(sukunimi.length < 5) {
    alert("Anna vähintään 5-merkkinen sukunimi");
    form.snimi.focus();
    return false;
  }
//Tarkistetaan sähköposti
  if(emailIsValid(sahkoposti)==false) {
    alert("Anna oikea sähköpostiosoitteesi");
    form.sposti.focus();
    return (false);
  }
//Tarkistetaan palaute viesti
  if(palaute.length < 20)
  {
    alert("Palautteessa pitää olla vähintään 20 merkkiä");
    form.palaute.focus();
    return false;
  }
//Tarkistetaan radiobutton "miten kuulit tästä kyselystä"
  var vastaus = false;
  for(var i = 0; i < pallukka.length; i++) {
    if(pallukka[i].checked == true) {
      vastaus = true;
    }
 }
    if(vastaus == false) {
      alert('Et ole valinnut miten kuulit tästä kyselystä');
      return false;
    }
//Tarkistetaan checkbox "miten pääset töihin"
  var checkvastaus = false;
  for(var j = 0; j < check.length; j++) {
    if(check[j].checked == true) {
      checkvastaus = true;
    }
  }
  if(checkvastaus == false) {
    alert("Et valinnut, miten pääset töihin");
    return false;
  } else {alert("Kiitos lomakkeen täytöstä");}
}
// Tyhjennetään lomake
function formReset(form) {
  var clean = form.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}
//Functio joka tarkistaa sähköpostin
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
