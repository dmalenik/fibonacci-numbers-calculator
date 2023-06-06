import createCustomizedElement from '../../../../utils/createCustomizedElement'
import data from './footerElement.data.json'
import './footerElement.styles.scss'

const footerElement = createCustomizedElement(data)

footerElement.classList.add('footer')

export default footerElement
