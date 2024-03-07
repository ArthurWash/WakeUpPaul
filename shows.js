// Array of show data
var shows = [
    { date: new Date('2024-03-22'), venue: 'Crossroads @ 8pm', city: 'Garwood, NJ' },
    { date: new Date('2024-03-27'), venue: 'Alpha Wave Studios Open Mic @ 6pm', city: 'Whippany, NJ' },
    // Add more shows as needed
];

// Get the shows container
var showsContainer = document.getElementById('showsContainer');

// Get the current date
var now = new Date();

// Options for toLocaleDateString
var options = { year: 'numeric', month: 'long', day: 'numeric' };

// Loop through the shows array
for (var i = 0; i < shows.length; i++) {
    // Only display the show if its date is in the future
    if (shows[i].date > now) {
        // Create a new div for the show
        var showDiv = document.createElement('div');
        showDiv.className = 'col-md-12 show'; // Add 'show' class for additional styling

        // Add the show data to the div
        showDiv.innerHTML = `
            <span class="show-date">${shows[i].date.toLocaleDateString(undefined, options)}</span>
            <span class="show-venue">${shows[i].venue}</span>
            <span class="show-city">${shows[i].city}</span>
        `;

        // Add the show div to the shows container
        showsContainer.appendChild(showDiv);
    }
}