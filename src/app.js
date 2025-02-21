document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    const resultsDiv = document.getElementById('results');
    
    // Clear previous results
    resultsDiv.innerHTML = '<p>Loading...</p>';

    fetch(`https://https://frontend-new-4379.onrender.com/api/check-rank?query=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            resultsDiv.innerHTML = ''; // Clear loading message
            if (data.items && data.items.length > 0) {
                data.items.forEach(item => {
                    const resultItem = document.createElement('div');
                    resultItem.innerHTML = `<strong>${item.title}</strong><br><a href="${item.link}" target="_blank">${item.link}</a>`;
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultsDiv.innerHTML = '<p>Error fetching results. Please try again later.</p>';
        });
});