
const app = () => {



  let a111 = document.getElementById("current_input");
  a111.disabled = true; // ток

  let previousChoice = 1;


  let result_current_show = document.getElementById('total_cur');
  let result_power_show = document.getElementById('total_power');
  let result_resistance_show = document.getElementById('total_resist');
  let result_voltage_show = document.getElementById('total_volt');





  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Отключаем дефолтные обработчики

    const formData = new FormData(e.target);

    const input_voltage_data = formData.get('voltage_name');
    const input_resistance_data = formData.get('resistance_name'); 
    const input_current_data = formData.get('current_name'); 


    //const input_voltage_data = document.getElementById('voltage_input').value;
    //const input_resistance_data = document.getElementById('resistance_input').value;





    let data_1 = parseFloat(input_voltage_data, 10);    // voltage
    let data_2 = parseFloat(input_resistance_data, 10); // resistance
    let data_3 = parseFloat(input_current_data, 10);    // current









//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_voltage = document.getElementById('select_voltage');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;

if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;
}

if (selectedValue_of_input_voltage === "В") {
  data_1 /= 1;
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_resistance = document.getElementById('select_resistance');
let selectedValue_of_input_resistance = list_of_input_resistance.options[list_of_input_resistance.selectedIndex].value;

if (selectedValue_of_input_resistance === "мкОм") {
  data_2 /= 1000000;
}

if (selectedValue_of_input_resistance === "мОм") {
  data_2 /= 1000;
}

if (selectedValue_of_input_resistance === "Ом") {
  data_2 *= 1;
}

if (selectedValue_of_input_resistance === "кОм") {
  data_2 *= 1000;
}

if (selectedValue_of_input_resistance === "МОм") {
  data_2 *= 1000000;
}

if (selectedValue_of_input_resistance === "ГОм") {
  data_2 *= 1000000000;
}
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_current = document.getElementById('select_current');
let selectedValue_of_input_current = list_of_input_current.options[list_of_input_current.selectedIndex].value;

if (selectedValue_of_input_current === "мкА") {
  data_3 /= 1000000;
}

if (selectedValue_of_input_current === "мА") {
  data_3 /= 1000;
}

if (selectedValue_of_input_current === "А") {
  data_3 *= 1;
}

if (selectedValue_of_input_current === "кА") {
  data_3 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////









  // data_1 - volatage
  // data_2 - resistance
  // data_3 - current

  let result_current = 0;
  let result_power = 0;
  let result_voltage = 0;
  let result_resistance = 0;

  // если требуется рассчитать ТОК
  if (document.getElementById('radio-one').checked) {
    result_current = data_1 / data_2;           // расчётный ток
    result_power = (data_1 * data_1) / data_2;  // расчётная мощность
  }

  // если требуется рассчитать НАПРЯЖЕНИЕ
  if (document.getElementById('radio-two').checked) {
    result_voltage = data_3 * data_2;          // расчётное напряжение
    result_power = data_2 * data_3 * data_3;   // расчётная мощность
  }

  // если требуется рассчитать СОПРОТИВЛЕНИЕ
  if (document.getElementById('radio-three').checked) {
    result_resistance = data_1 / data_3;  // расчётное сопротивление
    result_power = data_1 * data_3;      // расчётная мощность
  }











    
    // результат расчёта ТОК
    document.getElementById('total_cur').value = result_current.toFixed(3);
    result_current_show.textContent = result_current.toFixed(3);

    // результат расчёта НАПРЯЖЕНИЕ
    document.getElementById('total_volt').value = result_voltage.toFixed(3);
    result_voltage_show.textContent = result_voltage.toFixed(3);

    // результат расчёта СОПРОТИВЛЕНИЕ
    document.getElementById('total_resist').value = result_resistance.toFixed(3);
    result_resistance_show.textContent = result_resistance.toFixed(3);

    // результат расчёта МОЩНОСТЬ
    document.getElementById('total_power').value = result_power.toFixed(3);
    result_power_show.textContent = result_power.toFixed(3);

    });



































  let list_of_currents_result = document.getElementById('out_cur');

  list_of_currents_result.addEventListener('change', function(e) {  
    let selectedValue = e.target.value;

    

    let result_current_input = document.querySelector('#total_cur');

    //voltage_input
    const input_voltage_data = document.getElementById('voltage_input').value;
    const input_resistance_data = document.getElementById('resistance_input').value; 
    const input_current_data = document.getElementById('current_input').value; 


    //const input_voltage_data = document.getElementById('voltage_input').value;
    //const input_resistance_data = document.getElementById('resistance_input').value;










    let data_1 = parseFloat(input_voltage_data, 10);    // voltage
    let data_2 = parseFloat(input_resistance_data, 10); // resistance
    let data_3 = parseFloat(input_current_data, 10);    // current









//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_voltage = document.getElementById('select_voltage');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;

if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;
}

if (selectedValue_of_input_voltage === "В") {
  data_1 /= 1;
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_resistance = document.getElementById('select_resistance');
let selectedValue_of_input_resistance = list_of_input_resistance.options[list_of_input_resistance.selectedIndex].value;

if (selectedValue_of_input_resistance === "мкОм") {
  data_2 /= 1000000;
}

if (selectedValue_of_input_resistance === "мОм") {
  data_2 /= 1000;
}

if (selectedValue_of_input_resistance === "Ом") {
  data_2 *= 1;
}

if (selectedValue_of_input_resistance === "кОм") {
  data_2 *= 1000;
}

if (selectedValue_of_input_resistance === "МОм") {
  data_2 *= 1000000;
}

if (selectedValue_of_input_resistance === "ГОм") {
  data_2 *= 1000000000;
}
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_current = document.getElementById('select_current');
let selectedValue_of_input_current = list_of_input_current.options[list_of_input_current.selectedIndex].value;

if (selectedValue_of_input_current === "мкА") {
  data_3 /= 1000000;
}

if (selectedValue_of_input_current === "мА") {
  data_3 /= 1000;
}

if (selectedValue_of_input_current === "А") {
  data_3 *= 1;
}

if (selectedValue_of_input_current === "кА") {
  data_3 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////









  // data_1 - volatage
  // data_2 - resistance
  // data_3 - current

  let result_current = 0;
  let result_power = 0;
  let result_voltage = 0;
  let result_resistance = 0;

  // если требуется рассчитать ТОК
  if (document.getElementById('radio-one').checked) {
    result_current = data_1 / data_2;           // расчётный ток
    result_power = (data_1 * data_1) / data_2;  // расчётная мощность
  }

  // если требуется рассчитать НАПРЯЖЕНИЕ
  if (document.getElementById('radio-two').checked) {
    result_voltage = data_3 * data_2;          // расчётное напряжение
    result_power = data_2 * data_3 * data_3;   // расчётная мощность
  }

  // если требуется рассчитать СОПРОТИВЛЕНИЕ
  if (document.getElementById('radio-three').checked) {
    result_resistance = data_1 / data_3;  // расчётное сопротивление
    result_power = data_1 * data_3;      // расчётная мощность
  }

  

  
  if (selectedValue === "мА") {
    result_current *= 1000;
  }
  
  if (selectedValue === "А") {
    result_current *= 1;
  }
  
  if (selectedValue === "мкА") {
    result_current *= 1000000;
  }

  if (selectedValue === "кА") {
    result_current /= 1000;
  }




  //document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_cur').value = result_current.toFixed(3);

  //result_1.textContent = resu_1.toFixed(3);
  result_current_input.textContent = result_current.toFixed(3);

});






























let list_of_resistance_result = document.getElementById('out_resist');

list_of_resistance_result.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;

  

  let result_power_input = document.querySelector('#total_resist');

  //voltage_input
  const input_voltage_data = document.getElementById('voltage_input').value;
  const input_resistance_data = document.getElementById('resistance_input').value; 
  const input_current_data = document.getElementById('current_input').value; 


  //const input_voltage_data = document.getElementById('voltage_input').value;
  //const input_resistance_data = document.getElementById('resistance_input').value;










  let data_1 = parseFloat(input_voltage_data, 10);    // voltage
  let data_2 = parseFloat(input_resistance_data, 10); // resistance
  let data_3 = parseFloat(input_current_data, 10);    // current









//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_voltage = document.getElementById('select_voltage');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;

if (selectedValue_of_input_voltage === "мВ") {
data_1 /= 1000;
}

if (selectedValue_of_input_voltage === "В") {
data_1 /= 1;
}

if (selectedValue_of_input_voltage === "кВ") {
data_1 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_resistance = document.getElementById('select_resistance');
let selectedValue_of_input_resistance = list_of_input_resistance.options[list_of_input_resistance.selectedIndex].value;

if (selectedValue_of_input_resistance === "мкОм") {
data_2 /= 1000000;
}

if (selectedValue_of_input_resistance === "мОм") {
data_2 /= 1000;
}

if (selectedValue_of_input_resistance === "Ом") {
data_2 *= 1;
}

if (selectedValue_of_input_resistance === "кОм") {
data_2 *= 1000;
}

if (selectedValue_of_input_resistance === "МОм") {
data_2 *= 1000000;
}

if (selectedValue_of_input_resistance === "ГОм") {
data_2 *= 1000000000;
}
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_current = document.getElementById('select_current');
let selectedValue_of_input_current = list_of_input_current.options[list_of_input_current.selectedIndex].value;

if (selectedValue_of_input_current === "мкА") {
data_3 /= 1000000;
}

if (selectedValue_of_input_current === "мА") {
data_3 /= 1000;
}

if (selectedValue_of_input_current === "А") {
data_3 *= 1;
}

if (selectedValue_of_input_current === "кА") {
data_3 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////









// data_1 - volatage
// data_2 - resistance
// data_3 - current

let result_current = 0;
let result_power = 0;
let result_voltage = 0;
let result_resistance = 0;

// если требуется рассчитать ТОК
if (document.getElementById('radio-one').checked) {
  result_current = data_1 / data_2;           // расчётный ток
  result_power = (data_1 * data_1) / data_2;  // расчётная мощность
}

// если требуется рассчитать НАПРЯЖЕНИЕ
if (document.getElementById('radio-two').checked) {
  result_voltage = data_3 * data_2;          // расчётное напряжение
  result_power = data_2 * data_3 * data_3;   // расчётная мощность
}

// если требуется рассчитать СОПРОТИВЛЕНИЕ
if (document.getElementById('radio-three').checked) {
  result_resistance = data_1 / data_3;  // расчётное сопротивление
  result_power = data_1 * data_3;      // расчётная мощность
}




if (selectedValue === "мОм") {
  result_resistance *= 1000;
}

if (selectedValue === "Ом") {
  result_resistance *= 1;
}

if (selectedValue === "мкОм") {
  result_resistance *= 1000000;
}

if (selectedValue === "кОм") {
  result_resistance /= 1000;
}

if (selectedValue === "МОм") {
  result_resistance /= 1000000;
}

if (selectedValue === "ГОм") {
  result_resistance /= 1000000000;
}


//document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_resist').value = result_resistance.toFixed(3);

//result_1.textContent = resu_1.toFixed(3);
result_resistance_input.textContent = result_resistance.toFixed(3);

});













































let list_of_powers_result = document.getElementById('out_power');

list_of_powers_result.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;

  

  let result_power_input = document.querySelector('#total_power');

  //voltage_input
  const input_voltage_data = document.getElementById('voltage_input').value;
  const input_resistance_data = document.getElementById('resistance_input').value; 
  const input_current_data = document.getElementById('current_input').value; 


  //const input_voltage_data = document.getElementById('voltage_input').value;
  //const input_resistance_data = document.getElementById('resistance_input').value;










  let data_1 = parseFloat(input_voltage_data, 10);    // voltage
  let data_2 = parseFloat(input_resistance_data, 10); // resistance
  let data_3 = parseFloat(input_current_data, 10);    // current









//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_voltage = document.getElementById('select_voltage');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;

if (selectedValue_of_input_voltage === "мВ") {
data_1 /= 1000;
}

if (selectedValue_of_input_voltage === "В") {
data_1 /= 1;
}

if (selectedValue_of_input_voltage === "кВ") {
data_1 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_resistance = document.getElementById('select_resistance');
let selectedValue_of_input_resistance = list_of_input_resistance.options[list_of_input_resistance.selectedIndex].value;

if (selectedValue_of_input_resistance === "мкОм") {
data_2 /= 1000000;
}

if (selectedValue_of_input_resistance === "мОм") {
data_2 /= 1000;
}

if (selectedValue_of_input_resistance === "Ом") {
data_2 *= 1;
}

if (selectedValue_of_input_resistance === "кОм") {
data_2 *= 1000;
}

if (selectedValue_of_input_resistance === "МОм") {
data_2 *= 1000000;
}

if (selectedValue_of_input_resistance === "ГОм") {
data_2 *= 1000000000;
}
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_current = document.getElementById('select_current');
let selectedValue_of_input_current = list_of_input_current.options[list_of_input_current.selectedIndex].value;

if (selectedValue_of_input_current === "мкА") {
data_3 /= 1000000;
}

if (selectedValue_of_input_current === "мА") {
data_3 /= 1000;
}

if (selectedValue_of_input_current === "А") {
data_3 *= 1;
}

if (selectedValue_of_input_current === "кА") {
data_3 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////









// data_1 - volatage
// data_2 - resistance
// data_3 - current

let result_current = 0;
let result_power = 0;
let result_voltage = 0;
let result_resistance = 0;

// если требуется рассчитать ТОК
if (document.getElementById('radio-one').checked) {
  result_current = data_1 / data_2;           // расчётный ток
  result_power = (data_1 * data_1) / data_2;  // расчётная мощность
}

// если требуется рассчитать НАПРЯЖЕНИЕ
if (document.getElementById('radio-two').checked) {
  result_voltage = data_3 * data_2;          // расчётное напряжение
  result_power = data_2 * data_3 * data_3;   // расчётная мощность
}

// если требуется рассчитать СОПРОТИВЛЕНИЕ
if (document.getElementById('radio-three').checked) {
  result_resistance = data_1 / data_3;  // расчётное сопротивление
  result_power = data_1 * data_3;      // расчётная мощность
}




if (selectedValue === "мВт") {
  result_power *= 1000;
}

if (selectedValue === "Вт") {
  result_power *= 1;
}

if (selectedValue === "мкВт") {
  result_power *= 1000000;
}

if (selectedValue === "кВт") {
  result_power /= 1000;
}

if (selectedValue === "МВт") {
  result_power /= 1000000;
}


//document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_power').value = result_power.toFixed(3);

//result_1.textContent = resu_1.toFixed(3);
result_power_input.textContent = result_power.toFixed(3);

});



























let list_of_voltages_result = document.getElementById('out_volt');

  list_of_voltages_result.addEventListener('change', function(e) {  
    let selectedValue = e.target.value;

    

    let result_voltage_input = document.querySelector('#total_volt');

    
    const input_voltage_data = document.getElementById('voltage_input').value;
    const input_resistance_data = document.getElementById('resistance_input').value; 
    const input_current_data = document.getElementById('current_input').value; 


    //const input_voltage_data = document.getElementById('voltage_input').value;
    //const input_resistance_data = document.getElementById('resistance_input').value;










    let data_1 = parseFloat(input_voltage_data, 10);    // voltage
    let data_2 = parseFloat(input_resistance_data, 10); // resistance
    let data_3 = parseFloat(input_current_data, 10);    // current









//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_voltage = document.getElementById('select_voltage');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;

if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;
}

if (selectedValue_of_input_voltage === "В") {
  data_1 /= 1;
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_resistance = document.getElementById('select_resistance');
let selectedValue_of_input_resistance = list_of_input_resistance.options[list_of_input_resistance.selectedIndex].value;

if (selectedValue_of_input_resistance === "мкОм") {
  data_2 /= 1000000;
}

if (selectedValue_of_input_resistance === "мОм") {
  data_2 /= 1000;
}

if (selectedValue_of_input_resistance === "Ом") {
  data_2 *= 1;
}

if (selectedValue_of_input_resistance === "кОм") {
  data_2 *= 1000;
}

if (selectedValue_of_input_resistance === "МОм") {
  data_2 *= 1000000;
}

if (selectedValue_of_input_resistance === "ГОм") {
  data_2 *= 1000000000;
}
//////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
let list_of_input_current = document.getElementById('select_current');
let selectedValue_of_input_current = list_of_input_current.options[list_of_input_current.selectedIndex].value;

if (selectedValue_of_input_current === "мкА") {
  data_3 /= 1000000;
}

if (selectedValue_of_input_current === "мА") {
  data_3 /= 1000;
}

if (selectedValue_of_input_current === "А") {
  data_3 *= 1;
}

if (selectedValue_of_input_current === "кА") {
  data_3 *= 1000;
}
//////////////////////////////////////////////////////////////////////////////////////////////









  // data_1 - volatage
  // data_2 - resistance
  // data_3 - current

  let result_current = 0;
  let result_power = 0;
  let result_voltage = 0;
  let result_resistance = 0;

  // если требуется рассчитать ТОК
  if (document.getElementById('radio-one').checked) {
    result_current = data_1 / data_2;           // расчётный ток
    result_power = (data_1 * data_1) / data_2;  // расчётная мощность
  }

  // если требуется рассчитать НАПРЯЖЕНИЕ
  if (document.getElementById('radio-two').checked) {
    result_voltage = data_3 * data_2;          // расчётное напряжение
    result_power = data_2 * data_3 * data_3;   // расчётная мощность
  }

  // если требуется рассчитать СОПРОТИВЛЕНИЕ
  if (document.getElementById('radio-three').checked) {
    result_resistance = data_1 / data_3;  // расчётное сопротивление
    result_power = data_1 * data_3;      // расчётная мощность
  }

  


  
  if (selectedValue === "мВ") {
    result_voltage *= 1000;
  }
  
  if (selectedValue === "В") {
    result_voltage *= 1;
  }

  if (selectedValue === "кВ") {
    result_voltage /= 1000;
  }




  //document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_volt').value = result_voltage.toFixed(3);

  //result_1.textContent = resu_1.toFixed(3);
  result_voltage_input.textContent = result_voltage.toFixed(3);

});































   


    form.addEventListener("reset", () => {
      form.reset();
    
      const cur_1 = document.getElementById('total_cur');
      const cur_11 = 0;
      cur_1.textContent = cur_11.toFixed(0);
    
      const pow_1 = document.getElementById('total_power');
      const pow_11 = 0;
      pow_1.textContent = pow_11.toFixed(0);

      const vol_1 = document.getElementById('total_volt');
      const vol_11 = 0;
      vol_1.textContent = vol_11.toFixed(0);

      const res_1 = document.getElementById('total_resist');
      const res_11 = 0;
      res_1.textContent = res_11.toFixed(0);

    });
    
};

app();
