export function IfStatementCard() {
  return (
    <div className="card">
      <div className="card-title-keyword">If Statement</div>
      <div className="card-content">
        
        <div className="card-content-code">
          <span>
            <span className="blue-code">const </span>
              isMailSent = <span className="orange-code">true</span>;
          </span>
        </div>
        <div className="card-content-code">
          <span>
            <span className="blue-code">if </span>
            <span>{'(isMailSent) {'}</span>
          </span>
          <div className="card-content-code">
            <span>
              &nbsp;<span className="green-code">console</span>
              .<span className="orange-code">log</span>
              <span>{'{'}</span>
              <span className="green-code">'Mail sent to recipient.'</span>
              <span>{');'}</span>
            </span>
              <span>{'}'}</span>
          </div>
        </div>

      </div>
    </div>
  )
}