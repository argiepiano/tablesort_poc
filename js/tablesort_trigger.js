(function ($) {
  Backdrop.behaviors.attachMyTablesort = {
    attach: function (context, settings) {
      new Tablesort(document.getElementById('table-tablesort'));
    }
  }
})(jQuery);