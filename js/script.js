function age(userAge){
    alert('a idade do user é '+ userAge);
  }



function helloWorld() {
  //lança um popup
  //alert("Olá Mundo!");

  //faz console.log
  //console.log("Olá Mundo!");

  //fazer um prompt

  let userMood = prompt("Como estás hoje?");
}

function stringFunction() {
  let userName = prompt("qual é o teu nome completo?");
  let shortName = userName.slice(0, userName.indexOf(" "));

  console.log("teste");
  alert(`olá ${shortName}!`);
}

function multimediaInfo() {

  age(16)
  // let courseName = "Técnico de Produtos Multimédia";
  // let couseHours = 1500;

  let course = {
    name: "Técnico de Produtos Multimédia",
    hours: 1500,
    responsible: "Cristina",
    students: ["Luis", "Vanessa", "Felisberto"],
  };

  // for(let i=0; i<course.students.length; i++){
  //   alert('o/a estudante é '+course.students[i]);

  // }
  for (let element of course.students) {
    alert("o/a estudante é " + element);
  }

  alert("o nome do curso é " + course.name);
  alert("o curso tem " + course.hours + "h");
  alert("o/a responsável do curso é " + course.responsible);

  let userEdit = prompt("pretende alterar as horas? s/n");
  if (userEdit == "s") {
    let userHours = prompt("quais são as novas horas?");
    course.hours = userHours;
  }
  alert("o curso tem " + course.hours + "h");
  alert("o primeiro aluno a ser inscrito foi o " + course.students[0]);
}

function yourAge(){

  let myUserAge = prompt('Qual é a tua idade?');
  age(myUserAge);

}