import createCustomizedElement from '../../../../utils/createCustomizedElement'
import data from './MainElement.data.json'

const MainElement = createCustomizedElement(data.name, data.attrs, data.children)

export default MainElement
