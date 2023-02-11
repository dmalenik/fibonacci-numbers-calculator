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
        let outputCenterToLeft = output.animate(
            [
                {
                    position: 'absolute',
                    left: '28vw',
                },
                {
                    position: 'absolute',
                    left: '0vw',
                },
            ],
            {
                duration: 800,
            }
        )

        outputCenterToLeft.finished.then(() => {
            output.classList.replace('f-col', 'd-hidden')
            document
                .querySelector('#fibonacci-form')
                .classList.replace('d-hidden', 'f-row')

            document.querySelector('#fibonacci-form').animate(
                [
                    {
                        position: 'absolute',
                        left: '0vw',
                    },
                    {
                        position: 'absolute',
                        left: '21vw',
                    },
                ],
                {
                    duration: 800,
                }
            )
        })
    })

    output.appendChild(heading)
    output.appendChild(tryAgainBtn)

    return output
}

export default fibonacciNumberOutput
