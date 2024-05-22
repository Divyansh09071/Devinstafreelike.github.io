window.addEventListener('load', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="blink">...</p>`;
});

document.getElementById('likeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const postLink = document.getElementById('postLink').value;
    const resultDiv = document.getElementById('result');

    // Simulate an API call
    setTimeout(() => {
        resultDiv.innerHTML = `<p class="blink">Likes are being added to <a href="${postLink}" target="_blank">your post</a>!</p>`;
    }, 2000);

    // Optionally, you can add actual API call here
    // fetch('/your-api-endpoint', { method: 'POST', body: JSON.stringify({ postLink }) })
    //     .then(response => response.json())
    //     .then(data => {
    //         resultDiv.innerHTML = `<p>${data.message}</p>`;
    //     })
    //     .catch(error => {
    //         resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    //     });
});