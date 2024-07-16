function updateTime() {
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let edinburghElement = document.querySelector("#edinburgh");
  if (edinburghElement) {
    let edinburghDateElement = edinburghElement.querySelector(".date");
    let edinburghTimeElement = edinburghElement.querySelector(".time");
    let edinburghTime = moment().tz("Europe/Edinburgh");

    edinburghDateElement.innerHTML = edinburghTime.format("MMMM Do YYYY");
    edinburghTimeElement.innerHTML = edinburghTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
