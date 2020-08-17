$(document).ready(function () {

    let div = $("#timer");

    let status = div.data('status');

    if (status === "EN COUR") {

        const timer = setInterval(function (){

            let now = new Date();
            let start =  new Date(div.data('timer').date);
            let diff = now - start;

            diff = new Date(diff);

            let mil = diff.getMilliseconds();
            let sec = diff.getSeconds();
            let min = diff.getMinutes();
            let hr = diff.getUTCHours();

            if (hr < 10){
                hr = "0" + hr
            }
            if (min < 10){
                min = "0" + min
            }
            if (sec < 10){
                sec = "0" + sec
            }
            if (mil < 10){
                mil = "00" + mil
            }
            else if (mil < 100)
            {
                mil = "0" + mil
            }

            div.text(hr + ":" + min + ":" + sec + ":" + mil);

        }, 10);
    }


})