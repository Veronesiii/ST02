const cardapioModel = require("../model/Cardapio");
const cardapioController = {
    index: (req, res) => {
        res.send(cardapioModel.listarCardapio());
    },
    buscar: (req, res) => {
        let nome = req.params.nome
        let cardapio = cardapioModel.buscarCardapio(nome)
        if(cardapio.length > 0) {
            res.send(`${cardapio.length}`);
        } else {
            res.send(`Não achamos o cardapio`);
        }
    }
}

module.exports= cardapioController;
