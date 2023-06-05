import data from './container.data.json'
import createCustomizedElement from '../../utils/createCustomizedElement'
import './container.styles.scss'

const Container = createCustomizedElement(data)

Container.classList.add('app')

export default Container
