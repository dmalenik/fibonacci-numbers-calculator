import createCustomizedElement from '../../../../utils/DOMElementUtils'
import data from './container.data.json'
import h1 from './elements/h1/h1'

const Header = () => {
    const container = createCustomizedElement(data)
    container.classList.add('header')

    container.appendChild(h1)

    return container
}

export default Header
