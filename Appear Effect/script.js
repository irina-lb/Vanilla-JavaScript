

function scrollAppear() {

    let text = document.querySelectorAll('.showElem');

    text.forEach(element => {
        let firstPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.5;

        if (firstPosition < screenPosition) {
            element.classList.add('appear');
        }
    });

}

window.addEventListener('scroll', scrollAppear);

