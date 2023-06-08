import container from './elements/container/container'
import h2 from './elements/h2/h2'

const Footer = () => {
    container.classList.add('footer')
    container.appendChild(h2)

    return container
}

export default Footer
