export function SwitchStatementCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">Switch Statement</div>
      <div className="card-content">
        <div className="card-content-code">

        <span>
          <span className="blue-code">const </span>
          <span>food</span>
          <span className="white-code"> =</span>
          <span className="green-code"> 'salad'</span>
          <span className="white-code">;</span>
        </span>

        </div>

        <span>
          <span className="blue-code">switch </span>
          <span>{'('}</span>
          <span className="white-code">food</span>
          <span className="white-code">{') '}</span>
          <span className="white-code">{'{'}</span><br />

          <span className="blue-code">&nbsp;case </span>
          <span className="green-code">'oyster'</span>
          <span className="white-code">{':'}</span><br />

          <span className="green-code">&nbsp;&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'The taste of the sea'</span>
          <span className="white-code">{');'}</span><br />

          <span className="blue-code">&nbsp;&nbsp;break</span>
          <span>;</span><br /><br />


          <span className="blue-code">&nbsp;case </span>
          <span className="green-code">'pizza'</span>
          <span className="white-code">{':'}</span><br />

          <span className="green-code">&nbsp;&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'A delicious pie'</span>
          <span className="white-code">{');'}</span><br />

          <span className="blue-code">&nbsp;&nbsp;break</span>
          <span>;</span><br /><br />

          <span className="blue-code">&nbsp;default</span>
          <span className="white-code">{':'}</span><br />

          <span className="green-code">&nbsp;&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'Enjoy your meal'</span>
          <span className="white-code">{');'}</span>
        </span>

      </div>
    </div>
  );
}
