const animateFormCenterToLeft = (elem) => {
    return elem.animate(
        [
            {
                position: 'absolute',
                left: '21vw',
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

export default animateFormCenterToLeft
