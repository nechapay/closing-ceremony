;
Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1));
        var d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
};

window.addEventListener('load', function (e) {
    $('#start').on('click', function () {
        $('.place').addClass('in');
        $(this).off('click');
        var el = document.documentElement,
            rfs = el.requestFullscreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
                || el.msRequestFullscreen
        ;

        rfs.call(el);
        playAudio('audioGimn');
        $(this).addClass('hide');
    });
});

var HEADER = 'Первенство ВС РФ по гандболу<br> среди воспитанников ДОО МОРФ<br>октябрь 2018г.';

function playAudio(audio, options) {
    options = options || {};
    var a = document.getElementById(audio);
    //a.playbackRate = options.speed || 1;

    // if(a.currentTime)
    //     a.currentTime = 0;
    $(a).off();

    var onEnded = function (e) {

    };

    a.play();
    a.addEventListener('ended', onEnded);
}