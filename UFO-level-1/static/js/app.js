// from data.js
var tableData = data;

// YOUR CODE HERE!
//get a reference to the table body 
var tbody = d3.select('tbody');

//Level 1A - Write code that appends a table to your webpage and 
//add new row of data for each UFO sighting

data.forEach((UFOReport) => {
    var row =tbody.append('tr');
    Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append('td')
        cell.text(value);
    });
});
 

//Level 1B - Use a date form in your HTML document and write JavaScript code that willl listen 
//for events and search through the date/time column to find rows that match user input

// //get a reference to the filter table button click 
var   filterButton = d3.select('#filter-btn');
//define on click event handler function    
filterButton.on('click', function(){
    //to clear table on new click 
    tbody.html('');
    //get a reference on the datetime input
    var inputElement = d3.select('#datetime');
    //extract the input date and clear value 
    var inputDate = inputElement.property('value');
    d3.select('#datetime').property('value', '');
    //define filter varibale and display rows matching search criteria 
    var searchResults = tableData.filter(search => search.datetime === inputDate);
    searchResults.forEach((UFOSearch) => {
        var row =tbody.append('tr');
        Object.entries(UFOSearch).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value);
        });
    });
});

