const createCSSLink = (path) => {
    const link = document.createElement('link')

    link.href = path
    link.rel = 'stylesheet'

    return document.head.appendChild(link)
}

export default createCSSLink
