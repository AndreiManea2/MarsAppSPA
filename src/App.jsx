import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function InfoSection({ title, paragraphs, imgSrc, imgAlt }) {
    return (
        <section className="info-section">
            <h2>{title}</h2>
            {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
            ))}
            <img
                src={imgSrc}
                alt={imgAlt}
                className="info-image"
                style={{ width: '250px', height: 'auto' }}
            />
        </section>
    )
}

function Counter() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count')
        return saved !== null ? Number(saved) : 0
    })

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    return (
        <div className="counter">
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}


function App() {
    const nasaParagraphs = [
        "NASA stands for the National Aeronautics and Space Administration.",
        "It is responsible for the civilian space program as well as aeronautics and aerospace research."
    ]
    const nasaImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"

    return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

        <InfoSection
            title="About NASA"
            paragraphs={nasaParagraphs}
            imgSrc={nasaImage}
            imgAlt="NASA logo"
        />

        <Counter />

        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
