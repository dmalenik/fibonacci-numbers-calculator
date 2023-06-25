import data from './button.data.json';
import { createCustomizedElement } from '../../../../utils/DOMUtils';
import handleOutput from './handleOutput';
import Text from './text.json';

const button = createCustomizedElement(data);

button.innerText = Text;
button.addEventListener('click', handleOutput);

export default button;