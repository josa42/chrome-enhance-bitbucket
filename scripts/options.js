document.addEventListener('DOMContentLoaded', () => {
  $('input').forEach((input) => input.addEventListener('change', () => {
    optionsApi.set(input.name, input.checked);
  }));
  
  optionsApi.getAll((options) => {
    Object.keys(options).forEach((key) => {
      const input = $$(`input[name=${key}]`);
      if (input) {
        input.checked = options[key];
      }
    })
  });
});