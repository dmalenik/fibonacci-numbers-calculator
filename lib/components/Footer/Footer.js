import { createCustomizedElement } from '../../utils/DOMUtils';
import data from './container.data.json';
import { link, copyright } from './elements';
import './Footer.styles.scss';

const Footer = () => {
    const container = createCustomizedElement(data);

    container.appendChild(link);
    container.appendChild(copyright);

    return container;
};

export default Footer;