document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    fetch(`https://https://frontend-new-4379.onrender.com/api/check-rank?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.items.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<strong>${item.title}</strong><br><a href="${item.link}" target="_blank">${item.link}</a>`;
                resultsDiv.appendChild(resultItem);
            });
        })
        .catch(error => console.error('Error:', error));
});