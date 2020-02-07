let alunos = [
  "Edson Menezes Pereira",
  "Guilherme Rafael Silva",
  "Bruno Rafael",
  "Gustavo Nogueira"
];

let alunosNomePequeno = alunos.filter(aluno => {
  return aluno.length <= 17;
});

let alunosComSobrenome = alunos.map(aluno => {
  return aluno + " Souza";
});

let idades = [25, 19, 24, 27];

let totalIdade = idades.reduce((acumulador, idade) => {
  return acumulador + idade;
});

console.log(totalIdade);
// console.log(idades);
