const cardapios = [{
    nome: "X-Burger",
    preco: 10,
    categoria: "Carne"
    
},
{
    nome: "Salada",
    preco: 8,
    categoria: "Vegano"
},
{
    nome: "Refrigerante",
    preco: 5,
    categoria: "Bebida"
}]

const listarCardapio = () => {
    let lista = "";
    for (let item of cardapios){
      lista += `
      Item: ${item.nome} <br>
      Preço: ${item.preco} <br>
      Categoria: ${item.categoria} <br>` 
    }

    return lista;
}

const buscarCardapio = (nome) =>{
    const busca = cardapios.filter((cardapio)=>{
        return cardapio.nome == nome;
    });
    return busca;
}



module.exports = {
    listarCardapio,
    buscarCardapio
}