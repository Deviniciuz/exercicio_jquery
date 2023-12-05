$(document).ready(function(){
    console.log($('form button')); 

    $('form').on('submit', function(e){
    e.preventDefault();
    const listaTarefa = $('lista-tarefa').val();
    const novoItem = $('<li></li>');

    $('<form="${listaTarefa}" />').appendTo(novoItem);

    $(``).appendTo(novoItem);
    

    $(novoItem).appendTo('ul');
    })
})