import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './section.data.json'

const Output = () => {
    const section = createCustomizedElement(data)
    section.classList.add('d-none', 'output')

    return section
}

export default Output
