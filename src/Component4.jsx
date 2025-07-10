import { useCounter } from './contexts/CounterContext.jsx'

function Component4() {
    const { count } = useCounter()

    return (
        <div style={{ marginTop: '1rem' }}>
            <h2>Total Clicks: {count}</h2>
            <p>{count > 5 ? "🌌 You're a space explorer!" : "🛰️ Keep exploring the stars!"}</p>
        </div>
    )
}

export default Component4
