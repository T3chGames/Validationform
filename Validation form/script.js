//met deze functie open je de engels site nadat je op een knopje drukt.
function openSite() {
    window.location.replace("index_en.html");
}

//als je uit een input box gaat voert hij deze functies uit
$(function () {
    $("#val_name").focusout(function () {
        check_name();
    });

    $("#val_adres").focusout(function () {
        check_adres();
    });

    $("#val_city").focusout(function () {
        check_city();
    });

    $("#val_post").focusout(function () {
        check_postal();
    });

    $("#val_nat").focusout(function () {
        check_nat();
    });

    $("#val_job").focusout(function () {
        check_job();
    });

    $("#val_gen").focusout(function () {
        check_gender();
    });

    $("#val_birth").focusout(function () {
        check_age();
    });
})

//hier checkt hij of het voldoet aan een regex van letters
function check_name() {
    var pattern = /^[a-zA-Z]*$/;
    var val_name = $("#val_name").val();

    if (pattern.test(val_name) && val_name !== '') {
        $("#val_name").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Je naam is niet correct ingevuld!");
        $("#val_name").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van cijfers en berekent hij de leeftijd
function check_age() {
    var pattern = /^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/;
    var val_name = $("#val_birth").val();
    console.log(val_name);
    if (pattern.test(val_name) && val_name !== '') {
        var from = val_name.split("-");
        var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
        var cur = new Date();
        var diff = cur - birthdateTimeStamp;
        var currentAge = Math.floor(diff / 31557600000);
        $("#age").html("Je leeftijd is: " + currentAge);
        $("#age").css({
            "transition": "3s",
            "opacity": "1"
        })
        $("#val_birth").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Je geboortedatum is niet correct ingevuld!");
        $("#val_birth").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van letters en cijfers
function check_adres() {
    var pattern = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
    var val_adres = $("#val_adres").val();

    if (pattern.test(val_adres) && val_adres !== '') {
        $("#val_adres").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Addres is niet correct ingevuld!");
        $("#val_adres").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van letters
function check_city() {
    var pattern = /^[a-zA-Z]*$/;
    var val_city = $("#val_city").val();

    if (pattern.test(val_city) && val_city !== '') {
        $("#val_city").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Stad is niet correct ingevuld!");
        $("#val_city").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van cijfers en letters
function check_postal() {
    var pattern = /^[1-9][0-9]{3}/
    var val_postal = $("#val_post").val();

    if (pattern.test(val_postal) && val_postal !== '') {
        $("#val_post").css("border-bottom", "2px solid #34F458");
    } else {
        $("#val_post").css("border-bottom", "2px solid red");
        alert("Postcode is niet correct ingevuld!");
    }
}

//hier checkt hij of het voldoet aan een regex van letters
function check_nat() {
    var pattern = /^[a-zA-Z]*$/;
    var val_nat = $("#val_nat").val();

    if (pattern.test(val_nat) && val_nat !== '') {
        $("#val_nat").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Nationaliteit is niet correct ingevuld!");
        $("#val_nat").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van letters
function check_job() {
    var pattern = /^[a-zA-Z]*$/;
    var val_job = $("#val_job").val();

    if (pattern.test(val_job) && val_job !== '') {
        $("#val_job").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Baan is niet correct ingevuld");
        $("#val_job").css("border-bottom", "2px solid red");
    }
}

//hier checkt hij of het voldoet aan een regex van 3 opties
function check_gender() {
    var pattern1 = /male/;
    var pattern2 = /none/;
    var pattern3 = /notmale/;

    var val_gen = $("#val_gen").val();

    if (pattern3.test(val_gen)) {
        $("#val_gen, #val_job, #val_name, #val_adres, #val_city, #val_post, #val_birth, #val_nat, #val_comment, #val_submit").css({
            "background-color": "purple",
            "color": "hotpink",
            "border-bottom": "1px solid black"
        });


    } else if (pattern2.test(val_gen)) {
        alert("Selecteer a.u.b een aanhef");
        $("#val_gen").css({
            "border-bottom": "2px solid red",
            "background-color": "white",
            "color": "black"
        });

    } else if (pattern1.test(val_gen)) {
        $("#val_gen, #val_job, #val_name, #val_adres, #val_city, #val_post, #val_birth, #val_nat, #val_comment, #val_submit").css({
            "border-bottom": "1px solid black",
            "background-color": "darkgreen",
            "color": "lime"
        });
    }
}



//als je op de knop drukt voert hij nogmaals alle functies uit
$("#bevestig").submit(function () {
    check_name();
    check_adres();
    check_city();
    check_job();
    check_nat();
    check_postal();
    check_gender();
    check_age();
})