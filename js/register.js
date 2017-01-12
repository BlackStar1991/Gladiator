window.onload = function () {

$('#trigger_link').click(function(e){
    e.preventDefault();
    $('#my_file').trigger('click');
});




}