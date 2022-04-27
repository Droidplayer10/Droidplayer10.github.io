var tomb;

fetch("https://raw.githubusercontent.com/abstractlyZach/write_you_a_love_song/master/data/songs/artists/Eminem.json")
.then(x => x.json())
.then(y => megjelenit(y));


function megjelenit(adatok){
    console.log(adatok)
    tomb=adatok;
    
    var sz='';
    for (var elem of adatok)
    {
        sz+='<div class="col-sm-3">'
        sz+='<p>'+elem.title+'</p>'
        sz+='</div>'
    }
    document.getElementById("eminemdiv").innerHTML=sz;
}
function kattintas(sorszam){
    var sz='';
    //sz+=sorszam;
    sz+=adatok[sorszam].artist+" "+adatok[sorszam].artist
    document.getElementById("modalisfej").innerHTML=sz

    var sz2='';
    for (var elem of adatok.title){
        sz2+='<p>'
        sz2+=elem.title
        sz2+='</p>'

        if (typeof elem.title==='undefined')
        {
        }
        else{
        sz2+='<p>'
        sz2+=elem.title
        sz2+='</p>'
        }
        
        
    }
    document.getElementById("modalistorzs").innerHTML=sz2;
}