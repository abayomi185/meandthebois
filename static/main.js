
let viewportWidth = ($(window).width() * 0.9);
let viewportHeight = ($(window).height() / 1.5);

$(window).on('resize', function(){
    viewportWidth = ($(window).width() * 0.9);
    viewportHeight = ($(window).height() / 1.5);
});

function getQueryString() {
    var queryStringKeyValue = window.parent.location.search.replace('?', '').split('&');
    var qsJsonObject = {};
    if (queryStringKeyValue != '') {
        for (i = 0; i < queryStringKeyValue.length; i++) {
            qsJsonObject[queryStringKeyValue[i].split('=')[0]] = queryStringKeyValue[i].split('=')[1];
        }
    }
    return qsJsonObject;
}

var options = {
    width: viewportWidth,
    height: viewportHeight,
    video: "624030538",
    theme: "dark",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: [getQueryString.name]
};

var player = new Twitch.Player("<player div ID>", options);
player.setVolume(0.5);