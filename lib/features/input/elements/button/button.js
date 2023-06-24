import data from './button.data.json';
import { createCustomizedElement } from '../../../../utils/DOMUtils';
import handleInput from './handleInput';

const button = createCustomizedElement(data);

button.addEventListener('click', handleInput);

export default button;