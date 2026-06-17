import { Button } from "./Components/Button"

function App() {
  return (
    <div className="app">
        <section id="home" className="home">
            <img className="home-logo" src="/comwiz-svg.svg" alt="Computer Wizards Logo"/>
            <h1 className="home-title">Computer Wizards</h1>
            <Button text="Learn more->"></Button>
        </section>

        <section id="objectives" className="objectives">
            <h2>Hello</h2>
        </section>
    </div>
  )
}

export default App
