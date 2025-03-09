const app = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const color1 = parseInt(document.getElementById('color1').value, 10);
      // Получите значения других полос

      // Пример расчета сопротивления
      const resistance = (color1 * 10 /* + color2 * 1 + color3 * 0.1 */); // Примерная формула

      document.getElementById('resistance_show').value = resistance + ' Ом';
  });

  form.addEventListener("reset", () => {
      form.reset();
      document.getElementById('resistance_show').value = '';
  });
};

app();
