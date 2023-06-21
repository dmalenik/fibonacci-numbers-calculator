import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './form.data.json'
import './Provider.styles.scss'

const Provider = () => {
    const form = createCustomizedElement(data)

    import('./elements').then(({ button, input, label }) => {
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(button)
    })

    return form
}

export default Provider
