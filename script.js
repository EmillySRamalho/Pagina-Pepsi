 const radios = document.querySelectorAll('input[name="rating"]');
    const result = document.getElementById('result');

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        result.textContent = `Você selecionou ${radio.value} estrelas!`;
      });
    });