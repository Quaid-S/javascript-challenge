// from data.js
var tableData = data;
var tbody = d3.select("tbody")

// YOUR CODE HERE!

// Populating Table Data


//Creating Filter
tableData.forEach((report) => {
    console.log(report)
    let row = tbody.append("tr");

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});
let button = d3.select("#filter-btn");

function buttonHandler() {
    tbody.html("")
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
        let filteredData = tableData.filter((entry) => entry.datetime === inputValue);
        filteredData.forEach((report) => {
            console.log(report)
            let row = tbody.append("tr");
    
            Object.entries(report).forEach(([key, value]) => {
                console.log(key, value);
                let cell = row.append("td");
                cell.text(value);
            });
        });
     
};

button.on('click', buttonHandler);



