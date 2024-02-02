const head = document.getElementsByTagName('head')[0];
const style = document.createElement('style');
style.innerHTML = `
    .max {
        width:90%
    }
    .min {
        width:20%
    }
`;
head.appendChild(style);

const main = document.getElementById('contenor');

// in each click we add max class to clicked element and min class to others and
// if the clicked element already has max class we remove it and add min class
main.addEventListener('click', function (event) {
    for (let i = 1; i < this.childNodes.length; i += 2) {
        if (this.childNodes[i] !== event.target) {
            this.childNodes[i].classList.remove('max');
            this.childNodes[i].classList.add('min');
        } else {
            this.childNodes[i].classList.remove('min');
            this.childNodes[i].classList.add('max');
        }
    }
});