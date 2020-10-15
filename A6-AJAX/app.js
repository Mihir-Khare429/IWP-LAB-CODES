$(document).ready(function(){
    $('#abc').click(function(event){
        event.preventDefault()
        $.ajax({
            url:'http://localhost:3000/prize',
            method:'POST',
            dataType:'json',
            data:{prize : $('#text-num').val()},
            complete:function(data){
                $('#mon').text(data.responseJSON.prize)
            },
            error:function(err){
                console.log(err)
            }
        })
    })
    
})