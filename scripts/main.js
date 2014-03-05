/**
 * Created by 218012662 on 3/4/14.
 */



function scrollNext(iter) {
    this.iter = iter;

    if (iter == 1) {
        window.scrollTo(0, 625);
    } else window.scrollTo(0, 750);
    return false;
}
