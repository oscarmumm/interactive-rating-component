const btnSubmit = document.getElementById('btn-submit');
const submitCard = document.getElementById('submit-card');
const thankyouCard = document.getElementById('thankyou-card');
const ratingSpan = document.getElementById('rating-span');


btnSubmit.addEventListener( 'click', (e) => {
  e.preventDefault();
  submitCard.classList.toggle('d-none');
  thankyouCard.classList.toggle('d-none');
  thankyouCard.classList.toggle('flex-center');
  let rating = document.querySelector('input[type="radio"]:checked');
  ratingSpan.innerText = rating.value;
})