const handleInputCopy = () => {

    const parent = document.querySelector('main')

    import('../../../output/Output').then(({ default: Output }) =>
        parent.replaceChildren(Output())
    )
}

export default handleInputCopy
