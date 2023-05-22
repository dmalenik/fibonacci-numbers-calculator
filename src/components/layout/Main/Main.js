import Form from '../../../features/input/components/Form'
import fibonacciNumberOutput from '../../../features/output/components/fibonacciNumberOutput'

const Main = () => {
    const section = document.createElement('main')

    section.classList.add('main')

    const heading = document.createElement('h2')

    heading.innerText = 'Main section'
    section.appendChild(heading)

    let form = Form()
    section.appendChild(form)

    if (module.hot) {
        module.hot.accept('../../../features/input/components/Form.js', () => {
            console.log('Accepting the updated fibonacciNumbersForm')
            section.removeChild(form)
            form = Form()
            section.appendChild(form)
        })
    }

    let output = fibonacciNumberOutput()
    section.appendChild(output)

    if (module.hot) {
        module.hot.accept(
            '../../../features/output/components/fibonacciNumberOutput.js',
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
