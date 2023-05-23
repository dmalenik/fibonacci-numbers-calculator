import Input from '../features/input/components/Input'
import fibonacciNumberOutput from '../features/output/components/fibonacciNumberOutput'

const Main = () => {
    const section = document.createElement('main')

    section.classList.add('main')

    const heading = document.createElement('h2')

    heading.innerText = 'Main section'
    section.appendChild(heading)

    let input = Input()
    section.appendChild(input)

    if (module.hot) {
        module.hot.accept('../features/input/components/Input.js', () => {
            console.log('Accepting the updated fibonacciNumbersForm')
            section.removeChild(input)
            input = Input()
            section.appendChild(input)
        })
    }

    let output = fibonacciNumberOutput()
    section.appendChild(output)

    if (module.hot) {
        module.hot.accept(
            '../features/output/components/fibonacciNumberOutput.js',
            () => {
                console.log('Accepting the updated fibonacciNumberOutput')
                section.removeChild(output)
                output = fibonacciNumberOutput()
                section.appendChild(output)
            }
        )
    }

    return section
}

export default Main
