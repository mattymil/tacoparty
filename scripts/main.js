/**
 * Created by 218012662 on 3/4/14.
 */



function scrollNext(iter) {
    this.iter = iter;

    if (iter == 1) {
        $('#veil_message_stopper').ScrollTo({
            duration: 2000,
            easing: 'swing',
            callback: function () {
                alert("callback executed");
            }
        });
    } else
        alert("you didn't give me the right value");
}


