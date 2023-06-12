const handleInputCopy = () => {
    const source = document.querySelector('#input-number')

    sessionStorage.setItem('sequenceNumber', source.getAttribute('value'))

    const parent = document.querySelector('main')

    import('../../../output/Output').then(({ default: Output }) =>
        parent.replaceChildren(Output())
    )
}

export default handleInputCopy
