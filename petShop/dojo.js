const alunosDaEscola = [
    {
        nome: 'Henrique',
        notas: [10, 9.8, 9.6],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 5
    },
    {
        nome: 'Edson',
        notas: [10, 0, 5],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 2

    },
    {
        nome: 'Bruno',
        notas: [10, 9.8, 9.6],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 0
    },
    {
        nome: 'Guilherme',
        notas: [10, 9.8, 9.6],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 0
    },
    {
        nome: 'Carlos',
        notas: [10, 9.8, 9.6],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 0
    },
    {
        nome: 'Lucca',
        notas: [10, 9.8, 9.6],
        cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date()}],
        faltas: 0
    },
];

const calcularMediadoAluno = (aluno) => {
    const media = aluno.notas.reduce((acc, crr ) => {
        return acc + crr;
    })

    return media / aluno.notas.length;
};

const validarCurso = (cursos, nomeDoCurso) => {
    for(let curso of cursos) {
        if(curso.nomeDoCurso == nomeDoCurso){
            return false;
        }
    }
    return true;
}


console.log(calcularMediadoAluno(alunosDaEscola[0]))
const matricularAluno = (aluno, curso) => {
        if(validarCurso(aluno.cursos, curso)) {
    
        let dataAtual = new Date();    
        let cursoMatricula = {nomeDoCurso: curso, dataMatricula: dataAtual};    
            aluno.cursos.push(cursoMatricula);
        }else{
            console.log("Aluno já matriculado!")
        }
};

matricularAluno(alunosDaEscola[0], "Full Stack");
/*console.log(alunosDaEscola[0]);


matricularAluno(alunosDaEscola[0], "Full Stack");
console.log(alunosDaEscola[0]);*/

const buscarAlunos = (nome) => {
    return alunosDaEscola.filter(aluno => {
        return aluno.nome == nome;
    })
}


// console.log(buscarAlunos("Xuxa"))
const darFaltas = (aluno) => {
    aluno.faltas++;
    

}
const alunosAprovados = (aluno) => {
    return aluno.faltas <= 3 && calcularMediadoAluno(aluno)>=7;
}

// darFaltas(alunosDaEscola[0]);
// console.log(alunosDaEscola[0]);

console.log(alunosAprovados(alunosDaEscola[0]));
console.log(alunosAprovados(alunosDaEscola[1]));
console.log(alunosAprovados(alunosDaEscola[2]));

const acontece = (nomeDoCurso) => {
    return alunosDaEscola.filter(aluno => {
      return !validarCurso(aluno.cursos, nomeDoCurso);
    }).length >= 6; 
}

console.log(acontece("Full Stack"));

const listarAlunos = ()=>{
    for(let aluno of alunosDaEscola){
        console.log(`${aluno.nome} 
        ${aluno.cursos.map(curso => {
            return curso.nomeDoCurso;
        })}
        ${aluno.notas}
        ${aluno.faltas}
        ${calcularMediadoAluno(aluno)}
        `);
    }
}

listarAlunos();

