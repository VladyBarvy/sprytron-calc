
const app = () => {






  let result_current_show = document.getElementById('total_cur');
  let result_power_show = document.getElementById('total_power');














  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Отключаем дефолтные обработчики

    const formData = new FormData(e.target);

    const input_voltage_data = formData.get('voltage_name');
    const input_resistance_data = formData.get('resistance_name'); 


    //const input_voltage_data = document.getElementById('voltage_input').value;
    //const input_resistance_data = document.getElementById('resistance_input').value;


    const data_1 = parseFloat(input_voltage_data, 10);
    const data_2 = parseFloat(input_resistance_data, 10);


    let result_current = data_1 / data_2;  // расчётный ток
    let result_power = data_1 * data_2;  // расчётная мощность
    // let resu_3 = (data_2 + data_3) / data_3;  // коэффициент деления


    

    document.getElementById('total_cur').value = result_current.toFixed(3);
    result_current_show.textContent = result_current.toFixed(3);



    document.getElementById('total_power').value = result_power.toFixed(3);
    result_current_show.textContent = result_power.toFixed(3);

    });









   


    form.addEventListener("reset", () => {
      form.reset();
    /*
      const cur_1 = document.getElementById('total_cur');
      const cur_11 = 0;
      cur_1.textContent = cur_11.toFixed(0);
    
      const pow_1 = document.getElementById('total_power');
      const pow_11 = 0;
      pow_1.textContent = pow_11.toFixed(0);
*/
    });
    
};

app();
