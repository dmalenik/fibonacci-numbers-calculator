import headerElement from './elements/header-element/headerElement'
import h1 from './elements/h1/h1'

const Header = () => {
    headerElement.classList.add('header')
    headerElement.appendChild(h1)

    return headerElement
}

export default Header
