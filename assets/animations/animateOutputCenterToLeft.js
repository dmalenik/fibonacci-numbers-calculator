const animateOutputCenterToLeft = (elem) => {
    return elem.animate(
        [
            {
                position: 'absolute',
                left: '28vw',
            },
            {
                position: 'absolute',
                left: '0vw',
            },
        ],
        {
            duration: 800,
        }
    )
}

export default animateOutputCenterToLeft
