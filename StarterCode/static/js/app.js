// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

// console.log the data from data.js
console.log(data);

// loop through data and console.log each ufo sighting object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);

//use d3 to append one table row `tr` for each ufo sighting object    
    var row = tbody.append("tr");

// use `object.entries` to console.log each weather report value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

// use d3 to append 1 cell per ufo sighting value( date, city, state)
// append a cell to the row for each value in the ufo sighting object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// getting a reference to the button on the page with the id property set to `filter`
var filterField = d3.select("#filter-btn");

filterField.on("click", function() {

  // prevent the page from refreshing
    d3.event.preventDefault();


// getting a reference to the input element on the page
    var inputField = d3.select("#datetime");

// get the value property og the input element
    var inputValue = inputField.property("value");

    console.log(inputValue);
    console.log(table);

    var filteredData = tableData.filter(dateNav => dateNav.datetime === inputValue);

    console.log(filteredData);

});