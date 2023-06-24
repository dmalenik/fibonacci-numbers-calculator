import data from './link.data.json';
import { createCustomizedElement } from '../../../../utils/DOMUtils';
import Icon from './github.svg';

const link = createCustomizedElement(data);
const githubIcon = new Image();

githubIcon.src = Icon;

link.appendChild(githubIcon);

export default link;