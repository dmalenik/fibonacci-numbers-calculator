import footerElement from './elements/footer-element/footerElement'
import h2 from './elements/h2/h2'

const Footer = () => {
    footerElement.classList.add('footer')
    footerElement.appendChild(h2)

    return footerElement
}

export default Footer
