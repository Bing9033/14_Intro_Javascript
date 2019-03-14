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
var button2 = d3.select("#reset-btn")

// filter data with desired date
button.on("click", function(){
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    newData = tableData.filter(function(sighting){
      if(
        (sighting.datetime===inputDate.property("value")||inputDate.property("value")==="") &&
        (sighting.city===inputCity.property("value")||inputCity.property("value")==="") &&
        (sighting.state===inputState.property("value")||inputState.property("value")==="") &&
        (sighting.country===inputCountry.property("value")||inputCountry.property("value")==="") &&
        (sighting.shape===inputShape.property("value")||inputShape.property("value")==="")
      ){
        return true;
      }
      return false;
    }) ;
    
    tbody.html("");
    displayData(newData);
    
})

button2.on("click",function() {
  d3.event.preventDefault();
  tbody.html("");
  displayData(tableData);
})





