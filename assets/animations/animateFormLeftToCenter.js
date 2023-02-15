const animateFormLeftToCenter = (elem) => {
    return elem.animate(
        [
            {
                position: 'absolute',
                left: '0vw',
            },
            {
                position: 'absolute',
                left: '21vw',
            },
        ],
        {
            duration: 800,
        }
    )
}

export default animateFormLeftToCenter
