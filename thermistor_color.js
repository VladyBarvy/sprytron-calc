const app = () => {
  const form = document.getElementById('form');

  let data_1 = 0;
  let data_2 = 0;
  let data_3 = 0;
  let data_4 = '';




  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const color1 = parseInt(document.getElementById('color1').value, 10);


    let input_color_1 = document.getElementById('color1');
    let select_input_color_1 = input_color_1.options[input_color_1.selectedIndex].value;
    if (select_input_color_1 === "Чёрный") {
      data_1 = 1;
    }
    if (select_input_color_1 === "Коричневый") {
      data_1 = 2;
    }
    if (select_input_color_1 === "Красный") {
      data_1 = 3;
    }
    if (select_input_color_1 === "Оранжевый") {
      data_1 = 4;
    }
    if (select_input_color_1 === "Жёлтый") {
      data_1 = 5;
    }
    if (select_input_color_1 === "Зелёный") {
      data_1 = 6;
    }
    if (select_input_color_1 === "Синий") {
      data_1 = 7;
    }
    if (select_input_color_1 === "Фиолетовый") {
      data_1 = 8;
    }
    if (select_input_color_1 === "Серый") {
      data_1 = 9;
    }



    let input_color_2 = document.getElementById('color2');
    let select_input_color_2 = input_color_2.options[input_color_2.selectedIndex].value;
    if (select_input_color_2 === "Чёрный") {
      data_2 = 1;
    }
    if (select_input_color_2 === "Коричневый") {
      data_2 = 2;
    }
    if (select_input_color_2 === "Красный") {
      data_2 = 3;
    }
    if (select_input_color_2 === "Оранжевый") {
      data_2 = 4;
    }
    if (select_input_color_2 === "Жёлтый") {
      data_2 = 5;
    }
    if (select_input_color_2 === "Зелёный") {
      data_2 = 6;
    }
    if (select_input_color_2 === "Синий") {
      data_2 = 7;
    }
    if (select_input_color_2 === "Фиолетовый") {
      data_2 = 8;
    }
    if (select_input_color_2 === "Белый") {
      data_2 = 0;
    }




    let input_color_3 = document.getElementById('color3');
    let select_input_color_3 = input_color_3.options[input_color_3.selectedIndex].value;
    if (select_input_color_3 === "Золотой") {
      data_3 = 0.01;
    }
    if (select_input_color_3 === "Серебряный") {
      data_3 = 0.1;
    }
    if (select_input_color_3 === "Чёрный") {
      data_3 = 1;
    }
    if (select_input_color_3 === "Коричневый") {
      data_3 = 10;
    }
    if (select_input_color_3 === "Красный") {
      data_3 = 100;
    }



    let input_color_4 = document.getElementById('color4');
    let select_input_color_4 = input_color_4.options[input_color_4.selectedIndex].value;
    if (select_input_color_4 === "Золотой") {
      data_4 = ' ±5%';
    }
    if (select_input_color_4 === "Коричневый") {
      data_4 = ' ±1%';
    }
    if (select_input_color_4 === "Красный") {
      data_4 = ' ±2%';
    }
    if (select_input_color_4 === "Оранжевый") {
      data_4 = ' ±3%';
    }


    // Расчёт сопротивления
    //let resistance = (((data_1 * 10000) + (data_2 * 1000)) * data_3);
    let resistance = (((data_1 * 10) + data_2) * 1000) * data_3;

    document.getElementById('resistance_show').value = resistance + `${data_4}`;
    //document.getElementById('resistance_show').textContent = resistance + `${data_4}`;

  });

  form.addEventListener("reset", () => {
    form.reset();
    document.getElementById('resistance_show').value = '';
  });
};

app();
