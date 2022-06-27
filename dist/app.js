$( function () {
    $.getJSON( "https://api.guillermoandraefisher.com/jersey", function( response ) {
        const data = response.data;
        let giphy = $("<img />", data);
        $("#gif").append(giphy);
    });
});
