$( function () {
    const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/random";
    const GIPHY_API_KEY = "PZOC6JcBSsuGNg71Ct9IsBrQ7sBRv7jK";
    $.getJSON( GIPHY_API_URL, { "api_key": GIPHY_API_KEY, "tag": "trash", "rating": "g" }, function( response ) {
        const data = response.data;
        let giphy = $("<img />", {
            "src": data.images.original.url,
            "alt": data.title
        });
        $("#gif").append(giphy);
    });
});