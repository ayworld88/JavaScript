// assign the data from `data.js' to a descriptive variable
var table = data;

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