const handleOutput = () => {
    const parent = document.querySelector('main')

    import('../../../input/Provider').then(({ default: Provider }) =>
        parent.replaceChildren(Provider())
    )
}

export default handleOutput
