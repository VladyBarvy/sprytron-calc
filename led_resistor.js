const app = () => {

  let resistance_show = document.getElementById('led_resistance_result');
  let power_show = document.getElementById('led_power_result');
  let resistor_show = document.getElementById('resistor_power_result');


  const form = document.getElementById('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Отключаем дефолтные обработчики

    // const formData = new FormData(e.target);

    // const voltage_supply_value = formData.get('input_voltage');
    // const direct_voltage_led = formData.get('led_voltage'); 
    // const direct_current_led = formData.get('led_current'); 


    const voltage_supply_value = document.getElementById('input_voltage').value;
    const direct_voltage_led = document.getElementById('led_voltage').value;
    const direct_current_led = document.getElementById('led_current').value;


    let data_1 = parseFloat(voltage_supply_value, 10); // voltage supply
    let data_2 = parseFloat(direct_voltage_led, 10);   // direct voltage led
    let data_3 = parseFloat(direct_current_led, 10);   // direct current led


    data_3 *= 0.001;


    let result_power_led = 0;
    let result_power_resistor = 0;
    let result_resistance = 0;


    result_resistance = (data_1 - data_2) / data_3;             // расчётное сопротивление
    result_power_led = data_2 * data_3;                         // расчётная мощность на светодиоде
    result_power_resistor = data_3 * data_3 * result_resistance;  // расчётная мощность на резисторе

    // результат расчёта СОПРОТИВЛЕНИЕ
    document.getElementById('led_resistance_result').value = result_resistance.toFixed(3);

    // результат расчёта МОЩНОСТЬ РАССЕИВАНИЯ на светодиоде
    document.getElementById('led_power_result').value = result_power_led.toFixed(3);

    // результат расчёта МОЩНОСТЬ РАССЕИВАНИЯ на резисторе
    document.getElementById('resistor_power_result').value = result_power_resistor.toFixed(3);
 

  });




  form.addEventListener("reset", () => {
    form.reset();
  
    const a_1 = document.getElementById('input_voltage');
    const a_11 = 0;
    a_1.textContent = a_11.toFixed(0);
  
    const a_2 = document.getElementById('led_voltage');
    const a_22 = 0;
    a_2.textContent = a_22.toFixed(0);

    const a_3 = document.getElementById('led_current');
    const a_33 = 0;
    a_3.textContent = a_33.toFixed(0);

    const a_4 = document.getElementById('led_resistance_result');
    const a_44 = 0;
    a_4.textContent = a_44.toFixed(0);

    const a_5 = document.getElementById('led_power_result');
    const a_55 = 0;
    a_5.textContent = a_55.toFixed(0);

    const a_6 = document.getElementById('resistor_power_result');
    const a_66 = 0;
    a_6.textContent = a_66.toFixed(0);


  });




};

app();
