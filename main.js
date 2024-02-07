let h2 = document.querySelector('h2');
let container = document.querySelector('.container');
h2.onclick = function(){
    container.classList.toggle('newyear');
    this.classList.toggle('active');
}
// Esse projeto será implementado e será diferente para o ano de 2024
