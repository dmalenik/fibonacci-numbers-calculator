import footerElement from './elements/footerElement/footerElement'
import h2 from './elements/h2/h2'
import './Footer.styles.scss'

const Footer = () => {
    footerElement.classList.add('footer')
    footerElement.appendChild(h2)

    return footerElement
}

export default Footer
