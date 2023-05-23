const Form = () => {
    const section = document.createElement('form')

    section.setAttribute('id', 'fibonacci-form')
    section.setAttribute('method', '')
    section.setAttribute('action', '')

    section.classList.add('f-row', 'f-col-gap')

    return section
}

export default Form
