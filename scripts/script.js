// Hanlde form
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.getElementById('email-input');
const elmInfo = document.getElementById('personal-info');
const elmEmailForm = document.getElementById('form-email');
const textValidateEmail = document.getElementById('text-validate-email');

document.getElementById('submit-form').addEventListener('click', function(e) {
  e.preventDefault();
  let emailVal = email.value;
  let checkValid = regex.test(emailVal);

  if (checkValid) {
    elmInfo.style.display = 'block';
    elmEmailForm.style.display = 'none';
    textValidateEmail.textContent = '';
  }
  if (!checkValid) {
    textValidateEmail.textContent = 'Sai định dạng email';
  }
});
document.getElementById('email-input').addEventListener('keyup', function(e) {
  textValidateEmail.textContent = '';
});

// Handle show job-info
const elmToggleBtn = document.querySelectorAll('.i-j-actions span');
const elmBoxAction = document.querySelectorAll('.i-j-actions');
const elmItemJobDetail = document.querySelectorAll('.item-job-detail');
for (let i = 0; i < elmToggleBtn.length; i++) {
  elmToggleBtn[i].addEventListener('click', function(e) {
    if (elmItemJobDetail[i].style.display === 'block') {
      elmToggleBtn[i].textContent = 'view more';
      elmItemJobDetail[i].style.display = 'none';

      return;
    }
    if (!elmItemJobDetail[i].style.display || elmItemJobDetail[i].style.display === 'none') {
      elmToggleBtn[i].textContent = 'view less';
      elmItemJobDetail[i].style.display = 'block';

      return;
    }
  });
}

