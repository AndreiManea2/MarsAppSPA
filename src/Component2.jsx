import { useCounter } from './contexts/CounterContext.jsx'

function Component2() {
    const { setCount } = useCounter()

    return (
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
                alt="NASA Logo"
                style={{ width: '120px', marginBottom: '1rem' }}
            />
            <br />
            <button onClick={() => setCount((c) => c + 1)}>Click Me 🚀</button>
        </div>
    )
}

export default Component2
