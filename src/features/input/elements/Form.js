import createCustomizedElement from '../utils/createCustomizedElement'
import data from './form.json'

const Form = createCustomizedElement(data.name, data.attrs, data.children)

export default Form
