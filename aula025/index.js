// criar um objeto postagem Constructor fuction


//Criar objeto postagem

//titulo,mensnagem,autor,visualizaçao,comentarios,estarAovivo

function Postagem(titulo,mensagem,autor){
      this.titulo = titulo,
      this.mensagem = mensagem,
      this.autor = autor,
      this.visualizacoes = 0,
      this.comentarios = [],
      this.estaAovivo = false
}

let postagem = new Postagem("a","b","c")
console.log(Postagem);