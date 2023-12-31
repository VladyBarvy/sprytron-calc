let global_input_voltage = 0;

const app = () => {



//const form_answers = document.getElementById('#answers')


const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
event.preventDefault();

//form_answers.reset();



const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');
const result_3 = document.querySelector('#result_koef_divide');
const result_4 = document.querySelector('#result_power_1');
const result_5 = document.querySelector('#result_power_2');

const input_voltage_data = document.getElementById('input_voltage').value;
const resistance_r1_data = document.getElementById('resistance_r1').value;
const resistance_r2_data = document.getElementById('resistance_r2').value; 

const data_1 = parseFloat(input_voltage_data, 10);
const data_2 = parseFloat(resistance_r1_data, 10);
const data_3 = parseFloat(resistance_r2_data, 10);

let resu_1 = (data_1 * data_3) / (data_2 + data_3);  // напряжение на выходе делителя
let resu_2 = data_1 / (data_2 + data_3);  // ток через делитель
let resu_3 = (data_2 + data_3) / data_3;  // коэффициент деления
let resu_4 = ((data_1 / (data_2 + data_3)) * data_2) * (data_1 / (data_2 + data_3));  // мощность рессеивания R1
let resu_5 = ((data_1 / (data_2 + data_3)) * data_3) * (data_1 / (data_2 + data_3));  // мощность рессеивания R2



/*
let e = document.getElementById("out_cur");
let value_cur_show_me = e.value;
let text_me = e.options[e.selectedIndex].text;
*/

// ток
let select_current = document.getElementById('out_cur');
let select_value_current = select_current.options[select_current.selectedIndex].value;

const poop = select_value_current.toString();


/* ------------------------ */

// напряжение
let select_voltage = document.getElementById('out_volt');
let select_value_voltage = select_voltage.options[select_voltage.selectedIndex].value;

const goop = select_value_voltage.toString();


/* ------------------------ */

// мощность R1
let select_power_1 = document.getElementById('out_power_1');
let select_value_power_1 = select_power_1.options[select_power_1.selectedIndex].value;

const po1 = select_value_power_1.toString();


/* ------------------------ */

// мощность R2
let select_power_2 = document.getElementById('out_power_2');
let select_value_power_2 = select_power_2.options[select_power_2.selectedIndex].value;

const po2 = select_value_power_2.toString();



if (poop === "мА") {
  resu_2 *= 1000;
}

if (poop === "А") {
  resu_2 *= 1;
}

if (poop === "мкА") {
  resu_2 *= 1000000;
}




if (goop === "мВ") {
  resu_1 *= 1000;
}

if (goop === "В") {
  resu_1 *= 1;
}

if (goop === "мкВ") {
  resu_1 *= 1000000;
}

if (goop === "кВ") {
  resu_1 /= 1000;
}




if (po1 === "мВт") {
  resu_4 *= 1000;
}

if (po1 === "Вт") {
  resu_4 *= 1;
}

if (po1 === "мкВт") {
  resu_4 *= 1000000;
}

if (po1 === "кВт") {
  resu_4 /= 1000;
}





if (po2 === "мВт") {
  resu_5 *= 1000;
}

if (po2 === "Вт") {
  resu_5 *= 1;
}

if (po2 === "мкВт") {
  resu_5 *= 1000000;
}

if (po2 === "кВт") {
  resu_5 /= 1000;
}




document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_cur').value = resu_2.toFixed(3);
document.getElementById('total_koef_divide').value = resu_3.toFixed(3);
document.getElementById('total_power_1').value = resu_4.toFixed(3);
document.getElementById('total_power_2').value = resu_5.toFixed(3);

result_1.textContent = resu_1.toFixed(3);
result_2.textContent = resu_2.toFixed(3);
result_3.textContent = resu_3.toFixed(3);
result_4.textContent = resu_4.toFixed(3);
result_5.textContent = resu_5.toFixed(3);

});





//num.toLocaleString();















const list_of_currents = document.querySelector('#out_cur');

list_of_currents.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



  const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');

const input_voltage_data = document.getElementById('input_voltage').value;
const resistance_r1_data = document.getElementById('resistance_r1').value;
const resistance_r2_data = document.getElementById('resistance_r2').value; 

const data_1 = parseFloat(input_voltage_data, 10);
const data_2 = parseFloat(resistance_r1_data, 10);
const data_3 = parseFloat(resistance_r2_data, 10);

let resu_1 = (data_1 * data_3) / (data_2 + data_3);
let resu_2 = data_1 / (data_2 + data_3);

  

  
  if (selectedValue === "мА") {
    resu_2 *= 1000;
  }
  
  if (selectedValue === "А") {
    resu_2 *= 1;
  }
  
  if (selectedValue === "мкА") {
    resu_2 *= 1000000;
  }


  //document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_cur').value = resu_2.toFixed(3);

  //result_1.textContent = resu_1.toFixed(3);
result_2.textContent = resu_2.toFixed(3);

});















const list_of_voltages = document.querySelector('#out_volt');

list_of_voltages.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



  const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');

const input_voltage_data = document.getElementById('input_voltage').value;
const resistance_r1_data = document.getElementById('resistance_r1').value;
const resistance_r2_data = document.getElementById('resistance_r2').value; 

const data_1 = parseFloat(input_voltage_data, 10);
const data_2 = parseFloat(resistance_r1_data, 10);
const data_3 = parseFloat(resistance_r2_data, 10);

let resu_1 = (data_1 * data_3) / (data_2 + data_3);
let resu_2 = data_1 / (data_2 + data_3);

  

  if (selectedValue === "мкВ") {
    resu_1 *= 1000000;
  }
  
  if (selectedValue === "мВ") {
    resu_1 *= 1000;
  }
  
  if (selectedValue === "В") {
    resu_1 *= 1;
  }
  
  if (selectedValue === "кВ") {
    resu_1 /= 1000;
  }


  document.getElementById('total').value = resu_1.toFixed(3);
//document.getElementById('total_cur').value = resu_2.toFixed(3);

  result_1.textContent = resu_1.toFixed(3);
//result_2.textContent = resu_2.toFixed(3);

});






























const list_of_power_1 = document.querySelector('#out_power_1');

list_of_power_1.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



  const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');
const result_4 = document.querySelector('#result_power_1');

const input_voltage_data = document.getElementById('input_voltage').value;
const resistance_r1_data = document.getElementById('resistance_r1').value;
const resistance_r2_data = document.getElementById('resistance_r2').value; 

const data_1 = parseFloat(input_voltage_data, 10);
const data_2 = parseFloat(resistance_r1_data, 10);
const data_3 = parseFloat(resistance_r2_data, 10);

let resu_1 = (data_1 * data_3) / (data_2 + data_3);
let resu_2 = data_1 / (data_2 + data_3);
let resu_4 = ((data_1 / (data_2 + data_3)) * data_2) * (data_1 / (data_2 + data_3));  // мощность рессеивания R1
let resu_5 = ((data_1 / (data_2 + data_3)) * data_3) * (data_1 / (data_2 + data_3));  // мощность рессеивания R2


  

  if (selectedValue === "мкВт") {
    resu_4 *= 1000000;
  }
  
  if (selectedValue === "мВт") {
    resu_4 *= 1000;
  }
  
  if (selectedValue === "Вт") {
    resu_4 *= 1;
  }
  
  if (selectedValue === "кВт") {
    resu_4 /= 1000;
  }


  //document.getElementById('total').value = resu_1.toFixed(3);
  //document.getElementById('total_cur').value = resu_2.toFixed(3);
  document.getElementById('total_power_1').value = resu_4.toFixed(3);

  //result_1.textContent = resu_1.toFixed(3);
  //result_2.textContent = resu_2.toFixed(3);
  result_4.textContent = resu_4.toFixed(3);

});

















const list_of_power_2 = document.querySelector('#out_power_2');

list_of_power_2.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



  const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');
const result_5 = document.querySelector('#result_power_2');

const input_voltage_data = document.getElementById('input_voltage').value;
const resistance_r1_data = document.getElementById('resistance_r1').value;
const resistance_r2_data = document.getElementById('resistance_r2').value; 

const data_1 = parseFloat(input_voltage_data, 10);
const data_2 = parseFloat(resistance_r1_data, 10);
const data_3 = parseFloat(resistance_r2_data, 10);

let resu_1 = (data_1 * data_3) / (data_2 + data_3);
let resu_2 = data_1 / (data_2 + data_3);
let resu_4 = ((data_1 / (data_2 + data_3)) * data_2) * (data_1 / (data_2 + data_3));  // мощность рессеивания R1
let resu_5 = ((data_1 / (data_2 + data_3)) * data_3) * (data_1 / (data_2 + data_3));  // мощность рессеивания R2

  

  if (selectedValue === "мкВт") {
    resu_5 *= 1000000;
  }
  
  if (selectedValue === "мВт") {
    resu_5 *= 1000;
  }
  
  if (selectedValue === "Вт") {
    resu_5 *= 1;
  }
  
  if (selectedValue === "кВт") {
    resu_5 /= 1000;
  }

  //document.getElementById('total').value = resu_1.toFixed(3);
  //document.getElementById('total_cur').value = resu_2.toFixed(3);
  document.getElementById('total_power_2').value = resu_5.toFixed(3);

  //result_1.textContent = resu_1.toFixed(3);
  //result_2.textContent = resu_2.toFixed(3);
  result_5.textContent = resu_5.toFixed(3);

});














form.addEventListener("reset", () => {
  form.reset();

  const volt_out_show = document.querySelector('#result');
  const volt_out_sample = 0;
  volt_out_show.textContent = volt_out_sample.toFixed(0);

  const cur_out_show = document.querySelector('#result_current');
  const cur_out_sample = 0;
  cur_out_show.textContent = cur_out_sample.toFixed(0);

  const power_1_out_show = document.querySelector('#result_power_1');
  const power_1_out_sample = 0;
  power_1_out_show.textContent = power_1_out_sample.toFixed(0);

  const power_2_out_show = document.querySelector('#result_power_2');
  const power_2_out_sample = 0;
  power_2_out_show.textContent = power_2_out_sample.toFixed(0);
});









  };
  
  app();
