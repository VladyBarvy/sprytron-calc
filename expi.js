/*
const app = () => {
  const state = {
    registrationForm: {
      valid: null,
      errors: [],
    }
  };
  
  const input = document.querySelector('.phone');
  const submit = document.querySelector('.submit');
  
  input.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    
    state.registrationForm.value = inputValue;
    if (inputValue.match(/^\d+$/)) {
      state.registrationForm.valid = true;
      state.registrationForm.errors = [];
    } else {
      state.registrationForm.valid = false;
      state.registrationForm.errors.push('wrong format');
    }

    console.log(state.registrationForm.valid);
    
    submit.disabled = !state.registrationForm.valid;
    if (state.registrationForm.valid) {
      input.style.border = null;
    } else {
      input.style.border = 'thick solid red';
      // тут выводим ошибки
    }
  });
};

app();
*/


const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

const app = () => {
  // состояние относится к уровню приложения
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input[type=number]');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');


  


  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data);

    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};

app();
