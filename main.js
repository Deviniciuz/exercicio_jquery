$(document).ready(function(){
    console.log($('form button'));

    $('.lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });

    $('.lista-tarefa-topo').on('submit', function(event) {
        event.preventDefault();

        const novaTarefa = $('#lista-tarefa').val();

        $('#minha-lista').append('<li>' + novaTarefa + '</li>');

        $('#lista-tarefa').val('');
    });
});