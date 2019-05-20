// from data.js
var alienData = data; 
// D3 to select the tbody to add the table
var tbody = d3.select("tbody");
function buildtable(){
    alienData.forEach(function(UFOSightings){
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
};

buildtable();
// create submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    // prevent page from refreshing
    d3.event.preventDefault();

    // reset table
    d3.select("tbody").html("");

    // input datetime
    var inputElement = d3.select("#datetime");

    // datetime value
    var inputValue = inputElement.property("value");
    console.log(inputValue);

  
    // creation of filter
    var filteredData = alienData.filter(alienData=> 
        alienData.datetime === inputValue);
    console.log(filteredData);

// loop through JSON of data
    filteredData.forEach(UFOSightings => {
    console.log(UFOSightings);
    var row = tbody.append("tr");
    Object.values(UFOSightings).forEach((value) => {
    console.log(value);
    var cell = row.append("td");
    cell.text(value);
    })
});
});

