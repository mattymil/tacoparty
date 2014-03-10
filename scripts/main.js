/**
 * Created by 218012662 on 3/4/14.
 */



function scrollNext(iter) {
    this.iter = iter;
    hideELs();
    if (iter == 1) {
        $('#veil_title').ScrollTo({
            duration: 2000,
            easing: 'swing',
            callback: function () {
                showMe();
            }
        });
    } else if (iter == 2) {
        $('#rsvp').ScrollTo({
            duration: 2000,
            easing: 'swing',
            callback: function () {
                showMe();
            }
        });
    } else
        alert("you didn't give me the right value");
}

function showMe() {
    $(function () {
        $("#slides").slidesjs({
            width: 600,
            height: 599,

            play: {
                active: false,
                effect: "slide",
                interval: 4000,
                auto: true,
                swap: false,
                pauseOnHover: false,
                restartDelay: 2500
            }


        });
    });
}

function hideELs() {
    $("#hider").removeClass("hidden");
}
