// from data.js
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
// YOUR CODE HERE!

// adding city
//   datetime: "1/28/1996",
//     city: "dallas",
//     state: "tx",
//     country: "us",
//     shape: "star",
//     durationMinutes: "5 mins.",
//     comments: "Cowboys win a superbowl, that's alien!."


// var Dallas = ["datetime", "1/"