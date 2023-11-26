let connection_diagram = 0;
let option_value = 1;
const app = () => {





    const form = document.getElementById('form')
    
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
 
    
    const result_1 = document.querySelector('#result');
   
    
    
    const resistance_r1_data = document.getElementById('resistance_r1').value;
    const resistance_r2_data = document.getElementById('resistance_r2').value;
    const resistance_r3_data = document.getElementById('resistance_r3').value;
    const resistance_r4_data = document.getElementById('resistance_r4').value;
    const resistance_r5_data = document.getElementById('resistance_r5').value;
    
    let data_1 = parseFloat(resistance_r1_data, 10);
    let data_2 = parseFloat(resistance_r2_data, 10);
    let data_3 = parseFloat(resistance_r3_data, 10);
    let data_4 = parseFloat(resistance_r4_data, 10);
    let data_5 = parseFloat(resistance_r5_data, 10);
    






    let options = document.getElementsByName('demo');
 
    for(let i = 0; i < options.length; i +=1 ) {
        if(options[i].checked){
            option_value = options[i].value;
            connection_diagram = Number(option_value);
            break;
        }
    }
     
    
  







    let resu_1 = 0;
    if (connection_diagram === 1) {
      let q3 = document.getElementById("resistance_r3");
      let q4 = document.getElementById("resistance_r4");
      let q5 = document.getElementById("resistance_r5");
  
      if (q3.disabled === true) {
        data_3 = 0;
        resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
      if (q4.disabled === true) {
        data_4 = 0;
        resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
      if (q5.disabled === true) {
        data_5 = 0;
        resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
    }



    






    let resu_2 = 0;
    if (connection_diagram === 2) {
      let q3 = document.getElementById("resistance_r3");
      let q4 = document.getElementById("resistance_r4");
      let q5 = document.getElementById("resistance_r5");
  
      if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_2 = 1 / ((1/data_1) + (1/data_2)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
        resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3) + (1/data_4)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
        resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3) + (1/data_4) + (1/data_5)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
    }
    
    
    

    
    

    
    let select_resistance = document.getElementById('out_resistance');
    let select_value_resistance = select_resistance.options[select_resistance.selectedIndex].value;
    
    const poop = select_value_resistance.toString();
    
    
    
    
    if (poop === "Ом") {
      resu_1 /= 1;
      resu_2 /= 1;
    }
    
    if (poop === "кОм") {
      resu_1 /= 1000;
      resu_2 /= 1000;
    }
       
    if (poop === "МОм") {
      resu_1 /= 1000000;
      resu_2 /= 1000000;
    }

    if (poop === "ГОм") {
      resu_1 /= 1000000;
      resu_2 /= 1000000;
    }
    
    

    
    
    
    if (connection_diagram === 1) {
    document.getElementById('total').value = resu_1.toFixed(3);
    result_1.textContent = resu_1.toFixed(3);
    } 

    if (connection_diagram === 2) {
      document.getElementById('total').value = resu_2.toFixed(3);
      result_1.textContent = resu_2.toFixed(3);
    } 






    
    });
    
    
    
    
    
    //num.toLocaleString();
    
    
    
    
    
    
    


    
    
    
    
    
    
    
    
    
    const list_of_resistance = document.querySelector('#out_resistance');
    
    list_of_resistance.addEventListener('change', function(e) {  
      let selectedValue = e.target.value;
    
    
    
      const result_1 = document.querySelector('#result');

    
      const resistance_r1_data = document.getElementById('resistance_r1').value;
      const resistance_r2_data = document.getElementById('resistance_r2').value;
      const resistance_r3_data = document.getElementById('resistance_r3').value;
      const resistance_r4_data = document.getElementById('resistance_r4').value;
      const resistance_r5_data = document.getElementById('resistance_r5').value;
    
      let data_1 = parseFloat(resistance_r1_data, 10);
      let data_2 = parseFloat(resistance_r2_data, 10);
      let data_3 = parseFloat(resistance_r3_data, 10);
      let data_4 = parseFloat(resistance_r4_data, 10);
      let data_5 = parseFloat(resistance_r5_data, 10);
      
  



      let options = document.getElementsByName('demo');
 
      for(let i = 0; i < options.length; i +=1 ) {
          if(options[i].checked){
              option_value = options[i].value;
              connection_diagram = Number(option_value);
              break;
          }
      }
       

  
  
  
  
  
  
  
      let resu_1 = 0;
      if (connection_diagram === 1) {
        let q3 = document.getElementById("resistance_r3");
        let q4 = document.getElementById("resistance_r4");
        let q5 = document.getElementById("resistance_r5");
    
        if (q3.disabled === true) {
          data_3 = 0;
          resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
        if (q4.disabled === true) {
          data_4 = 0;
          resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
        if (q5.disabled === true) {
          data_5 = 0;
          resu_1 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
      }
  
  
  
      
  
  
  
  
  
  
      let resu_2 = 0;
      if (connection_diagram === 2) {
        let q3 = document.getElementById("resistance_r3");
        let q4 = document.getElementById("resistance_r4");
        let q5 = document.getElementById("resistance_r5");
    
        if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_2 = 1 / ((1/data_1) + (1/data_2)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
          resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3) + (1/data_4)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
          resu_2 = 1 / ((1/data_1) + (1/data_2) + (1/data_3) + (1/data_4) + (1/data_5)); // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
      }
      
      
      
    

    
      

      if (selectedValue === "ГОм") {
        resu_1 /= 1000000000;
        resu_2 /= 1000000000;
      }
        
      if (selectedValue === "МОм") {
        resu_1 /= 1000000;
        resu_2 /= 1000000;
      }
      
      if (selectedValue === "кОм") {
        resu_1 /= 1000;
        resu_2 /= 1000;
      }
      
      if (selectedValue === "Ом") {
        resu_1 /= 1;
        resu_2 /= 1;
      }



    

    
    
      document.getElementById('total').value = resu_1.toFixed(3);
 
    
      result_1.textContent = resu_1.toFixed(3);
    
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    form.addEventListener("reset", () => {
      form.reset();
    
      const volt_out_show = document.querySelector('#result');
      const volt_out_sample = 0;
      volt_out_show.textContent = volt_out_sample.toFixed(0);    
      connection_diagram = 1;
    });
    
    
    
    
    
    
    
    
    
      };
      
      app();
    