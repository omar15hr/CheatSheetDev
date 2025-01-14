export function CardList() {
  return (
    <div>
      <h1 className="card-list-title">Get Started</h1>
      <div className="card">
        <div className="card-title">Console</div>
        <div className="card-content">
          <div className="card-content-code">
            <span>// Hello World!</span>
            <span>console.log("Hello World!")</span>
          </div>
          <p>console.warn()</p>
          <p>console.error()</p>
        </div>
      </div>
    </div>
  )
}