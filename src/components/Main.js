import Input from '../features/input/components/Provider'
import Output from '../features/output/components/Output'

const Main = () => {
    const section = document.createElement('main')

    section.classList.add('main')

    const heading = document.createElement('h2')

    heading.innerText = 'Main section'
    section.appendChild(heading)

    let input = Input()
    section.appendChild(input)

    if (module.hot) {
        module.hot.accept('../features/input/components/Provider.js', () => {
            console.log('Accepting the updated fibonacciNumbersForm')
            section.removeChild(input)
            input = Input()
            section.appendChild(input)
        })
    }

    let output = Output()
    section.appendChild(output)

    if (module.hot) {
        module.hot.accept(
            '../features/output/components/Output.js',
            () => {
                console.log('Accepting the updated Output')
                section.removeChild(output)
                output = Output()
                section.appendChild(output)
            }
        )
    }

    return section
}

export default Main
