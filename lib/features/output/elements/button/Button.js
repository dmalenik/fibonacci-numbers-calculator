import data from './button.data.json';
import { createCustomizedElement } from '../../../../utils/DOMUtils';
import handleOutput from './handleOutput';

const button = createCustomizedElement(data);

button.addEventListener('click', handleOutput);

export default button;