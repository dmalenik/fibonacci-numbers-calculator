import data from './label.data.json';
import { createCustomizedElement } from '../../../../utils/DOMUtils';
import Text from './text.json';

const label = createCustomizedElement(data);

label.innerText = Text;

export default label;