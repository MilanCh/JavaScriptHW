// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 5: Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, durationMinutes, comments)
tableData.forEach(function (ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function ([key, value]) {
        // Append a cell to the row for each value
        // in the ufo report object
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the filter by date button
var filter = d3.select("#filter-btn");

filter.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var errorMessage = document.getElementById('errorname');

    // Select the input element and get the raw HTML node for the Date
    var inputElementdate = d3.select("#datetime");
    // Get the value property of the input element for the date
    var inputValuedate = inputElementdate.property("value");

    // Select the input element and get the raw HTML node for the city Location
    var inputElementcity = d3.select("#cityLocation");
    // Get the value property of the input element for the city
    var inputValuecity = inputElementcity.property("value");
    var lowercasecity = inputValuecity.toLowerCase();

    // Select the input element and get the raw HTML node for the ufo state
    var inputElementstate = d3.select("#stateLocation");
    // Get the value property of the input element for the state
    var inputValuestate = inputElementstate.property("value");
    var lowercasestate = inputValuestate.toLowerCase();

    // Select the input element and get the raw HTML node for the ufo country
    var inputElementcountry = d3.select("#countryLocation");
    // Get the value property of the input element for the country
    var inputValuecountry = inputElementcountry.property("value");
    var lowercasecountry = inputValuecountry.toLowerCase();

    // Select the input element and get the raw HTML node for the ufo shape
    var inputElementshape = d3.select("#shape");
    // Get the value property of the input element for the shape
    var inputValueshape = inputElementshape.property("value");
    var lowercaseshape = inputValueshape.toLowerCase();

    // Select the input element and get the raw HTML node for the ufo duration
    var inputElementduration = d3.select("#duration");
    // Get the value property of the input element for the duration
    var inputValueduration = inputElementduration.property("value");
    // var inputfirstwordDuration = inputValueduration.split(" ");
    // var inputfirstword = inputfirstwordDuration[0];

    var filteredData = tableData.filter(ufoDate =>
        ufoDate.datetime === inputValuedate ||
        ufoDate.city === lowercasecity ||
        ufoDate.state === lowercasestate ||
        ufoDate.country === lowercasecountry ||
        ufoDate.shape === lowercaseshape ||
        ufoDate.durationMinutes === inputValueduration
    );

    if (filteredData.length !== 0) {
        tbody.html("");
        filteredData.forEach(function (ufofilter) {
            var row = tbody.append("tr");
            Object.entries(ufofilter).forEach(function ([key, value]) {
                // Append a cell to the row for each value
                // in the ufo report object
                var cell = tbody.append("td");
                cell.text(value);
            });
        });
    }

    else {
        tbody.html("");
        var row = tbody.append("tr");
        var cell = tbody.append("td");
        cell.text("Please Modify Your Search Criteria");
    }
});