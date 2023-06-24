import { createCustomizedElement } from '../../utils/DOMUtils';
import data from './container.data.json';
import { h1 } from './elements';
import './Header.styles.scss';

const Header = () => {
    const container = createCustomizedElement(data);

    container.appendChild(h1);

    return container;
};

export default Header;