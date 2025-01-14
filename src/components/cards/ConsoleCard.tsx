export function ConsoleCard() {
  return (
    <div className="card">
        <div className="card-title">Console</div>
        <div className="card-content">

          <div className="card-content-code">
            <span className="grey-light-code">// Hello World!</span>
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span className="green-code">('Hello World!')</span>;
              </span>
          </div>

          <div className="card-content-code">
            <span className="grey-light-code">// Hello Cheat Sheet Dev</span>
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">warn</span>
                <span className="green-code">('Hello %s', 'Cheat Sheet Dev')</span>;
              </span>
          </div>

          <div className="card-content-code">
            <span className="grey-light-code">// Prints error message to stderr</span>
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">error</span>
                <span>
                  (<span className="blue-code">new </span>
                    <span className="orange-code"> 
                     Error <span className="white-code">(<span className="green-code">'Oops!'</span>)</span>
                    </span> );
                  </span>
              </span>
          </div>
          
        </div>
      </div>
  )
}