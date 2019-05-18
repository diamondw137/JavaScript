// from data.js
var data = data 
// D3 to select the tbody to add the table
var tbody = d3.select("tbody");

console.log(data);

// loop through JSON of data
data.forEach(function(UFOSightings){
    console.log(UFOSightings);

// appending to table --tr 1ST THEN TD
    var row = tbody.append("tr");

// add the entries

    Object.values(UFOSightings).forEach(function(value){
    console.log(value);

// append value to each row -- for td

var cell = row.append("td");
cell.text(value);
    });
});
// create submit button

var submit = d3.select("#submit");

submit.on("click", function() {
    // prevent page from refreshing
    d3.event.preventDefault();

    // input datetime
    var inputElement = d3.select("#form-control");

    // datetime value
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(datetime);
  
    // creation of filter
    var filteredData = data.filter(UFOSightings => data.datetime === inputValue);

    console.log(filteredData);
})

