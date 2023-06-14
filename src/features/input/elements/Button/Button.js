import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'

const button = createCustomizedElement(data)

import('./handleInput').then(({ default: handleInput }) =>
    button.addEventListener('click', handleInput)
)

export default button
