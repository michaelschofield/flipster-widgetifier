/**
 * # Flipster Widgetifier
 *
 * A simple wrapper to help libraries place and control
 * their rad Flipster widget.
 */

'use strict';

var flipster = (function(){

  var _root = 'https://widgets.ebscohost.com/prod/encryptedkey/eit/eit.php?t=themes%2Fflipster_carousel_slick%2Fxsl.php%3Fcss%3D%2F%2Fimageserver.ebscohost.com%2Fbranding%2FFlipsterCarousel%2Fcss%2Fslick-app-theme_big.css&q=http%3A%2F%2Fwidgets.ebscohost.com%2Fprod%2Fencryptedkey%2Fehis%2Fwidget.php%3Fprof%3DYOUR-STUFF-HERE',
      _query,
      _db = '%26db%3Deon',
      _format = '%26format%3Dxml%26protect%3Dno%26removeehis%3D1%26pl%3D1%26smode%3D%26forcehttp%3D',
      _proxy = '%26proxy%3D',
      settings = {
        'auto' : '0', // whether the carousel auto-plays. 0 = false, 1 = true
        'dots' : '0',
        'count'  : '50', // total number of records to be fetched
        'covers' : '5', // how many covers show at a glance
        'scroll' : '5', // covers to scroll past at a given time
        'scrollSpeed' : '0' // auto-scroll speed, if enabled, in milliseconds
      };

  /**
   * Creates and appends the Flipster <iframe> to either
   * the body of the document or a selector.
   *
   * @string selector
   */
  function _createIframe( selector ) {
    var element = selector || 'body',
        iframe  = document.createElement( 'iframe' );

    iframe.setAttribute( 'src', _getWidgetUrl() );
    document.querySelector( element ).appendChild( iframe );
  }

  /**
   * Constructs the url to pass to the Flipster iframe,
   * based off any of the groovy parameters we determine.
   */
  function _getWidgetUrl() {

    var url = _root + _db + '%26numrec%3D' + settings.count + _format + _proxy + '%26rcounturl%3D&h=&settings=' + settings.covers + ',' + settings.scroll + ',' + settings.auto + ',' + settings.scrollSpeed + ',' + settings.dots;
    return url;

  }


  function _setProxy( url ) {
    _proxy = ( url ? '%26proxy%3D' + url : _proxy );
  }

  /**
   * @array issns
   */
  function _setQuery( issns ) {
    // + '%252BAND%252B(IS%252B0015-6914%252BOR%252BIS%252B0035-791X)'
  }

  function init( selector, options ) {

    for ( var property in options ) {
      if ( options.hasOwnProperty( property ) ) {
        settings[ property ] = options[ property ];
      }
    }

    _setProxy();
    _createIframe( selector );
  }

  return {
    init : init
  }

})();
