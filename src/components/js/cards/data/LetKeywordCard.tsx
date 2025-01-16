export function LetKeywordCard() {
  return (
    <div className="card">
      <div className="card-title-keyword">let Keyword</div>
      <div className="card-content">
        
        <div className="card-content-code">
          <span>
            <span className="blue-code">let </span>
              count;
          </span>
          <div className="card-content-code">
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span className="white-code">(count)</span>; <span className="grey-light-code">// undefined</span>
            </span>
          </div>
        </div>
        <div className="card-content-code">
          <span>
            <span className="white-code">count </span>
              = <span className="orange-code"> 10</span>;
          </span>
          <div className="card-content-code">
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span className="white-code">(count)</span>; <span className="grey-light-code">// 10</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}