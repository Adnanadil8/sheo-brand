
function clicked (
    const menu = document.getElementsByClassName('menu');
        const shut = document.getElementsByClassName('close');
        const nav = document.getElementsByTagName('nav');
        menu.addEventListener('click', () => {
            nav.classList.add('open-nav')
        })

        shut.addEventListener('click', () => {
            nav.classList.remove('open-nav')
        })
)

        console.log("hello");