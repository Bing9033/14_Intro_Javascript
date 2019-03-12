// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(tableData);

// // Step 1: Loop Through `data` and console.log each record object

function displayData(tableData){
    tableData.forEach(function(record){
      // console.log(record);
      var row = tbody.append("tr");

      Object.entries(record).forEach(function([key, value]){
          var cell = row.append("td");
          cell.text(value);
        });
})};

displayData(tableData);


var button = d3.select("#filter-btn");

// filter data with desired date
button.on("click", function(){
    d3.event.preventDefault();
    var inputText = d3.select("#datetime");
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"));
    tbody.html("");
    displayData(new_table);

})






