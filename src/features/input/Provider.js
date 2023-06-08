import form from './elements/form/form'
import label from './elements/label/label'
import input from './elements/input/input'
import button from './elements/button/button'

const Provider = () => {
    form.classList.add('d-flex', 'form')
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)

    return form
}

export default Provider
