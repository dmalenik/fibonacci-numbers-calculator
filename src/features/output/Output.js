import section from './elements/section/section'
import button from './elements/button/button'
import h2 from './elements/h2/h2'

const Output = () => {
    section.appendChild(h2)
    section.appendChild(button)

    return section
}

export default Output
