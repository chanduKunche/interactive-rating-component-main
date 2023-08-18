const mainContainer = document.querySelector(".container");
const thankContainer = document.querySelector(".thank");
const submitButton = document.getElementById("sub");
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
    thankContainer.classList.remove('hidden')
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})