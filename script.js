$(function(){
    $("form").submit(function( event ) {

        event.preventDefault();

        let height = $("#height").val()
        let weight = $('#weight').val()

        const imc = (weight / ((height*height)/10000))
        console.log(imc)

        let results =  $("#results")
        results.text(imc.toFixed(2))

        if(imc<18.6 || imc>24.9){
            results.css("color","red");
        }else{
            results.css("color","green");
        }
    })
  })