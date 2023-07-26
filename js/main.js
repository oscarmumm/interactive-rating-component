const btnSubmit = document.getElementById('btn-submit');
const submitCard = document.getElementById('submit-card');
const thankyouCard = document.getElementById('thankyou-card');

btnSubmit.addEventListener( 'click', (e) => {
  submitCard.classList.toggle('d-none');
  thankyouCard.classList.toggle('d-none');
  thankyouCard.classList.toggle('flex-center');
})