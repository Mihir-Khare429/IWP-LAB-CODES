$(document).ready(function(){
    $('#green').mouseenter(function(){
        $(this).mouseleave(function(){
            $('.container-button').css("background-color","white")
        })
        $('.container-button').css("background-color","green")
        $('#green').css("background-color","green")
    })
    $('#blue').mouseenter(function(){
        $(this).mouseleave(function(){
            $('.container-button').css("background-color","white")
        })
        $('.container-button').css("background-color","blue")
        $('#blue').css("background-color","blue")
    })
    $('#red').mouseenter(function(){
        $(this).mouseleave(function(){
            $('.container-button').css("background-color","white")
        })
        $('.container-button').css("background-color","red")
        $('#red').css("background-color","red")
    })
    $('#ext-button').click(function(){
        var text = $('.list-extract').text()
        $('#ext').text(text)
    })
    $('#search-button').click(function(){
        var search = $('#field').val()
        console.log(search)
        if(search.length == 0){
            alert('Empty Search Field')
        }
        else{
            var flag =0 
            $('.list-extract li').each(function(i, li) {
                var product = $(li);  
                if(product[0].innerText == search){
                    product.css('font-weight','bolder')
                    product.css('color','green')
                    flag=0;
                    return flag;
                }
                else{
                    
                }
              });
        }
    })
    $('#ch-box').click(function(){
        if($('#ch-box')[0].checked){
            $('#check').prop('disabled',false)
        }else{
            $('#check').prop('disabled',true)
        }
    })
    $('#area').click(function(event){
        if(event.button == 0){
            alert('Left Click')
        }
        else if(event.button == 2){
            alert('Right Click')
        }
    })
    $('#add').click(function(){
        $('#prp').addClass("test")
    })
    $('#remove').click(function(){
        $('#prp').removeClass("test")
    })
})