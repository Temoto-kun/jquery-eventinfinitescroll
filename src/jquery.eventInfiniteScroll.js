/**
 * @author Temoto-kun <kiiroifuriku@hotmail.com>
 * Written: 16-06-13 14:51
 */

(function () {
    if (!jQuery) {
        throw new Error('jquery.eventInfiniteScroll requires jQuery');
    }

    function InfiniteScroll(options) {
        var $el,
            $boundary,
            newState = false,
            oldState,
            xhr;

        $el = jQuery(options.element);
        $boundary = $el.find(options.boundarySelector);

        $el
            .on('scroll', function () {
                newState = $el.scrollTop() + $el.innerHeight() > $el.prop('scrollHeight') - $boundary.innerHeight();

                // we need to check the state so that it doesn't repeat the XHR request when we scroll just
                // a wee bit and the boundary is still visible.

                if (oldState !== newState && newState) {

                    if (!!xhr){
                        // avoid duplication of XHR requests
                        xhr.abort();
                    }

                    xhr = options.request();
                    $el.trigger('infinitescroll', xhr);
                }

                oldState = newState;
            });
    }

    jQuery.fn.infiniteScroll = function infiniteScroll(options){
        this.each(function (i, el){
            options.element = el;
            new InfiniteScroll(options);
        });
    };
})();
