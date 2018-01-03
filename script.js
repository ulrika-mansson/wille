$(document).ready(function(){
    console.log("fungerar!");

    var sentence;

    $(".pickImage").hide();

    $(".start").click(function() {
        
        $(".start").hide();

        var adjective = prompt("Skriv ett adjektiv!")
        console.log(adjective);

        sentence = ("Det var en gång en " + adjective + " pojke");
        
        $(".story").append(sentence);
        console.log(sentence);

        var verb = prompt("Skriv ett verb!");
        console.log(verb);
        
        sentence += (" som ville " + verb);
        $(".story").text(sentence);
        
        console.log(sentence);

        var place = prompt("Skriv en plats!");
        console.log(place); 

        /* alert("Håll andan - snart klart!"); */

        sentence += (" bäst i hela " + place + " .");
        $(".story").text(sentence);

        $(".pickImage").show();
    });


        
        $(".image1").hide();
        $(".image2").hide();
        $(".image3").hide();

        
    $(".pick1").click(function() {
        console.log("pick1");
        $(".image1").show();

    }); 

    $(".pick2").click(function() {
        console.log("pick2");
        $(".image2").show();

    });

    $(".pick3").click(function() {
        console.log("pick3");
        $(".image3").show();

    });
    
    



});