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
      _number = '%26numrec%3D50',
      _format = '%26format%3Dxml%26protect%3Dno%26removeehis%3D1%26pl%3D1%26smode%3D%26forcehttp%3D',
      _proxy = '%26proxy%3D',
      _covers, _scroll, _scrollSpeed, _autoScroll, _dots;

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

    var url = _root + _db + _number + _format + _proxy + '%26rcounturl%3D&h=&settings=' + _covers + ',' + _scroll + ',' +_autoScroll + ',' + _scrollSpeed + ',' + _dots;
    return url;

  }

  /**
   * Number of covers to show within a single view.
   *
   * @string number
   */
  function _setCovers( number ) {
    _covers = ( number ? number : '5' );
  }

  /**
   * Determines how many magazines scroll at
   * a given time.
   *
   * @string number
   */
  function _setScroll( number ) {
    _scroll = ( number ? number : '5' );
  }

  /**
   * Disable or enable autoscroll.
   */
  function _setAutoScroll( boolean ) {
    _autoScroll = ( boolean ? booean : '0' );
  }

  function _setScrollSpeed( milliseconds ) {
    _scrollSpeed = ( milliseconds ? milliseconds : '0' );
  }

  function _setDots( boolean ) {
    _dots = ( boolean ? boolean : '0' );
  }

  function _setProxy( url ) {
    _proxy = ( url ? '%26proxy%3D' + url : _proxy );
  }

  function init( selector, options ) {
    _setProxy();
    _setCovers();
    _setScroll();
    _setAutoScroll();
    _setScrollSpeed();
    _setDots();
    _createIframe( selector );
  }

  return {
    init : init
  }

})();
