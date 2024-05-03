let connection_diagram = 0;
let option_value = 1;
const app = () => {





    const form = document.getElementById('form')
    
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
 
    
    const result_1 = document.querySelector('#total');
   
    
    
    const resistance_r1_data = document.getElementById('capacity_c1').value;
    const resistance_r2_data = document.getElementById('capacity_c2').value;
    const resistance_r3_data = document.getElementById('capacity_c3').value;
    const resistance_r4_data = document.getElementById('capacity_c4').value;
    const resistance_r5_data = document.getElementById('capacity_c5').value;
    
    let data_1 = parseFloat(resistance_r1_data, 10);
    let data_2 = parseFloat(resistance_r2_data, 10);
    let data_3 = parseFloat(resistance_r3_data, 10);
    let data_4 = parseFloat(resistance_r4_data, 10);
    let data_5 = parseFloat(resistance_r5_data, 10);
    





//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_1 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_1 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_1 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_1 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_1 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_2 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_3 = document.getElementById('input_capacity_3');
let selectedValue_of_input_capacity_3 = list_of_input_capacity_3.options[list_of_input_capacity_3.selectedIndex].value;


if (selectedValue_of_input_capacity_3 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_3 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_3 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_3 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_3 === "Ф") {
  data_3 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_4 = document.getElementById('input_capacity_4');
let selectedValue_of_input_capacity_4 = list_of_input_capacity_4.options[list_of_input_capacity_4.selectedIndex].value;


if (selectedValue_of_input_capacity_4 === "пФ") {
  data_4 /= 1000000000000;

}

if (selectedValue_of_input_capacity_4 === "нФ") {
  data_4 /= 1000000000;

}

if (selectedValue_of_input_capacity_4 === "мкФ") {
  data_4 /= 1000000;

}

if (selectedValue_of_input_capacity_4 === "мФ") {
  data_4 /= 1000;
  
}

if (selectedValue_of_input_capacity_4 === "Ф") {
  data_4 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_5 = document.getElementById('input_capacity_5');
let selectedValue_of_input_capacity_5 = list_of_input_capacity_5.options[list_of_input_capacity_5.selectedIndex].value;


if (selectedValue_of_input_capacity_5 === "пФ") {
  data_5 /= 1000000000000;

}

if (selectedValue_of_input_capacity_5 === "нФ") {
  data_5 /= 1000000000;

}

if (selectedValue_of_input_capacity_5 === "мкФ") {
  data_5 /= 1000000;

}

if (selectedValue_of_input_capacity_5 === "мФ") {
  data_5 /= 1000;
  
}

if (selectedValue_of_input_capacity_5 === "Ф") {
  data_5 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////



























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
      let q3 = document.getElementById("capacity_c3");
      let q4 = document.getElementById("capacity_c4");
      let q5 = document.getElementById("capacity_c5");
  
      if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_1 = 1 / ((1 / data_1) + (1 / data_2)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
        resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3) + (1 / data_4)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
        resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3) + (1 / data_4) + (1 / data_5)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
      }
    }













    let resu_2 = 0;
    if (connection_diagram === 2) {
      let q3 = document.getElementById("capacity_c3");
      let q4 = document.getElementById("capacity_c4");
      let q5 = document.getElementById("capacity_c5");
  
      if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_2 = data_1 + data_2; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
        resu_2 = data_1 + data_2 + data_3; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
        resu_2 = data_1 + data_2 + data_3 + data_4; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
      if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
        resu_2 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
      }
    }
    
    
    

    
    

    
    let select_resistance = document.getElementById('out_resistance');
    let select_value_resistance = select_resistance.options[select_resistance.selectedIndex].value;
    
    let poop = select_value_resistance.toString();
    
    
    //console.log(resu_1);




    // предпочтительнее фарады (Ф)
    if((resu_1 < 1000) && (resu_1 > 1)) {
      poop = "Ф";
      let select_resistance = document.getElementById('out_resistance');
      select_resistance.value = poop;
    }



    // предпочтительнее миллифарады (мФ)
    if((resu_1 < 1) && (resu_1 > 0.001)) {
      poop = "мФ";
      let select_resistance = document.getElementById('out_resistance');
      select_resistance.value = poop;
    }



    // предпочтительнее микрофарады (мкФ)
    if((resu_1 < 0.001) && (resu_1 > 0.000001)) {
      poop = "мкФ";
      let select_resistance = document.getElementById('out_resistance');
      select_resistance.value = poop;
    }


    // предпочтительнее нанофарады (нФ)
    if((resu_1 < 0.000001) && (resu_1 > 0.000000001)) {
      poop = "нФ";
      let select_resistance = document.getElementById('out_resistance');
      select_resistance.value = poop;
    }


    // предпочтительнее пикофарады (пФ)
    if((resu_1 < 0.000000001) && (resu_1 > 0.000000000001)) {
      poop = "пФ";
      let select_resistance = document.getElementById('out_resistance');
      select_resistance.value = poop;
    }




   
    select_resistance = document.getElementById('out_resistance');
    select_value_resistance = select_resistance.options[select_resistance.selectedIndex].value;
    
    poop = select_value_resistance.toString();


    
 
    if (poop === "Ф") {
      resu_1 *= 1;
      resu_2 *= 1;
    }
    
    if (poop === "мФ") {
      resu_1 *= 1000;
      resu_2 *= 1000;
    }
       
    if (poop === "мкФ") {
      resu_1 *= 1000000;
      resu_2 *= 1000000;
    }

    if (poop === "нФ") {
      resu_1 *= 1000000000;
      resu_2 *= 1000000000;
    }
    
    if (poop === "пФ") {
      resu_1 *= 1000000000000;
      resu_2 *= 1000000000000;
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
    
    
    
    
    
    
    


    
    
    
    
    





































    
    
    
    // происходит пересчёт, если для результата в строке "Общая ёмкость" была выбрана другая размерность из выпадающего списка
    const list_of_resistance = document.querySelector('#out_resistance');
    
    list_of_resistance.addEventListener('change', function(e) {  
      let selectedValue = e.target.value;
    
    
    
      const result_1 = document.querySelector('#total');

    
      const resistance_r1_data = document.getElementById('capacity_c1').value;
      const resistance_r2_data = document.getElementById('capacity_c2').value;
      const resistance_r3_data = document.getElementById('capacity_c3').value;
      const resistance_r4_data = document.getElementById('capacity_c4').value;
      const resistance_r5_data = document.getElementById('capacity_c5').value;
    
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
       

  











      //////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_1 = document.getElementById('input_capacity_1');
let selectedValue_of_input_capacity_1 = list_of_input_capacity_1.options[list_of_input_capacity_1.selectedIndex].value;


if (selectedValue_of_input_capacity_1 === "пФ") {
  data_1 /= 1000000000000;

}

if (selectedValue_of_input_capacity_1 === "нФ") {
  data_1 /= 1000000000;

}

if (selectedValue_of_input_capacity_1 === "мкФ") {
  data_1 /= 1000000;

}

if (selectedValue_of_input_capacity_1 === "мФ") {
  data_1 /= 1000;
  
}

if (selectedValue_of_input_capacity_1 === "Ф") {
  data_1 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_2 = document.getElementById('input_capacity_2');
let selectedValue_of_input_capacity_2 = list_of_input_capacity_2.options[list_of_input_capacity_2.selectedIndex].value;


if (selectedValue_of_input_capacity_2 === "пФ") {
  data_2 /= 1000000000000;

}

if (selectedValue_of_input_capacity_2 === "нФ") {
  data_2 /= 1000000000;

}

if (selectedValue_of_input_capacity_2 === "мкФ") {
  data_2 /= 1000000;

}

if (selectedValue_of_input_capacity_2 === "мФ") {
  data_2 /= 1000;
  
}

if (selectedValue_of_input_capacity_2 === "Ф") {
  data_2 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_3 = document.getElementById('input_capacity_3');
let selectedValue_of_input_capacity_3 = list_of_input_capacity_3.options[list_of_input_capacity_3.selectedIndex].value;


if (selectedValue_of_input_capacity_3 === "пФ") {
  data_3 /= 1000000000000;

}

if (selectedValue_of_input_capacity_3 === "нФ") {
  data_3 /= 1000000000;

}

if (selectedValue_of_input_capacity_3 === "мкФ") {
  data_3 /= 1000000;

}

if (selectedValue_of_input_capacity_3 === "мФ") {
  data_3 /= 1000;
  
}

if (selectedValue_of_input_capacity_3 === "Ф") {
  data_3 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_4 = document.getElementById('input_capacity_4');
let selectedValue_of_input_capacity_4 = list_of_input_capacity_4.options[list_of_input_capacity_4.selectedIndex].value;


if (selectedValue_of_input_capacity_4 === "пФ") {
  data_4 /= 1000000000000;

}

if (selectedValue_of_input_capacity_4 === "нФ") {
  data_4 /= 1000000000;

}

if (selectedValue_of_input_capacity_4 === "мкФ") {
  data_4 /= 1000000;

}

if (selectedValue_of_input_capacity_4 === "мФ") {
  data_4 /= 1000;
  
}

if (selectedValue_of_input_capacity_4 === "Ф") {
  data_4 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////


let list_of_input_capacity_5 = document.getElementById('input_capacity_5');
let selectedValue_of_input_capacity_5 = list_of_input_capacity_5.options[list_of_input_capacity_5.selectedIndex].value;


if (selectedValue_of_input_capacity_5 === "пФ") {
  data_5 /= 1000000000000;

}

if (selectedValue_of_input_capacity_5 === "нФ") {
  data_5 /= 1000000000;

}

if (selectedValue_of_input_capacity_5 === "мкФ") {
  data_5 /= 1000000;

}

if (selectedValue_of_input_capacity_5 === "мФ") {
  data_5 /= 1000;
  
}

if (selectedValue_of_input_capacity_5 === "Ф") {
  data_5 *= 1;
  
}


//////////////////////////////////////////////////////////////////////////////////////////////






  
  
  
      let resu_1 = 0;
      if (connection_diagram === 1) {
        let q3 = document.getElementById("capacity_c3");
        let q4 = document.getElementById("capacity_c4");
        let q5 = document.getElementById("capacity_c5");
    
        if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_1 = 1 / ((1 / data_1) + (1 / data_2)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
          resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3) + (1 / data_4)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
          resu_1 = 1 / ((1 / data_1) + (1 / data_2) + (1 / data_3) + (1 / data_4) + (1 / data_5)); // общее сопротивление при ПОСЛЕДОВАТЕЛЬНОМ соединении
        }
      }
  
  
  
      
  
  
  
  
  
  
      let resu_2 = 0;
      if (connection_diagram === 2) {
        let q3 = document.getElementById("capacity_c3");
        let q4 = document.getElementById("capacity_c4");
        let q5 = document.getElementById("capacity_c5");
    
        if ((q3.disabled === true) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_2 = data_1 + data_2; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === true) && (q5.disabled === true)) {
          resu_2 = data_1 + data_2 + data_3; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === true)) {
          resu_2 = data_1 + data_2 + data_3 + data_4; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
        if ((q3.disabled === false) && (q4.disabled === false) && (q5.disabled === false)) {
          resu_2 = data_1 + data_2 + data_3 + data_4 + data_5; // общее сопротивление при ПАРАЛЛЕЛЬНОМ соединении
        }
      }
      
      
      
      
    

      //
      

      if (selectedValue === "пФ") {
        resu_1 *= 1000000000000;
        resu_2 *= 1000000000000;
      }
        
      if (selectedValue === "нФ") {
        resu_1 *= 1000000000;
        resu_2 *= 1000000000;
      }
      
      if (selectedValue === "мкФ") {
        resu_1 *= 1000000;
        resu_2 *= 1000000;
      }
      
      if (selectedValue === "мФ") {
        resu_1 *= 1000;
        resu_2 *= 1000;
      }

      if (selectedValue === "Ф") {
        resu_1 *= 1;
        resu_2 *= 1;
      }

      //console.log(connection_diagram);
      //console.log(resu_1);
      //console.log(resu_2);
    
      document.querySelector('#total').value = resu_1.toFixed(3);
      document.querySelector('#total').value = resu_2.toFixed(3);
    

      //console.log(resu_1.toFixed(3));



      /*
      if (connection_diagram === 1) {
      result_1.textContent = resu_1.toFixed(3);
      } else {
        result_1.textContent = resu_2.toFixed(3);
      }
      */

      if (connection_diagram === 1) {
        document.getElementById('total').value = resu_1.toFixed(3);
        result_1.textContent = resu_1.toFixed(3);
       
        } 
    
        if (connection_diagram === 2) {
          document.getElementById('total').value = resu_2.toFixed(3);
          result_1.textContent = resu_2.toFixed(3);
        } 
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    form.addEventListener("reset", () => {
      form.reset();
    
      const volt_out_show = document.querySelector('#total');
      const volt_out_sample = 0;
      volt_out_show.textContent = volt_out_sample.toFixed(0);   
      

      
      let q3 = document.getElementById("capacity_c3");
      let q4 = document.getElementById("capacity_c4");
      let q5 = document.getElementById("capacity_c5");

      q3.disabled = true;
      q4.disabled = true;
      q5.disabled = true;

      connection_diagram = 1;
    });
    
    
    
    
    
    
    
    
    
      };
      
      app();
    