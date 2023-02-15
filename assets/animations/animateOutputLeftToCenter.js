const animateOutputLeftToCenter = (elem) => {
    return elem.animate(
        [
            {
                position: 'absolute',
                left: '0vw',
            },
            {
                position: 'absolute',
                left: '28vw',
            },
        ],
        {
            duration: 800,
        }
    )
}

export default animateOutputLeftToCenter
