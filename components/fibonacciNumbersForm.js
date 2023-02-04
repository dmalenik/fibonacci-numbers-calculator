import calcFibonacciNum from '../logic/calcFibonacciNum.js'

const fibonacciNumbersForm = () => {
    const form = document.createElement('form')

    form.setAttribute('id', 'fibonacci-form')
    form.setAttribute('method', '')
    form.setAttribute('action', '')

    form.classList.add('f-row', 'f-col-gap')

    const label = document.createElement('label')

    label.setAttribute('for', 'fibonacci-numbers')

    label.innerText = 'Type a number to see Fibonacci sequence numbers:'

    const input = document.createElement('input')

    input.setAttribute('id', 'fibonacci-numbers')
    input.setAttribute('type', 'number')
    input.setAttribute('name', 'fibonacci-numbers')
    input.setAttribute('min', 0)

    input.addEventListener('change', (event) =>
        event.target.setAttribute('value', event.target.value)
    )

    const send = document.createElement('button')

    send.setAttribute('id', 'fibonacci-button')
    send.setAttribute('type', 'button')
    send.setAttribute('form', 'fibonacci-form')

    send.innerText = 'Send'

    send.addEventListener('click', (event) => {
        form.classList.replace('f-row', 'd-hidden')
        document.querySelector('#output').classList.replace('d-hidden', 'f-col')

        let sequenceNumber = Number(input.getAttribute('value'))
        let fibonacciNumber = calcFibonacciNum(sequenceNumber)

        document.querySelector(
            '#output h3'
        ).innerText = `The Fibonacci number at the sequence number ${sequenceNumber} is: ${fibonacciNumber}`
    })

    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(send)

    return form
}

export default fibonacciNumbersForm
