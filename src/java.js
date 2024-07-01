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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone
    .replace("New_York", "Provincetown")
    .replace("_", " ")
    .split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `<h1>${cityName}</h1>
        <div class="current-date-time">
          <span class="current-date">${cityTime.format(
            "MMMM "
          )}<span class="big">${cityTime.format("Do ")}</span><br />
            <span class="big">${cityTime.format(
              "dddd "
            )}</span>${cityTime.format("YYYY ")}</span
          >
          <div class="current-time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);
