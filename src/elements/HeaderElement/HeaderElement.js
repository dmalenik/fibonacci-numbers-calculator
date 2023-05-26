import createCustomizedElement from '../../utils/createCustomizedElement'
import data from './Header.data.json'

const Section = createCustomizedElement(data.name, data.attrs, data.children)

export default Section
