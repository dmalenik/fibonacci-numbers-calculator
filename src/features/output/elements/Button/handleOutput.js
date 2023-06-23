import Provider from '../../../input/Provider'

const handleOutput = () => {
    const parent = document.querySelector('main')

    parent.replaceChildren(Provider())
}

export default handleOutput
