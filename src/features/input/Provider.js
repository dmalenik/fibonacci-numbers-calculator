import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './Provider.data.json'
import './Provider.styles.scss'

const Provider = () => {
    const form = createCustomizedElement(data)

    import('./elements').then(({ label, input, button }) => {
        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(button)
    })

    return form
}

export default Provider
