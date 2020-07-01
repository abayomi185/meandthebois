
let viewportWidth = ($(window).width() * 0.9);
let viewportHeight = ($(window).height() / 1.5);

$(window).on('resize', function(){
    viewportWidth = ($(window).width() * 0.9);
    viewportHeight = ($(window).height() / 1.5);
});

var options = {
    width: viewportWidth,
    height: viewportHeight,
    video: "624030538",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["meandthebois.club", "yomitosh.com/meandthebois"]
};

var player = new Twitch.Player("<player div ID>", options);
player.setVolume(0.5);