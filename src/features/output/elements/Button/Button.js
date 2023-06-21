import data from './button.data.json'
import { createCustomizedElement } from '../../../../utils/DOMUtils'

const button = createCustomizedElement(data)

import('./handleOutput').then(({ default: handleOutput }) =>
    button.addEventListener('click', handleOutput)
)

export default button
