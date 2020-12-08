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

    
 


    


