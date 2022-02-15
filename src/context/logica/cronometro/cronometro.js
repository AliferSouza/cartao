export default function Cronometro(){
var total_seconds = localStorage.getItem("total_seconds")
        ? localStorage.getItem("total_seconds")
        : 40 * 60;
      var c_minutes = parseInt(total_seconds / 60);
      var c_seconds = parseInt(total_seconds % 60);

      function checkTime() {
        document.getElementById("timeLeft").innerHTML =
          "Time Left: " + c_minutes + " : " + c_seconds;

        if (total_seconds <= 0) {
          document.querySelector(document).ready(function () {
            document.querySelector("#submitLinguistics").click();
          });
          clearInterval(myInterval);
        } else {
          total_seconds = total_seconds - 1;
          c_minutes = parseInt(total_seconds / 60);
          c_seconds = parseInt(total_seconds % 60);
        }
        localStorage.setItem("total_seconds", total_seconds);
      }
    }
