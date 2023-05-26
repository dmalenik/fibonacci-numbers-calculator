import Section from '../elements/Section/Section'
import Button from '../elements/Button/Button'
import H2 from '../elements/H2/H2'

const Output = () => {
    Section.appendChild(H2)
    Section.appendChild(Button)

    return Section
}

export default Output
