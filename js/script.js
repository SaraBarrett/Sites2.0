function helloWorld() {
  //lança um popup
  //alert("Olá Mundo!");

  //faz console.log
  //console.log("Olá Mundo!");

    //fazer um prompt

    let userMood = prompt("Como estás hoje?");
}

function stringFunction(){
    let userName = prompt('qual é o teu nome completo?');
    let shortName = userName.slice(0,userName.indexOf(' '));

    alert('olá ' + shortName);

}