const path = require('path');
const fs = require('fs');

const adminController = {
  index: (req, res) => {
    
    let fileNewsletter = path.join('db', 'newsletter.json');
    let listaNewsletter = fs.readFileSync(fileNewsletter, {encoding: "utf-8"});
    listaNewsletter = JSON.parse(listaNewsletter);
    
    let fileContato = path.join('db', 'contatos.json');
    let listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
    listaContato = JSON.parse(listaContato);


    res.render('admin', { title: 'Painel de controle', listaNewsletter, listaContato });
  }
};

module.exports = adminController;
