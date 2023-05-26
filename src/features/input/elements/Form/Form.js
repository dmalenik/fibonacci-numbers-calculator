import createCustomizedElement from '../../../shared/utils/createCustomizedElement'
import data from './Form.data.json'

const Form = createCustomizedElement(data.name, data.attrs, data.children)

export default Form
