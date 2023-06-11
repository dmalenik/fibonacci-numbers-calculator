const handleInputCopy = () => {
    sessionStorage.setItem(
        'sequenceNumber',
        document.querySelector('#input-number').getAttribute('value')
    )

    document
        .querySelector('.main')
        .removeChild(document.querySelector('#fibonacci-form'))

    import('../../../output/Output').then(({ default: Output }) =>
        document.querySelector('.main').appendChild(Output())
    )
}

export default handleInputCopy
