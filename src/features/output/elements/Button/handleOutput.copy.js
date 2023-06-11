const handleOutputCopy = () => {
    document
        .querySelector('.main')
        .removeChild(document.querySelector('#output'))

    import('../../../input/Provider').then(({ default: Provider }) => {
        document.querySelector('.main').appendChild(Provider())
    })
}

export default handleOutputCopy
