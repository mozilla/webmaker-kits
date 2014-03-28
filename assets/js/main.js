// wicked closure pattern w/ hat tip to Paul Irish [source](https://gist.github.com/paulirish/315916)
(function( window, document, undefined ){
  'use strict';

  /**
   * convert simple list into checklist when it has the `.checklist` class
   */
  var checklist = document.querySelectorAll( '.checklist li' );
    for( var i = 0, j = checklist.length; i < j; i++ ){
      checklist[i].innerHTML = '<input id="r' + i + '" type="checkbox"><label for="r' + i + '"></label> ' + checklist[ i ].innerHTML;
    }
})( this, this.document );
