const Header = () => {
    const section = document.createElement('header')

    section.classList.add('header')

    const greeting = document.createElement('h1')

    greeting.innerText = 'Welcome to Fibonacci Numbers Calculator Page'
    section.appendChild(greeting)

    return section
}

export default Header
