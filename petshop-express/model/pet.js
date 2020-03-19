let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPets = () => {
  let conteudo = "<h1>Petshop maneiro da DH</h1><ul>";
  for (let pet of pets) {
    conteudo += `<li>${pet.nome}</li>`;
  }
  conteudo += "</ul>";
  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPets, adicionarPet, buscarPet };
