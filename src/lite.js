/**
 * @file matchMedia
 * @author Firede[firede@firede.us]
 *
 * @see http://dev.w3.org/csswg/cssom-view/#dom-window-matchmedia
 *      https://github.com/paulirish/matchMedia.js
 */

/**
 * matchMedia() polyfill - Test a CSS media type/query in JS.
 *
 * Authors & copyright (c) 2012:
 * Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
 */

define(function () {

    // native matchMedia is buggy in MIUI (Android 4.1.2 version) browsers,
    // except Androd Chrome.
    var isAndroid = navigator.userAgent.indexOf('Android') > 0;
    var isChrome = /Chrome\/[0-9]+/.test(navigator.userAgent);

    if (window.matchMedia && !(isAndroid && !isChrome)) {
        return window.matchMedia;
    }

    /**
     * MatchMedia
     *
     * @type {Function}
     */
    var matchMedia = (function () {

        // For browsers that support matchMedium api
        // Android 2.3 use `window.media`
        var styleMedia = window.styleMedia || window.media;

        return function (media) {
            return {
                matches: styleMedia.matchMedium(media || 'all'),
                media: media || 'all'
            };
        };
    })();

    return matchMedia;
});
