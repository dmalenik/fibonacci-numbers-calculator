import createCustomizedElement from '../../../../utils/createCustomizedElement'
import data from './HeaderElement.data.json'

const HeaderElement = createCustomizedElement(
    data.name,
    data.attrs,
    data.children
)

export default HeaderElement
