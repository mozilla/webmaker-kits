(function webmakerKits( window, document ) {
  'use strict';

  // ensure we have the makeapi-client for anything magic we want to do
  if ( !window.Make ) {
    var script = document.createElement( 'script' );
    script.src = '//webmaker.org/bower_components/makeapi-client/src/make-api.js';
    script.onload = function() {
      webmakerKits( window, document );
    };
    document.head.appendChild( script );

    return;
  }

  /*
   * convert simple list into checklist when it has the `.checklist` class
   */
  var checklist = document.querySelectorAll( '.checklist li' );
  for ( var i = 0, j = checklist.length; i < j; i++ ) {
    checklist[i].innerHTML = '<input id="r' + i + '" type="checkbox"><label for="r' + i + '"></label> ' + checklist[i].innerHTML;
  }

  /*
   * add tags to the kit based on what tags for it are in the makeapi
   */
  // this should only really be used once, so lets
  var tagsSection = document.querySelector( '#magicTags' );
  if ( tagsSection ) {
    var makeapi = new window.Make({
      apiURL: 'https://makeapi.webmaker.org'
    });

    // when on published location w/ makeapi data guaranteed.
    if ( window.location.toString().match( /\.makes\.org\/thimble\// ) ) {
      var url = window.location.href;
      if( url.slice(-1) === '_' ) {
        url = url.slice( 0, -1 );
      }

      makeapi.url( url ).then( function( err, makes ) {
        if( err ) {
          console.log( err );
          tagsSection.parentNode.removeChild( tagsSection );
          return;
        }

        if( makes.length !== 1 ) {
          console.log( 'make not found' );
          tagsSection.parentNode.removeChild( tagsSection );
          return;
        }

        var make = makes[0];
        var tagList = '<ul>\n';

        make.rawTags.forEach( function( tag ){
          tagList += '<li><a href="https://webmaker.org/t/' + tag + '" target="_blank">#' + tag + '</a></li>\n';
        });

        tagList += '</ul>\n';

        tagsSection.innerHTML += tagList;
        tagsSection.querySelector( '#magicNotice' ).parentNode.removeChild( tagsSection.querySelector( '#magicNotice' ) );
      });
    }

    // not published OR in editor
    else if( !window.location.toString().match( /^https?:\/\/mozillathimblelivepreview\.net\// ) ) {
      tagsSection.parentNode.removeChild( tagsSection );
    }
  }

})( this, this.document );
