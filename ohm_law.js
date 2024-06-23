
const app = () => {






  let result_current_show = document.getElementById('total_cur');
  let result_power_show = document.getElementById('total_power');
  let result_resistance_show = document.getElementById('total_resist');
  let result_voltage_show = document.getElementById('total_volt');


  let previousChoice;


  const formCurrent = document.getElementById('stepThree');
  formCurrent.style.display = 'none';

  const formVoltageShow = document.getElementById('watchTwo');
  formVoltageShow.style.display = 'none';

  const formResistanceShow = document.getElementById('watchThree');
  formResistanceShow.style.display = 'none';



/*
  var el = document.getElementById(id);
  el.style.display = el.style.display === 'none' || 'block';
  // none - invisible
  // block - visible
*/


  // обработка выбора radiobutton (что требуется рассчитать)
  document.querySelectorAll('input[type="radio"][name="demo"]').forEach((button) => {
      button.addEventListener('change', function() {
          if (this.checked) {
              //console.log(`Предыдущий выбор: ${previousChoice || "не был сделан"}; Текущий выбор: ${this.value}`);
              previousChoice = this.value; // И вот новый выбор!

            // если требуется рассчитать ТОК
            if (this.value === '1') { 
              const formVoltage = document.getElementById('stepOne');
              formVoltage.style.display = 'block';

              const formResistance = document.getElementById('stepTwo');
              formResistance.style.display = 'block';

              const formCurrent = document.getElementById('stepThree');
              formCurrent.style.display = 'none';

              //---------------------------------------------------------

              const formCurrentShow = document.getElementById('watchOne');
              formCurrentShow.style.display = 'block';

              const formVoltageShow = document.getElementById('watchTwo');
              formVoltageShow.style.display = 'none';

              const formResistanceShow = document.getElementById('watchThree');
              formResistanceShow.style.display = 'none';
            }


            // если требуется рассчитать НАПРЯЖЕНИЕ
            if (this.value === '2') { 
              const formVoltage = document.getElementById('stepOne');
              formVoltage.style.display = 'none';

              const formResistance = document.getElementById('stepTwo');
              formResistance.style.display = 'block';

              const formCurrent = document.getElementById('stepThree');
              formCurrent.style.display = 'block';
              
              //---------------------------------------------------------
              
              const formCurrentShow = document.getElementById('watchOne');
              formCurrentShow.style.display = 'none';

              const formVoltageShow = document.getElementById('watchTwo');
              formVoltageShow.style.display = 'block';

              const formResistanceShow = document.getElementById('watchThree');
              formResistanceShow.style.display = 'none';
            }


            // если требуется рассчитать СОПРОТИВЛЕНИЕ
            if (this.value === '3') { 
              const formVoltage = document.getElementById('stepOne');
              formVoltage.style.display = 'block';

              const formResistance = document.getElementById('stepTwo');
              formResistance.style.display = 'none';

              const formCurrent = document.getElementById('stepThree');
              formCurrent.style.display = 'block';
              
              //---------------------------------------------------------
              
              const formCurrentShow = document.getElementById('watchOne');
              formCurrentShow.style.display = 'none';

              const formVoltageShow = document.getElementById('watchTwo');
              formVoltageShow.style.display = 'none';

              const formResistanceShow = document.getElementById('watchThree');
              formResistanceShow.style.display = 'block';
            }

          }
      });
  });





















  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Отключаем дефолтные обработчики

    const formData = new FormData(e.target);

    const input_voltage_data = formData.get('voltage_name');
    const input_resistance_data = formData.get('resistance_name'); 
    //const input_current_data = formData.get('current_name'); 


    //const input_voltage_data = document.getElementById('voltage_input').value;
    //const input_resistance_data = document.getElementById('resistance_input').value;


    const data_1 = parseFloat(input_voltage_data, 10);    // voltage
    const data_2 = parseFloat(input_resistance_data, 10); // resistance
    const data_3 = parseFloat(input_current_data, 10);    // current


    let result_current = data_1 / data_2;     // расчётный ток
    let result_power = data_1 * data_2;       // расчётная мощность
    let result_voltage = data_3 * data_2;     // расчётное напряжение
    let result_resistance = data_1 / data_3;  // расчётное сопротивление




    
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
