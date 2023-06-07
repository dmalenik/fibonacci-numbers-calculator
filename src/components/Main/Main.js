import mainElement from './elements/mainElement/mainElement'
import h2 from './elements/h2/h2'
import Provider from '../../features/input/components/Provider'
import Output from '../../features/output/components/Output'
import './Main.styles.scss'

const Main = () => {
    mainElement.classList.add('main')
    mainElement.appendChild(h2)

    let provider = Provider()
    mainElement.appendChild(provider)

    if (module.hot) {
        module.hot.accept('../../features/input/components/Provider.js', () => {
            console.log('Accepting the updated Provider component')
            mainElement.removeChild(provider)
            provider = Provider()
            mainElement.appendChild(provider)
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
