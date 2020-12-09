function abreLink(){
	open();
}

const titulo = document.getElementById("titulo-post");
const autor = document.getElementById("autor-post");
const conteudo = document.getElementById("conteudo-post");
const url = document.getElementById("url")
const foto = document.getElementById("foto")

function upload() {
    const title = titulo.value;
    const author = autor.value;
    const text = conteudo.value;
    const picture = url.value;
    foto.innerHTML = `<img id="foto"  src="${picture}">` 
    /*if( url.value.includes('jpg') === false || url.value.includes('png') === false){
        alert('Foto não válida. Favor inserir foto com extensão jpg ou png')
    }*/

    console.log(title);
    console.log(author);
    console.log(text);
    console.log(url);

    }
   

/*
const dizeres = document.getElementById('tarefa');
const diaSemana = document.getElementById('dias-semana');
    
    function criaTarefa() {
    let tarefaValor = dizeres.value;
    let day = diaSemana.value;
    let addTarefa = document.getElementById(day);
    
    if(tarefaValor) {
        addTarefa.innerHTML += tarefaValor;
    }else {
        alert("Digite tarefa a realizar");
    }
    dizeres.value = '';
}
*/
    