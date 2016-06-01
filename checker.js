var Checker = (function() {
  'use strict';

  var self;

  function Checker(htmlToSearch) {
    self = this;
    self.htmlToSearch = htmlToSearch ? $(htmlToSearch)[0] : $('html')[0];
  }

  Checker.prototype = {
    constructor: Checker,
    check: check
  };

  return Checker;

  function check(labelsToCheck) {
    var checkboxes = findCheckboxes(findLabels());
    checkAll(checkboxes);
    return checkboxes;

    function checkAll(checkboxes) {
      _.each(checkboxes, function(checkbox) {
        $(checkbox).prop('checked', true);
      })
    }

    function findCheckboxes(labels) {
      var checkboxSelectors = _.map(labels, function(label) {
        return '#' + $(label).prop('for');
      });
      return $(checkboxSelectors.join(', '), self.htmlToSearch);
    }

    function findLabels() {
      var labelSelectors = _.map(labelsToCheck, function(labelToCheck) {
        return '.group label:contains("' + labelToCheck + '")';
      });
      return $(labelSelectors.join(', '), self.htmlToSearch);
    }
  }
})();