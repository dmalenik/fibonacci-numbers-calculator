import data from './button.data.json'
import createCustomizedElement from '../../../../utils/DOMElementUtils'
// import handleOutput from './handleOutput'
import handleOutputCopy from './handleOutput.copy'

const button = createCustomizedElement(data)

button.addEventListener('click', handleOutputCopy)

export default button
