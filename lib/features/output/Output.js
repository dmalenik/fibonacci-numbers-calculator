import { createCustomizedElement } from '../../utils/DOMUtils';
import data from './section.data.json';
import calcFibonacciNum from '../services/fibonacciNumService';
import updateItemToSessionStorage from '../utils/sessionStorageUtils';
import { result, button } from './elements';
import './Output.styles.scss';

const Output = () => {
    const section = createCustomizedElement(data);
    const sequenceNumber = sessionStorage.getItem('sequenceNumber');
    const fibonacciNum = calcFibonacciNum(sequenceNumber);

    updateItemToSessionStorage('fibonacciNum', fibonacciNum);

    result.innerText = `The Fibonacci number is ${sessionStorage.getItem('fibonacciNum')}`;

    section.appendChild(result);
    section.appendChild(button);

    return section;
};

export default Output;