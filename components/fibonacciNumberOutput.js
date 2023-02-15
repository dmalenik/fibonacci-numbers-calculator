import animateOutputCenterToLeft from '../assets/animations/animateOutputCenterToLeft.js'
import animateFormLeftToCenter from '../assets/animations/animateFormLeftToCenter.js'

const fibonacciNumberOutput = () => {
    const output = document.createElement('section')

    output.setAttribute('id', 'output')

    output.classList.add('d-hidden', 'f-y-center', 'f-x-center')

    const heading = document.createElement('h2')

    heading.innerText = 'Display the result of a Fibonacci number calculations'

    const tryAgainBtn = document.createElement('button')

    tryAgainBtn.setAttribute('id', 'again')
    tryAgainBtn.setAttribute('type', 'button')

    tryAgainBtn.innerText = 'Try again'

    tryAgainBtn.addEventListener('click', (event) => {
        let outputCenterToLeft = animateOutputCenterToLeft(output)

        outputCenterToLeft.finished.then(() => {
            output.classList.replace('f-col', 'd-hidden')
            document
                .querySelector('#fibonacci-form')
                .classList.replace('d-hidden', 'f-row')

            let formLeftToCenter = animateFormLeftToCenter(
                document.querySelector('#fibonacci-form')
            )
        })
    })

    output.appendChild(heading)
    output.appendChild(tryAgainBtn)

    return output
}

export default fibonacciNumberOutput
