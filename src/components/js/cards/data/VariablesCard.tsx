export function VariablesCard() {
  return (
    <div className="card">
        <div className="card-title">Variables</div>
        <div className="card-content">

          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              x =
                <span className="orange-code"> null</span>;
              </span>
          </div>

          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              name =
                <span className="green-code"> "Bryan"</span>;
              </span>
          </div>

          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              found =
                <span className="orange-code"> false</span>;
              </span>
          </div>

          <div className="card-content-code">
            <span className="grey-light-code">// Bryan, false, null</span>
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span>(name, found, x)</span>;
            </span>
          </div>

          <div className="card-content-code">
            <span>
              <span className="blue-code">var </span>
              a =
                <span className="green-code"> "Bryan"</span>;
              </span>
              <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span>(a)</span>; <span className="grey-light-code">// undefined</span>
            </span>
          </div>
          
        </div>
      </div>
  )
}