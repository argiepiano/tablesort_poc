(function ($) {
  Backdrop.behaviors.attachMyTablesort = {
    attach: function (context, settings) {
      console.log('triggered');
      console.log(document.getElementById('table-tablesort'));
      new Tablesort(document.getElementById('table-tablesort'));
    }
  }
})(jQuery);