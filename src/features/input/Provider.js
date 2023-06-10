import createCustomizedElement from '../../utils/DOMElementUtils'
import data from './form.data.json'

const Provider = () => {
    const form = createCustomizedElement(data)
    form.classList.add('d-flex', 'form')

    import('./elements').then(({ button, input, label }) => {
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(button)
    })

    return form
}

export default Provider
