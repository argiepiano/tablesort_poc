# Tablesort Proof of Concept

A simple Bacdrop CMS module to use as proof of concept on how to use tristen/tablesort with Backdrop. 

JS Library from:
https://github.com/tristen/tablesort

## How to use
1. Enable the module
2. Create a node
3. In the node edit form, edit the body field
4. Be SURE to use "Raw HTML" formatting.
5. Paste the following table

```html
<table id="table-tablesort">
  <thead>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  </thead>
 <tbody>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$10</td>
  </tr>
  <tr>
    <td>March</td>
    <td>$500</td>
  </tr>
</tbody>
</table>
```

6. Visit the node
7. Click the header of any column to sort it

Currently this is "hard-coded" but it should provide clues on how to customize or expand it.
