(function ($) {
  Backdrop.behaviors.attachMyTablesort = {
    attach: function (context, settings) {
      // This is the most basic setting (see the tablesort github for more options).

      // This is hard-coded to look for a table with ID: 'table-tablesort'.

      // Change this ID if you so desire, or better yet, pass the ID to the browser by using 
      // the 'setting' key in the $options parameter of backdrop_add_js. 
      // To learn how to pass settings see:
      // https://www.drupal.org/docs/7/api/javascript-api/managing-javascript#settings-javascript
      // 
      new Tablesort(document.getElementById('table-tablesort'));
    }
  }
})(jQuery);