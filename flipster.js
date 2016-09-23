/**
 * # Flipster Widgetifier
 *
 * A simple wrapper to help libraries place and control
 * their rad Flipster widget.
 */

'use strict';

var flipster = (function(){

  var _widget = 'https://widgets.ebscohost.com/?YOUR-KEY-HERE&settings=',
      _covers, _scroll, _scrollSpeed, _autoScroll, _dots;

  function _createIframe( selector ) {
    var element = selector || 'body',
        iframe  = document.createElement( 'iframe' );

    iframe.setAttribute( 'src', getWidgetUrl() );
    document.querySelector( element ).appendChild( iframe );

  }

  function _setCovers( number ) {
    if ( !number ) {
      _covers = '5';
    }
  }
  function _setScroll( number ) {
    if ( !number ) {
      _scroll = '1';
    }
  }

  function _setAutoScroll( boolean ) {
    if ( !boolean ) {
      _autoScroll = '0';
    }
  }

  function _setScrollSpeed( milliseconds ) {
    if ( !milliseconds ) {
      _scrollSpeed = '0';
    }
  }
  function _setDots( boolean ) {
    if ( !boolean ) {
      _dots = '0';
    }
  }

  function getWidgetUrl() {

    var url = _widget + _covers + ',' + _scroll + ',' +_autoScroll + ',' + _scrollSpeed + ',' + _dots;
    return url;

  }

  function init( selector ) {
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
