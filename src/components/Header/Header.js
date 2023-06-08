import container from './elements/container/container'
import h1 from './elements/h1/h1'

const Header = () => {
    container.classList.add('header')
    container.appendChild(h1)

    return container
}

export default Header
