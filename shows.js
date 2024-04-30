// Array of show data
var shows = [
    { date: new Date('2024-05-03T20:00:00'), venue: 'Montclair Brewery @ 7:30pm', city: 'Montclair, NJ' },
    { date: new Date('2024-06-14T20:00:00'), venue: 'Old Canal Inn @ 8pm', city: 'Nutley, NJ' },
    { date: new Date('2024-08-17T15:30:00'), venue: 'Jersey Girl Brewing @ 3:30pm', city: 'Mt. Olive, NJ' },
    // Add more shows as needed
];

// Get the shows container
var showsContainer = document.getElementById('showsContainer');

// Get the current date
var now = new Date();

// Options for toLocaleDateString
var options = { year: 'numeric', month: 'long', day: 'numeric' };

// Variable to track if there are any upcoming shows
var hasUpcomingShows = false;

// Loop through the shows array
for (var i = 0; i < shows.length; i++) {
    // Only display the show if its date is in the future
    if (shows[i].date > now) {
        // Set hasUpcomingShows to true
        hasUpcomingShows = true;

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

// If there are no upcoming shows, display the "More shows TBD. Stay tuned!" message
if (!hasUpcomingShows) {
    showsContainer.innerHTML = '<p>No upcoming shows. Stay tuned for the next gig!</p>';
    showsContainer.classList.add('no-shows'); // Add 'no-shows' class for additional styling
}