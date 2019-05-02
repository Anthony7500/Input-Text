$('.button').on("click", function(){
    var text = $('#textInput').val();
    if(text){
    $('#tasks').append('<p>' + text + '</p>');
    $('#textInput').val('');
    }
});