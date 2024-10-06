const state = {
  registrationForm: {
    valid: null,
    errors: [],
  },
  resistorForm: {
    value_res: 0,
    valid: null,
    errors: [],
  },
  voltageForm: {
    value_volt: 0,
    valid: null,
    errors: [],
  },
  currentForm: {
    value_cur: 0,
    valid: null,
    errors: [],
  }
};

const input = document.querySelector('.phone');
const submit = document.querySelector('.submit');
const input_resistance = document.querySelector('.resistance');
const input_voltage = document.querySelector('.voltage');
const output_current = document.querySelector('.current');




const render = (state) => {

  submit.disabled = !state.registrationForm.valid;
  if (state.registrationForm.valid) {
    input.style.border = null;
  } else {
    input.style.border = 'thick solid red';
  }

  output_current.textContent = value_cur;
};




const app = () => {
  
  // форма ввода номера телефона
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
    
    render(state);
  });


  // форма ввода значения сопротивления резистора
  input_resistance.addEventListener('input', (e) => {
    const inputValueOfResistance = e.target.value;
    state.resistorForm.value = inputValueOfResistance;

    if (inputValueOfResistance.match(/^\d+$/)) {
      state.registrationForm.valid = true;
      state.registrationForm.errors = [];
    } else {
      state.registrationForm.valid = false;
      state.registrationForm.errors.push('wrong format');
    }
    
    render(state);
  });


    // форма ввода значения напряжения
    input_voltage.addEventListener('input', (e) => {
      const inputValueOfVoltage = e.target.value;
      state.voltageForm.value = inputValueOfVoltage;
  
      if (inputValueOfVoltage.match(/^\d+$/)) {
        state.registrationForm.valid = true;
        state.registrationForm.errors = [];
      } else {
        state.registrationForm.valid = false;
        state.registrationForm.errors.push('wrong format');
      }
      
      render(state);
    });



    const form = document.getElementById('expir');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Отключаем дефолтные обработчики
/*
      const formData = new FormData(e.target);

      const input_voltage_data = formData.get('voltage_name');
      const input_resistance_data = formData.get('resistance_name'); 
      const input_current_data = formData.get('current_name'); 
*/

      console.log('birs');
      state.currentForm.value_cur = 1;

    });



};

app();
