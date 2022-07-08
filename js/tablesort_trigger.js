
Backdrop.behaviors.attachMyTablesort = {
  attach: function (context, settings) {

    // Retrieve the setting sent by the module. 
    let table_id = settings.tablesort_poc.table_id;

    // Trigger/attach the tablesort behavior to the table.
    // This is the most basic setting. See the original library for more options.
    new Tablesort(document.getElementById(table_id));
  }
}
