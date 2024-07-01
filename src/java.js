function updateTime() {
  //Dar es Salaam
  let darEsSalaamElement = document.querySelector("#dar-es-salaam");
  if (darEsSalaamElement) {
    let darEsSalaamDateElement = darEsSalaamElement.querySelector("#date");
    darEsSalaamTime = moment().tz("Africa/Dar_es_Salaam");

    darEsSalaamDateElement.innerHTML = darEsSalaamTime.format(
      "dddd MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
  //Autin, Texas
  let austinTexasElement = document.querySelector("#austin-texas");
  if (austinTexasElement) {
    let austinTexasDateElement = austinTexasElement.querySelector("#date");
    austinTexasTime = moment().tz("America/Chicago");

    austinTexasDateElement.innerHTML = austinTexasTime.format(
      "dddd MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
  //Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector("#date");
    bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format(
      "dddd MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
