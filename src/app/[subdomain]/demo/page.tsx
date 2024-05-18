'use client'
const Main = () => {
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : 'Not fp'
    console.log(origin)
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
export default Main
