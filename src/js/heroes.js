const hero = document.getElementsByClassName('hero-icon')

for (let i = 0; i < hero.length; i++) {
    hero[i].addEventListener('click', () => {
        window.location.href = `${hero[i].id}.html`
    })
}
