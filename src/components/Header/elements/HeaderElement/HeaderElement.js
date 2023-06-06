import createCustomizedElement from '../../../../utils/createCustomizedElement'
import data from './headerElement.data.json'
import './headerElement.styles.scss'

const headerElement = createCustomizedElement(data)

headerElement.classList.add('header')

export default headerElement
