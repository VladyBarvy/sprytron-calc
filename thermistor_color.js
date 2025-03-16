const app = () => {
  const form = document.getElementById('form');

  let data_1 = 0;
  let data_2 = 0;
  let data_3 = 0;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const color1 = parseInt(document.getElementById('color1').value, 10);


    let input_color_1 = document.getElementById('color1');
    let select_input_color_1 = input_color_1.options[input_color_1.selectedIndex].value;
    if (select_input_color_1 === "Чёрный") {
      data_1 = 1;
    }

    let input_color_2 = document.getElementById('color2');
    let select_input_color_2 = input_color_2.options[input_color_2.selectedIndex].value;
    if (select_input_color_2 === "Чёрный") {
      data_2 = 1;
    }

    let input_color_3 = document.getElementById('color3');
    let select_input_color_3 = input_color_3.options[input_color_3.selectedIndex].value;
    if (select_input_color_3 === "Чёрный") {
      data_3 = 1;
    }


    // Получите значения других полос

    // Пример расчета сопротивления
    const resistance = (((data_1 * 10000) + (data_2 * 1000)) * data_3);

    document.getElementById('resistance_show').value = resistance + ' Ом';
  });

  form.addEventListener("reset", () => {
    form.reset();
    document.getElementById('resistance_show').value = '';
  });
};

app();
