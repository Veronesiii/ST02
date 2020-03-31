const path = require('path');
const fs = require('fs');

const homeController = {
  index: (req, res) => {
    let servicos = [
      {nome: 'Dev full stack', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'},
      {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
      {nome: 'Suporte tecnico', imagem: '/imagens/undraw_dev_focus.svg'},
      {nome: 'Data Science', imagem: '/imagens/undraw_mobile_apps.svg'},
    ];

    let banners = [
      '/imagens/banner2.jpg',
      '/imagens/banner3.jpg',
      '/imagens/banner4.jpg',
      '/imagens/banner.jpg',
    ];

    res.render('index', { title: 'Home', listaServicos: servicos, listaBanners: banners });
  },
  contato: (req,res)=>{

    let {nome, email, mensagem} =  req.body;
    // novo conteudo
    let infoContato = { nome, email, mensagem };
    // caminho e nome do arquivo
    let fileContato = path.join('db', 'contatos.json');
    
    let listaContato = [];

    if (fs.existsSync(fileContato)){
      // trazer informações do arquivo
      listaContato = fs.readFileSync(fileContato, {encoding: 'utf-8'});
      listaContato = JSON.parse(listaContato);
    }
    
    //cria um array com uma posição
    listaContato.push(infoContato);
    //converter conteudo para json
    listaContato = JSON.stringify(listaContato);
    //salva informações no arquivo
    fs.writeFileSync(fileContato, listaContato);

    res.render('contato', {nome, email, title: 'Contato'});

  },
  newsletter: (req, res) => {
    let {email} = req.query;
    
    // POST - req.body
    // GET - req.query
    // GET /:email - req.params

    res.render('newsletter', {email, title: 'Newsletter'});
  }
};

module.exports = homeController;
