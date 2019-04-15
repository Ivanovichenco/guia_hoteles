

$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
      interval: 3000
    });
    $('#contacto').on('show.bs.modal', function (e){
      console.log('El modal se está mostrando');

      $('#contactoBtn').removeClass('btn-outline-success');
      $('#contactoBtn').removeClass('btn-outline-default');
      $('#contactoBtn').prop('disabled', true);

    });
    $('#contacto').on('shown.bs.modal', function (e){
      console.log('El modal se mostró');
    });
    $('#contacto').on('hide.bs.modal', function (e){
      console.log('El modal se está ocultando');

      $('#contactoBtn').removeClass('btn-outline-default');
      $('#contactoBtn').addClass('btn-outline-success');
      $('#contactoBtn').prop('disabled', false);

    });
    $('#contacto').on('hidden.bs.modal', function (e){
      console.log('El modal se ocultó');
    });
});


