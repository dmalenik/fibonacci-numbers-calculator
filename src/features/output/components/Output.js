import Section from '../elements/Section/Section'
import Button from '../elements/Button/Button'
import Heading2 from '../elements/Heading-2/Heading-2'

const Output = () => {
    Section.appendChild(Heading2)
    Section.appendChild(Button)

    return Section
}

export default Output
