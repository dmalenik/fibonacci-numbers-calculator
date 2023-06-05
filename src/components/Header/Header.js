import headerElement from './elements/headerElement/headerElement'
import h1 from './elements/h1/h1'

const Header = () => {
    headerElement.appendChild(h1)

    return headerElement
}

export default Header
