(function(window, document) {
  'use strict';

  /**
   * convert simple list into checklist when it has the `.checklist` class
   */
  var checklist = document.querySelectorAll('.checklist li');
  for (var i = 0, j = checklist.length; i < j; i++) {
    checklist[i].innerHTML = '<input id="r' + i + '" type="checkbox"><label for="r' + i + '"></label> ' + checklist[i].innerHTML;
  }

})(this, this.document);
