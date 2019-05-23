
var pos=[0,0,0]
const sommelocal1={0:180,1:110,2:60}
var sommelocal=[0,0,0]
function incrementer(i){
    var sommegeneral =0
pos[i]+=1
sommelocal[i]+=sommelocal1[i]
for(let j of sommelocal){
    sommegeneral+=j
}

document.getElementById("unique"+i).innerHTML = pos[i];
document.getElementById("flouss"+i).innerHTML=sommelocal[i]
document.getElementById("valeur").innerHTML=sommegeneral
}

 function soustract(i){
      if (pos[i]>0){
        var sommegeneral =0
          pos[i]-=1
          sommelocal[i]-=sommelocal1[i]
          for(let j of sommelocal){
            sommegeneral+=j
        }
      document.getElementById("unique" + i).innerHTML=pos[i];
      document.getElementById("flouss"+i).innerHTML=sommelocal[i]
      document.getElementById("valeur").innerHTML=sommegeneral

      }
    
    

}
var alternance=[1,1,1]
function showlove(i){
    if ((alternance[i]%2) != 0) {
    document.getElementById("coeur"+ i).style.color="red"}
    else{
        document.getElementById("coeur"+ i).style.color="black"

    }
     alternance[i]+=1
}

function removeElement(i) {
    // Removes an element from the document
    var element = document.getElementById("bloc"+i);
    element.parentNode.removeChild(element)
}