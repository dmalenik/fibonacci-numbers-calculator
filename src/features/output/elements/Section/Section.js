import createCustomizedElement from '../../../shared/utils/createCustomizedElement'
import data from './Section.data.json'

const Section = createCustomizedElement(data.name, data.attrs, data.children)

export default Section
