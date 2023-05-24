import data from './label.json'
import createCustomizedElement from '../../utils/createCustomizedElement'

const Label = createCustomizedElement(data.name, data.attrs, data.children)

export default Label
