import mainElement from './elements/main-element/mainElement'
import Provider from '../../features/input/Provider'
import Output from '../../features/output/Output'

const Main = () => {
    mainElement.classList.add('main')

    let provider = Provider()
    mainElement.appendChild(provider)

    if (module.hot) {
        module.hot.accept('../../features/input/Provider.js', () => {
            console.log('Accepting the updated Provider component')
            mainElement.removeChild(provider)
            provider = Provider()
            mainElement.appendChild(provider)
        })
    }

    let output = Output()
    mainElement.appendChild(output)

    if (module.hot) {
        module.hot.accept('../../features/output/Output.js', () => {
            console.log('Accepting the updated Output component')
            mainElement.removeChild(output)
            output = Output()
            mainElement.appendChild(output)
        })
    }

    return mainElement
}

export default Main
