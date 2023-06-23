import { createCustomizedElement } from '../../utils/DOMUtils'
import data from './form.data.json'
import { label, input, button } from './elements'
import './Provider.styles.scss'

const Provider = () => {
    const form = createCustomizedElement(data)

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)

    return form
}

export default Provider
