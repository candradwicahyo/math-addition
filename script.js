window.addEventListener('DOMContentLoaded', () => {
  
  let number1 = document.querySelector('.number1');
  let number2 = document.querySelector('.number2');
  
  function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
  }
  
  number1.textContent = getRandomNumber();
  number2.textContent = getRandomNumber();
  
  const result = parseInt(number1.textContent) + parseInt(number2.textContent);
  
  const input = document.querySelector('.input');
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', () => {
    const value = Number(input.value.trim());
    if (!value) return sweetalert('error', 'error', 'isi input terlebih dahulu!');
    if (value === result) return sweetalert('success', 'benar', success(value), true);
    return sweetalert('error', 'salah', error(), true);
  });
  
  function sweetalert(icon, title, text, load = false) {
    if (load == true) {
      return swal.fire ({
        icon: icon,
        title: title,
        text: text
      }).then(result => {
        if (result.isConfirmed) document.location.reload();
      });
    }
    
    return swal.fire ({
      icon: icon,
      title: title,
      text: text
    });
  }
  
  function success(param) {
    return `benar! jawaban yang benar adalah ${param}`;
  }
  
  function error() {
    return `jawaban anda salah! jawaban yang benar adalah ${result}`;
  }
  
});