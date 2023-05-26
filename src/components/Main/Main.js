import MainElement from './elements/MainElement/MainElement'
import H2 from './elements/H2/H2'
import Input from '../../features/input/components/Provider'
import Output from '../../features/output/components/Output'

const Main = () => {
    MainElement.appendChild(H2)

    let input = Input()
    MainElement.appendChild(input)

    if (module.hot) {
        module.hot.accept('../features/input/components/Provider.js', () => {
            console.log('Accepting the updated fibonacciNumbersForm')
            MainElement.removeChild(input)
            input = Input()
            MainElement.appendChild(input)
        })
    }

    let output = Output()
    MainElement.appendChild(output)

    if (module.hot) {
        module.hot.accept(
            '../features/output/components/Output.js',
            () => {
                console.log('Accepting the updated Output')
                MainElement.removeChild(output)
                output = Output()
                MainElement.appendChild(output)
            }
        )
    }

    return MainElement
}

export default Main
