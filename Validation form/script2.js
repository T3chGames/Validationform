//this function opens the dutch page after you click on the button
function openSite() {
    window.location.replace("index.html");
}

//when you click out of a input box it runs all the functions
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

//here it checks if the input is only letters
function check_name() {
    var pattern = /^[a-zA-Z]*$/;
    var val_name = $("#val_name").val();

    if (pattern.test(val_name) && val_name !== '') {
        $("#val_name").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Name is not filled in correctly!");
        $("#val_name").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is only digits
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
        $("#age").html("Your age is: " + currentAge);
        $("#age").css({
            "transition": "3s",
            "opacity": "1"
        })
        $("#val_birth").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Your birthday hasn't been filled in correctly");
        $("#val_birth").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is a combination of letters and digits
function check_adres() {
    var pattern = /^([1-9][e][\s])*([a-zA-Z]+(([\.][\s])|([\s]))?)+[1-9][0-9]*(([-][1-9][0-9]*)|([\s]?[a-zA-Z]+))?$/i;
    var val_adres = $("#val_adres").val();

    if (pattern.test(val_adres) && val_adres !== '') {
        $("#val_adres").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Adres is not filled in correctly!");
        $("#val_adres").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is only letters
function check_city() {
    var pattern = /^[a-zA-Z]*$/;
    var val_city = $("#val_city").val();

    if (pattern.test(val_city) && val_city !== '') {
        $("#val_city").css("border-bottom", "2px solid #34F458");
    } else {
        alert("City is not filled in correctly!");
        $("#val_city").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is a combination of digits and letters
function check_postal() {
    var pattern = /^[1-9][0-9]{3}/
    var val_postal = $("#val_post").val();

    if (pattern.test(val_postal) && val_postal !== '') {
        $("#val_post").css("border-bottom", "2px solid #34F458");
    } else {
        $("#val_post").css("border-bottom", "2px solid red");
        alert("Postal Code is not filled in correctly!");
    }
}

//here it checks if the input is only letters
function check_nat() {
    var pattern = /^[a-zA-Z]*$/;
    var val_nat = $("#val_nat").val();

    if (pattern.test(val_nat) && val_nat !== '') {
        $("#val_nat").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Nationality is not filled in correctly!");
        $("#val_nat").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is only letters
function check_job() {
    var pattern = /^[a-zA-Z]*$/;
    var val_job = $("#val_job").val();

    if (pattern.test(val_job) && val_job !== '') {
        $("#val_job").css("border-bottom", "2px solid #34F458");
    } else {
        alert("Job is not filled in correctly!");
        $("#val_job").css("border-bottom", "2px solid red");
    }
}

//here it checks if the input is one of the 3 options
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



//here it runs all the functions after you click the button
$("#submit").submit(function () {
    check_name();
    check_adres();
    check_city();
    check_job();
    check_nat();
    check_postal();
    check_gender();
    check_age();
})