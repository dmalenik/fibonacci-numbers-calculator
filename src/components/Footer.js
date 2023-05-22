const Footer = () => {
    const section = document.createElement('footer')

    section.classList.add('footer')

    const heading = document.createElement('h2')

    heading.innerText = 'Footer section'
    section.appendChild(heading)

    return section
}

export default Footer
