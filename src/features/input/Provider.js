import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './form.data.json'

const Provider = () => {
    const form = createCustomizedElement(data)
    form.classList.add('d-flex', 'form')

    return form
}

export default Provider
