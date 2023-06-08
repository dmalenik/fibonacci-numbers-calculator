import container from './container/container'
import Provider from '../../features/input/Provider'
import Output from '../../features/output/Output'

const Main = () => {
    container.classList.add('main')

    let provider = Provider()
    container.appendChild(provider)

    if (module.hot) {
        module.hot.accept('../../features/input/Provider.js', () => {
            console.log('Accepting the updated Provider component')
            container.removeChild(provider)
            provider = Provider()
            container.appendChild(provider)
        })
    }

    let output = Output()
    container.appendChild(output)

    if (module.hot) {
        module.hot.accept('../../features/output/Output.js', () => {
            console.log('Accepting the updated Output component')
            container.removeChild(output)
            output = Output()
            container.appendChild(output)
        })
    }

    return container
}

export default Main
