import './App.styles.scss'

const App = () => {
    root.classList.add('app')

    import('./components').then(({ Header, Main, Footer }) => {
        root.appendChild(Header())
        root.appendChild(Main())
        root.appendChild(Footer())
    })

    return root
}

export default App
