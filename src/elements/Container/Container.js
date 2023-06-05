import data from './container.data.json'
import createCustomizedElement from '../../utils/createCustomizedElement'
import './container.styles.scss'

const container = createCustomizedElement(data)

container.classList.add('app')

export default container
