import data from './Container.data.json'
import createCustomizedElement from '../../utils/createCustomizedElement'

const Container = createCustomizedElement(data.name, data.attrs, data.children)

export default Container
