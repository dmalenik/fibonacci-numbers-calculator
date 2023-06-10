import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './section.data.json'

const Output = () => {
    const section = createCustomizedElement(data)
    section.classList.add('d-none', 'output')

    import('./elements').then(({ button, h2 }) => {
        section.appendChild(h2)
        section.appendChild(button)
    })

    return section
}

export default Output
