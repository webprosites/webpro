$(function () {

    $('#budget-form').validator();

    $('#budget-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "budget.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    
                    if (messageAlert && messageText) {
                        $('#budget-form').find('.messages').html(alertBox);
                        $('#budget-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});