// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(tableData);

// // Step 1: Loop Through `data` and console.log each record object
tableData.forEach(function(record){
    // console.log(record);
    var row = tbody.append("tr");

    Object.entries(record).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});






