// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    
   

    $('.featured-item a').addClass('btn btn-dark stretch-link');
   

    $('.nav-modal-open').on('click', function(e){

        e.preventDefault()

        let elem = $(this).attr('rel');

        $('.modal-body').html ($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()

    })

    $(document).ready(function() {

    
        // Seleciona todos os botões com a classe "botao"
        $(".comprar").click(function(e) {

            e.preventDefault();

          // Coloque sua lógica aqui para os botões
          alert("Pagina em construção");
        });
      });

    
   

    $('h6').append("25€")
    $('h6').css({'color':'black'})




    $('body').on('submit','.modal-body .form', function(e){

        e.preventDefault();

        const inputnome = $('#nome')
        const inputemail = $('#email')

        if (inputnome.val() == ' '){

            console.log('os campos obrigatórios estão vazios')
            
            inputnome.addClass('invalid')

             return false

        }

        if (inputemail.val() == ' '){

            console.log('os campos obrigatórios estão vazios')
            inputemail.addClass('invalid')

            return false

        }

    })


    function validate(elem){
        if(elem.val()==''){

            console.log('o campo de '+ elem.attr('nome')+ 'é obrigatório')

            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false

        } 

        else
        {elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
        }
    }



    $('body').on('blur','#nome',function(){
        validate($(this))
    })


    $('body').on('blur','#email',function(){
        validate($(this))
    })

    $('body').on('focus','#date',function(){
        $(this).datepicker();
    })

    $('body').on('blur','#date',function(){
        validate($(this))
        $('#date').mask('00/00/0000');
    })

    $('body').on('blur','#cep',function(){
        validate($(this))
        $('#cep').mask('00000-000');
    })

    $('body').on('blur','#phone',function(){
        validate($(this))
        $('#phone').mask('0000000-0000');
    })

    $('body').on('blur','#cpf',function(){
        validate($(this))
        $('#cpf').mask('000.000.000-00');
    })

    $('#date').mask('00/00/0000');
    $('#time').mask('00:00:00');
    $('#cep').mask('00000-000');
    $('#phone').mask('0000-0000');
    $('#cpf').mask('000.000.000-00');

    /* Modal das camisas*/
    
    $('.featured-item').on('click',function(e){

        elem
    })



})
