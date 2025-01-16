export function StringsCard() {
  return (
    <div className="card">
        <div className="card-title">Strings</div>
        <div className="card-content">

          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              single =
                <span className="green-code"> 'Where is my car?'</span>;
              </span>
          </div>
          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              double =
                <span className="green-code"> "Where is my car?"</span>;
              </span>
          </div>
          <div className="card-content-code">
            <span>
              <span className="blue-code">let </span>
              backticks  =
                <span className="green-code"> `Where is my car?`</span>;
              </span>
          </div>
          <div className="card-content-code">
            <span>
              <div className="card-content-code">
                <span className="grey-light-code">// 16</span>
              </div>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span>(single.length)</span>;
            </span>
          </div>
          
        </div>
      </div>
  )
}