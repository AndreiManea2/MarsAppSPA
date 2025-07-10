import { useState } from 'react'
import './App.css'
import Component1 from './Component1'
import { CounterContext } from './contexts/CounterContext.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            <div className="App">
                <Component1 />
            </div>
        </CounterContext.Provider>
    )
}

export default App
