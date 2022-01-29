var tomb=[
    "01mandarin.jpg",
    "02alma.jpg",
    "03banan.jpg"
];

kattintas()


function kattintas(){
    var veletlen=Math.floor(Math.random() * tomb.length);
    document.getElementById("gyumolcshelye").innerHTML=tomb[veletlen];
    console.log(tomb[veletlen]);
    document.getElementById("kep").src=veletlen+".jpg";
}

function vizsgalas(){
 var gyumolcs1 = document.getElementById("gyumolcs1").value;
 document.getElementById("igazhamis").innerHTML= gyumolcs1;
 if (gyumolcs1 == "mandarin"){
     
 }

}