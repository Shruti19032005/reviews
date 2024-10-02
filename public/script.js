document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    fetch('/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, review }),
    })
    .then(response => response.json())
    .then(data => {
        displayReview(data);
        document.getElementById('review-form').reset();
    })
    .catch(error => console.error('Error:', error));
});

// Function to display a review
function displayReview(review) {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `<strong>${review.name}</strong> <small>${new Date(review.timestamp).toLocaleString()}</small><p>${review.review}</p>`;
    reviewsContainer.prepend(reviewElement);
}

// Load existing reviews
window.onload = () => {
    fetch('/reviews')
        .then(response => response.json())
        .then(reviews => {
            reviews.forEach(displayReview);
        })
        .catch(error => console.error('Error:', error));
};
