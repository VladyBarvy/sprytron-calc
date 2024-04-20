const app = () => {



const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
event.preventDefault();

const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');
const result_4 = document.querySelector('#result_reactive');

const input_voltage_data = document.getElementById('input_voltage').value;
const capacity_r1_data = document.getElementById('capacity_r1').value;
const capacity_r2_data = document.getElementById('capacity_r2').value; 

let data_1 = parseFloat(input_voltage_data, 10);
let data_2 = parseFloat(capacity_r1_data, 10);
let data_3 = parseFloat(capacity_r2_data, 10);




/////////////////////////////////////////////////////////////////

let list_of_input_voltage = document.getElementById('input_volt');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;



if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;

}

if (selectedValue_of_input_voltage === "В") {
  data_1 *= 1;

}

if (selectedValue_of_input_voltage === "мкВ") {
  data_1 /= 1000000;
  
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
  
}



//////////////////////////////////////////////////////////////





let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_2 *= 1;
  
}




///////////////////////////////////////////////////////////////////



let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_3 *= 1;
  
}






//data_2 = data_2 * 0.000001;
//data_3 = data_3 * 0.000001;

let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение


let react_resist_data_2 = 1 / (314 * data_2);
let react_resist_data_3 = 1 / (314 * data_3);

let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель



let resu_3_koeff_divide = data_1 / resu_1;  // коэффициент деления


let resu_4_reactive = 1 / (2 * 3.14 * 50 * ((data_2 * data_3) / (data_2 + data_3))); // реактивное сопротивление









// resu_3_koeff_divide
// resu_4_reactive



/*
let e = document.getElementById("out_cur");
let value_cur_show_me = e.value;
let text_me = e.options[e.selectedIndex].text;
*/


// ток через делитель
let select_current = document.getElementById('out_cur');
let select_value_current = select_current.options[select_current.selectedIndex].value;

const poop = select_value_current.toString();



// выходное напряжение
let select_voltage = document.getElementById('out_volt');
let select_value_voltage = select_voltage.options[select_voltage.selectedIndex].value;

const goop = select_value_voltage.toString();




// реактивное сопротивление
let select_reactive = document.getElementById('out_reactive');
let select_reactive_resistance = select_reactive.options[select_reactive.selectedIndex].value;

const react_resist = select_reactive_resistance.toString();






if (react_resist === "Ом") {
  resu_4_reactive *= 1;
}

if (react_resist === "кОм") {
  resu_4_reactive /= 1000;
}

if (react_resist === "МОм") {
  resu_4_reactive /= 1000000;
}

if (react_resist === "ГОм") {
  resu_4_reactive /= 1000000000;
}







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

//resu_4_reactive 


document.getElementById('total').value = resu_1.toFixed(3);
document.getElementById('total_cur').value = resu_2.toFixed(3);
document.getElementById('total_koeff_divid_cap').value = resu_3_koeff_divide.toFixed(3);
document.getElementById('total_reactive').value = resu_4_reactive.toFixed(3);

result_1.textContent = resu_1.toFixed(3);
result_2.textContent = resu_2.toFixed(3);
result_3.textContent = resu_3.toFixed(3);
result_4.textContent = resu_4.toFixed(3);

});





//num.toLocaleString();















const list_of_currents = document.querySelector('#out_cur');

list_of_currents.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');

const input_voltage_data = document.getElementById('input_voltage').value;
const capacity_r1_data = document.getElementById('capacity_r1').value;
const capacity_r2_data = document.getElementById('capacity_r2').value; 

let data_1 = parseFloat(input_voltage_data, 10);
let data_2 = parseFloat(capacity_r1_data, 10);
let data_3 = parseFloat(capacity_r2_data, 10);





let list_of_input_voltage = document.getElementById('input_volt');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;



if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;

}

if (selectedValue_of_input_voltage === "В") {
  data_1 *= 1;

}

if (selectedValue_of_input_voltage === "мкВ") {
  data_1 /= 1000000;
  
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
  
}

//////////////////////////////////////////////////////////////





let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_2 *= 1;
  
}




///////////////////////////////////////////////////////////////////



let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_3 *= 1;
  
}


//data_2 = data_2 * 0.000001;
//data_3 = data_3 * 0.000001;

let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение


let react_resist_data_2 = 1 / (314 * data_2);
let react_resist_data_3 = 1 / (314 * data_3);

let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель



let resu_3_koeff_divide = data_1 / resu_1;  // коэффициент деления


let resu_4_reactive = 1 / (2 * 3.14 * 50 * ((data_2 * data_3) / (data_2 + data_3))); // реактивное сопротивление



  

  
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
const capacity_r1_data = document.getElementById('capacity_r1').value;
const capacity_r2_data = document.getElementById('capacity_r2').value; 







let data_1 = parseFloat(input_voltage_data, 10);
let data_2 = parseFloat(capacity_r1_data, 10);
let data_3 = parseFloat(capacity_r2_data, 10);







let list_of_input_voltage = document.getElementById('input_volt');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;



if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;

}

if (selectedValue_of_input_voltage === "В") {
  data_1 *= 1;

}

if (selectedValue_of_input_voltage === "мкВ") {
  data_1 /= 1000000;
  
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
  
}




//////////////////////////////////////////////////////////////





let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_2 *= 1;
  
}




///////////////////////////////////////////////////////////////////



let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_3 *= 1;
  
}







//data_2 = data_2 * 0.000001;
//data_3 = data_3 * 0.000001;

let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение


let react_resist_data_2 = 1 / (314 * data_2);
let react_resist_data_3 = 1 / (314 * data_3);

let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель


  

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



























const list_of_reactive = document.querySelector('#out_reactive');

list_of_reactive.addEventListener('change', function(e) {  
  let selectedValue = e.target.value;



  const result_1 = document.querySelector('#result');
const result_2 = document.querySelector('#result_current');

const input_voltage_data = document.getElementById('input_voltage').value;
const capacity_r1_data = document.getElementById('capacity_r1').value;
const capacity_r2_data = document.getElementById('capacity_r2').value; 







let data_1 = parseFloat(input_voltage_data, 10);
let data_2 = parseFloat(capacity_r1_data, 10);
let data_3 = parseFloat(capacity_r2_data, 10);







let list_of_input_voltage = document.getElementById('input_volt');
let selectedValue_of_input_voltage = list_of_input_voltage.options[list_of_input_voltage.selectedIndex].value;







if (selectedValue_of_input_voltage === "мВ") {
  data_1 /= 1000;

}

if (selectedValue_of_input_voltage === "В") {
  data_1 *= 1;

}

if (selectedValue_of_input_voltage === "мкВ") {
  data_1 /= 1000000;
  
}

if (selectedValue_of_input_voltage === "кВ") {
  data_1 *= 1000;
  
}




//////////////////////////////////////////////////////////////





let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_2 *= 1;
  
}




///////////////////////////////////////////////////////////////////



let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_3 *= 1;
  
}







//data_2 = data_2 * 0.000001;
//data_3 = data_3 * 0.000001;

let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение


let react_resist_data_2 = 1 / (314 * data_2);
let react_resist_data_3 = 1 / (314 * data_3);

let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель




let resu_3_koeff_divide = data_1 / resu_1;  // коэффициент деления


let resu_4_reactive = 1 / (2 * 3.14 * 50 * ((data_2 * data_3) / (data_2 + data_3))); // реактивное сопротивление






  

  if (selectedValue === "Ом") {
    resu_4_reactive *= 1;
  }
  
  if (selectedValue === "кОм") {
    resu_4_reactive /= 1000;
  }
  
  if (selectedValue === "МОм") {
    resu_4_reactive /= 1000000;
  }
  
  if (selectedValue === "ГОм") {
    resu_4_reactive /= 1000000000;
  }


  document.getElementById('total_reactive').value = resu_4_reactive.toFixed(3);
//document.getElementById('total_cur').value = resu_2.toFixed(3);

  result_4.textContent = resu_4_reactive.toFixed(3);
//result_2.textContent = resu_2.toFixed(3);

});

























form.addEventListener("reset", () => {
  form.reset();

  const volt_out_show = document.querySelector('#result');
  const volt_out_sample = 0;
  volt_out_show.textContent = volt_out_sample.toFixed(0);

  const cur_out_show = document.querySelector('#result_current');
  const cur_out_sample = 0;
  cur_out_show.textContent = cur_out_sample.toFixed(0);


});









  };
  
  app();
