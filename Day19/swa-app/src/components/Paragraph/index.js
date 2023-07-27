import Protypes from 'prop-types'

function Paragraph ({children, size = 16, color = "white"}) {
    return (
        <p style={{fontSize: size, color}}>{children}</p>
    )
}

Paragraph.prototype = {
    children: Protypes.node.isRequired,
    size: Protypes.number,
    color: Protypes.string
}

export default Paragraph;