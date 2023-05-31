import data from './Container.data.json'
import createCustomizedElement from '../../utils/createCustomizedElement'
import './Container.styles.css'

const Container = createCustomizedElement(data)

Container.classList.add('app')

export default Container
