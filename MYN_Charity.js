// console.log("script loaded");

// email-id
var input = $('#name-id');
var msg = $('#name-alert');
// console.log(msg);

input.change(function(){
	var length = input.val().length;

	if(length < 4){
		msg.removeClass("hidden");
	} else {
		msg.addClass("hidden");
	}
});

// checkbox on PDPA terms of agreement
var cb = $('#cb-id');
var submit = $('#submit-id');

cb.change(function(){
    if(cb.prob('checked')){
        submit.prop('disabled', false);
    } else {
        submit.prop('disabled', true);
    }
});

// $(function () {
//     // on submitting the form
//     $('form').submit(function (event) {
//         // prevent the default action of reloading the page
//         event.preventDefault();

//         var sendData = {};
//         $(event.target.nodeName + ' :input').each(function(){
//             sendData[this.name] = $(this).val();
//         });

//         var posting = $.ajax({
//             type: 'POST',
//             url: $(event.target.nodeName).prop('action'),
//             data: sendData
//         });

//         posting.done(function (response) {
//             console.log(response);
            
//             if($('#alert-id').length > 0){
//                 $('#alert-id').prop('hidden', false);
//             } else {
//                 $('form').append('<p>Thank you</p>')
//             }
            
//             $('form :input').each(function(){
//                 $(this).val('');
//             })
//         });
//         posting.fail(function (response) {
//             console.log(response);
//         });
//     });

// RESPONSE ALERT WINDOW-------------------------------------------------------------------------------
/* include the following HTML to use:
<div class="form-group">
    <button type="submit" class="btn btn-default my-btn form-control" id="submit-id">submit</button>                   
    <div class="alert alert-danger alert-dismissible fade in" hidden id="alert-id">
        <button type="button" class="close" id="close-id"><span>&times;</span></button>
        Thank you! I will get in touch.
    </div>
</div>
*/

    // on clicking the X button
//     $('#close-id').click(function(){
//         // hide the alert panel by adding the hidden property
//         $('#alert-id').prop('hidden', true);
//         // optionally reload the webpage
//         location.reload();
//     });

// });

