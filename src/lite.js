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
define(function() {

    /**
     * MatchMedia
     * 
     * @type {Function}
     */
    var matchMedia = window.matchMedia || (function() {
        
        // For browsers that support matchMedium api
        // Android 2.3 use `window.media`
        var styleMedia = window.styleMedia || window.media;

        return function( media ) {
            return {
                matches: styleMedia.matchMedium( media || 'all' ),
                media: media || 'all'
            };
        };
    })();

    return matchMedia;
});
