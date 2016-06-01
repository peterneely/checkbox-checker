describe('checker', function() {

  describe('structure', function() {

    it('should receive a jQuery object of HTML to search', function() {
      var checker = new Checker();
      expect(checker.htmlToSearch).toBeDefined();
    });

    it('should be able to check found checkbox labels', function() {
      var checker = new Checker();
      expect(checker.check).toBeDefined();
      expect(_.isFunction(checker.check)).toBeTruthy();
    });
  });

  describe('behavior', function() {
  	var _checker;

    beforeEach(function() {
      _checker = new Checker($.parseHTML(createHtmlString()));
    });

    it('should check only Schema checkboxes when specified', function() {
      var checkboxes = _checker.check(['Schema']);
      expect(checkboxes).toBeDefined();
      expect(checkboxes.length).toEqual(1);
      expect(_.every(checkboxes, shouldBeChecked)).toBeTruthy();
      expect(idFor(checkboxes[0])).toEqual('customfield_11210-1');
    });

    it('should check only Code checkboxes when specified', function() {
      var checkboxes = _checker.check(['Code']);
      expect(checkboxes).toBeDefined();
      expect(checkboxes.length).toEqual(1);
      expect(_.every(checkboxes, shouldBeChecked)).toBeTruthy();
      expect(idFor(checkboxes[0])).toEqual('customfield_11210-2');
    });

    it('should check only Configuration checkboxes when specified', function() {
      var checkboxes = _checker.check(['Configuration']);
      expect(checkboxes).toBeDefined();
      expect(checkboxes.length).toEqual(1);
      expect(_.every(checkboxes, shouldBeChecked)).toBeTruthy();
      expect(idFor(checkboxes[0])).toEqual('customfield_11210-3');
    });

    it('should check only Schema and Code checkboxes when specified', function() {
      var checkboxes = _checker.check(['Schema', 'Code']);
      expect(checkboxes).toBeDefined();
      expect(checkboxes.length).toEqual(2);
      expect(_.every(checkboxes, shouldBeChecked)).toBeTruthy();
    });

    it('should check all checkboxes when specified', function() {
      var checkboxes = _checker.check(['Schema', 'Code', 'Configuration']);
      expect(checkboxes).toBeDefined();
      expect(checkboxes.length).toEqual(3);
      expect(_.every(checkboxes, shouldBeChecked)).toBeTruthy();
    });
    
    it('should not check any checkboxes when given an array of one checkbox label that does not exist', function() {

    });
    
    it('should not check any checkboxes when given an array of two checkbox labels that do not exist', function() {

    });

    it('should not check any checkboxes when given an empty array of checkbox labels', function() {

    });

    it('should not check any checkboxes when given an object of checkbox labels', function() {

    });

    it('should not check any checkboxes when given a string of checkbox labels', function() {

    });

    it('should not check any checkboxes when given null', function() {

    });

    it('should not check any checkboxes when given undefined', function() {

    });

    function createHtmlString() {
      return [
        '<div>',
        '<fieldset class="group">',

        '<legend><span>UX Module</span></legend>',

        '<div class="checkbox">',
        '<input class="checkbox" id="customfield_11210-1" type="checkbox">',
        '<label for="customfield_11210-1">Schema</label>',
        '</div>',

        '<div class="checkbox">',
        '<input class="checkbox" id="customfield_11210-2" type="checkbox">',
        '<label for="customfield_11210-2">Code</label>',
        '</div>',

        '<div class="checkbox">',
        '<input class="checkbox" id="customfield_11210-3" type="checkbox">',
        '<label for="customfield_11210-3">Configuration</label>',
        '</div>',

        '</fieldset>',
        '</div>'
      ].join('\n');
    }

    function idFor(checkbox) {
      return $(checkbox).prop('id');
    }

    function shouldBeChecked(checkbox) {
      return $(checkbox).prop('checked');
    }
  });
});