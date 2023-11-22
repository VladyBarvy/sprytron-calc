const app = () => {



    const form = document.getElementById('form')
    
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    
    const result_1 = document.querySelector('#result');
    const result_2 = document.querySelector('#result_current');
    
    const input_voltage_data = document.getElementById('input_voltage').value;
    const capacity_r1_data = document.getElementById('capacity_r1').value;
    const capacity_r2_data = document.getElementById('capacity_r2').value; 
    
    let data_1 = parseFloat(input_voltage_data, 10);
    let data_2 = parseFloat(capacity_r1_data, 10);
    let data_3 = parseFloat(capacity_r2_data, 10);
    
    data_2 = data_2 * 0.000001;
    data_3 = data_3 * 0.000001;
    
    let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение
    
    
    let react_resist_data_2 = 1 / (314 * data_2);
    let react_resist_data_3 = 1 / (314 * data_3);
    
    let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель
    
    
    
    
    /*
    let e = document.getElementById("out_cur");
    let value_cur_show_me = e.value;
    let text_me = e.options[e.selectedIndex].text;
    */
    
    let select_current = document.getElementById('out_cur');
    let select_value_current = select_current.options[select_current.selectedIndex].value;
    
    const poop = select_value_current.toString();
    
    
    
    
    let select_voltage = document.getElementById('out_volt');
    let select_value_voltage = select_voltage.options[select_voltage.selectedIndex].value;
    
    const goop = select_value_voltage.toString();
    
    
    
    
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
    
    
    
    
    document.getElementById('total').value = resu_1.toFixed(3);
    document.getElementById('total_cur').value = resu_2.toFixed(3);
    
    result_1.textContent = resu_1.toFixed(3);
    result_2.textContent = resu_2.toFixed(3);
    
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
    
    data_2 = data_2 * 0.000001;
    data_3 = data_3 * 0.000001;
    
    let resu_1 = (data_1 * data_2) / (data_2 + data_3); // выходное напряжение
    
    
    let react_resist_data_2 = 1 / (314 * data_2);
    let react_resist_data_3 = 1 / (314 * data_3);
    
    let resu_2 = data_1 / (react_resist_data_2 + react_resist_data_3);    // ток через делитель
    
    
      
    
      
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
    
    data_2 = data_2 * 0.000001;
    data_3 = data_3 * 0.000001;
    
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
    