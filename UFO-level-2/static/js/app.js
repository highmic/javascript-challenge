// from data.js
var tableData = data;

//get a reference on the table body
var tbody = d3.select('tbody');

//Automatic/Defaut table of UFO sightings from level 1
data.forEach((UFOReport) => {
    var row =tbody.append('tr');
    Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append('td')
        cell.text(value);
    });
});
 
/*LEVEL 2: Multiple Search Categories (Optional)- Using multiple input tags and/or select dropdowns,
 write JavaScript code so the user can to set multiple filters and search for UFO sightings
*/
//get a reference on the filter table button click 
var filterButton = d3.select('#filter-btn');
//define d3 on click event handler function    
filterButton.on('click', function () {
    //to clear table on new click 
    tbody.html('');
    /*get a reference on the search options
      clear input value
      change string to lower case if user enter lowercase 
    */
    var inputDate = d3.select('#select-date').property('value');
    d3.select('#select-date').property('value', '');
    var inputCity = d3.select('#select-city').property('value').toLowerCase();
    d3.select('#select-city').property('value', '');
    var inputState = d3.select('#select-state').property('value').toLowerCase();
    d3.select('#select-state').property('value', '');
    var inputCountry = d3.select('#select-country').property('value').toLowerCase();
    d3.select('#select-country').property('value', '');
    var inputShape = d3.select('#select-shape').property('value').toLowerCase();
    d3.select('#select-shape').property('value', '');

    // define specific filters for each search option
    if (inputDate) {searchResults = tableData.filter(search => search.datetime === inputDate)}
    else if  (inputCity) {searchResults = tableData.filter(search => search.city === inputCity)}
    else if  (inputState) {searchResults = tableData.filter(search => search.state === inputState)}
    else if  (inputCountry) {searchResults = tableData.filter(search => search.country === inputCountry)}
    else if  (inputShape) {searchResults = tableData.filter(search => search.shape === inputShape)};
   
    //extract mataching rows for the inputed search option 
    searchResults.forEach((UFOSearch) => {
        var row = tbody.append('tr');
        Object.entries(UFOSearch).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value);
        });
    });
   
});



