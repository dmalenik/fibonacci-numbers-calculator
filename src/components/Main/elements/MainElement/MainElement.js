import createCustomizedElement from '../../../../utils/createCustomizedElement'
import data from './mainElement.data.json'
import './mainElement.styles.scss'

const mainElement = createCustomizedElement(data)

mainElement.classList.add('main')

export default mainElement
