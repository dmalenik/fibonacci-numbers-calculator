import mainElement from './elements/mainElement/mainElement'
import h2 from './elements/h2/h2'
import Input from '../../features/input/components/Provider'
import Output from '../../features/output/components/Output'

const Main = () => {
    mainElement.appendChild(h2)

    let input = Input()
    mainElement.appendChild(input)

    if (module.hot) {
        module.hot.accept('../../features/input/components/Provider.js', () => {
            console.log('Accepting the updated Provider component')
            mainElement.removeChild(input)
            input = Input()
            mainElement.appendChild(input)
        })
    }

    let output = Output()
    mainElement.appendChild(output)

    if (module.hot) {
        module.hot.accept('../../features/output/components/Output.js', () => {
            console.log('Accepting the updated Output component')
            mainElement.removeChild(output)
            output = Output()
            mainElement.appendChild(output)
        })
    }

    return mainElement
}

export default Main
