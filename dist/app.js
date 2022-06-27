$( function () {
    $.getJSON( "https://api.guillermoandraefisher.com/jersey", function( response ) {
        const data = response.data;
        let giphy = $("<img />", {
            "src": data.images.original.url,
            "alt": data.title
        });
        $("#gif").append(giphy);
    });
});
