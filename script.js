// 1
const red = document.querySelector('input[value="red"]');
const white = document.querySelector('input[value="white"]');
const green = document.querySelector('input[value="green"]');

red.addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
});
white.addEventListener('click', function () {
  document.body.style.backgroundColor = 'white';
});
green.addEventListener('click', function () {
  document.body.style.backgroundColor = 'green';
});

// 2

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameOutput.textContent = 'незнайомець'; 

nameInput.addEventListener('input', function () {
  nameOutput.textContent = nameInput.value || 'незнайомець';
});

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', function () {
  validationInput.classList.remove('valid', 'invalid');

  const validLength = Number(validationInput.dataset.length);
  const inputLength = validationInput.value.length;

  if (inputLength === 0) return;

  if (inputLength === validLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
});

// 3
const fontSizeControl = document.querySelector('#font-size-control');
const fontText = document.querySelector('#text');

fontSizeControl.addEventListener('input', function () {
  fontText.style.fontSize = fontSizeControl.value + 'px';
}); 

fontSizeControl.addEventListener('input', function () {
  fontText.style.fontSize = fontSizeControl.value + 'px';
});
