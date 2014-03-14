$(function() {
    var searchMsg = "Enter gene name or just go..."

    $("#home-search-string").focus( function() {
        if( $(this).val() == searchMsg ) {
            $(this).val("");
            $(this).removeClass("greyed-out-text");
        }
    });

    $("#home-search-string").focusout( function() {
        if( $(this).val() == "" ) {
            $(this).val(searchMsg);
            $(this).addClass("greyed-out-text");
        }
    });

    $("#home-search-string").val(searchMsg);

    $("#home-search-button").click( function() {
       $(this).submit();
    });

    console.log("pages_fn.js executed...");
})

