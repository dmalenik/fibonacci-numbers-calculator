import data from './Label.data.json'
import createCustomizedElement from '../../../shared/utils/createCustomizedElement'

const Label = createCustomizedElement(data.name, data.attrs, data.children)

export default Label
