function updateTime() {
  //Dar es Salaam
  let darEsSalaamElement = document.querySelector("#dar-es-salaam");
  if (darEsSalaamElement) {
    let darEsSalaamDateElement = darEsSalaamElement.querySelector("#date");
    darEsSalaamTime = moment().tz("Africa/Dar_es_Salaam");

    darEsSalaamDateElement.innerHTML = darEsSalaamTime.format(
      "dddd, MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
  //Autin, Texas
  let austinTexasElement = document.querySelector("#austin-texas");
  if (austinTexasElement) {
    let austinTexasDateElement = austinTexasElement.querySelector("#date");
    austinTexasTime = moment().tz("America/Chicago");

    austinTexasDateElement.innerHTML = austinTexasTime.format(
      "dddd, MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
  //Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector("#date");
    bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = bangkokTime.format(
      "dddd, MMMM Do[<br />][<span class='time-font'>]h:mm:ss[</span>] [<small>]A[</small]"
    );
  }
}

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone
      .replace("Mexico_City", "Puerto Vallarta")
      .replace("New_York", "Provincetown")
      .replace("_", " ")
      .split("/")[1];
    if (cityTimeZone === moment.tz.guess()) {
      cityName = "Current Location";
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `<div class="city-container" id="city">
        <div class="city">
          <h2>${cityName}</h2>
          <div class="date" id="date">${cityTime.format(
            "dddd, MMMM Do"
          )}<br /><span class='time-font'>${cityTime.format(
      "h:mm:ss"
    )}</span><small>${cityTime.format("A")}</small</div>
      `;
  }, 1000);
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);
