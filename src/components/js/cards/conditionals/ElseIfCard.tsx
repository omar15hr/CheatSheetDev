export function ElseIfCard() {
  return (
    <div className="card">
      <div className="card-title-keyword">Else if</div>
      <div className="card-content">
        <div className="card-content-code">

        <span>
          <span className="blue-code">const </span>
          <span>size</span>
          <span className="white-code"> =</span>
          <span className="orange-code"> 10</span>
          <span className="white-code">;</span>
        </span>

        </div>

        <span>
          <span className="blue-code">if </span>
          <span>{'('}</span>
          <span className="white-code">size</span>
          <span className="white-code">{' > '}</span>
          <span className="orange-code">100</span>
          <span className="white-code">{') '}</span>
          <span className="white-code">{'{'}</span><br />
          <span className="green-code">&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'Big'</span>
          <span className="white-code">{');'}</span><br />
          <span className="white-code">{'}'}</span>
          <span className="blue-code"> else if </span>
          <span>{'( size > '}</span>
          <span className="orange-code">20</span>
          <span>{') {'}</span><br />
          <span className="green-code">&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'Medium'</span>
          <span className="white-code">{');'}</span><br />
          <span className="white-code">{'}'}</span>
          <span className="blue-code"> else if </span>
          <span>{'( size > '}</span>
          <span className="orange-code">4</span>
          <span>{') {'}</span><br />
          <span className="green-code">&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'Small'</span>
          <span className="white-code">{');'}</span><br />
          <span className="white-code">{'}'}</span>
          <span className="blue-code"> else</span>
          <span>{' {'}</span><br />
          <span className="green-code">&nbsp;console</span>
          <span className="white-code">.</span>
          <span className="orange-code">log</span>
          <span className="white-code">{'('}</span>
          <span className="green-code">'Tiny'</span>
          <span className="white-code">{');'}</span><br />
          <span>{' }'}</span><br />
          <span className="grey-light-code"> // Print: Small</span>
        </span>

        
      </div>
    </div>
  );
}
