export function ArrowFunctionsCard() {
  return (
    <div className="card-operators">
      <div className="card-title-arrow">Arrow Functions (ES6)</div>

      <div className="card-content">
        <div className="card-content-code">
          <div className="divider-card">With two arguments</div>

          <span>
            <span className="blue-code">const </span>
            <span className="orange-code">sum</span>
            <span className="white-code"> = (num1, num2) =&gt;</span>
            <span>{" {"}</span> <br />
            <span className="blue-code">&nbsp;&nbsp;return</span>
            <span> num1 + num2;</span> <br />
            <span className="white-code">{"};"}</span>
          </span>

          <span>
            <span className="green-code">console</span>
            <span>{"."}</span>
            <span className="orange-code">log</span>
            <span>{"("}</span>
            <span className="orange-code">sum</span>
            <span>{"("}</span>
            <span className="orange-code">3</span>
            <span className="white-code">,</span>
            <span className="orange-code">6</span>
            <span>{"));"}</span>
            <span className="grey-light-code"> // =&gt; 7</span>
          </span>
          
          <div className="divider-card">With no arguments</div>

          <span>
            <span className="orange-code">true </span>
            <span>&&</span>
            <span className="orange-code"> true</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{">"}</span>
            <span className="orange-code"> 2</span>
            <span> &&</span>
            <span className="orange-code"> 2 </span>
            <span>{">"}</span>
            <span className="orange-code"> 1</span>
            <span>;</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">true </span>
            <span>&&</span>
            <span className="orange-code"> false</span>
            <span>;</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">4 </span>
            <span>{"==="}</span>
            <span className="orange-code"> 4</span>
            <span> &&</span>
            <span className="orange-code"> 3 </span>
            <span>{">"}</span>
            <span className="orange-code"> 1</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <div className="divider-card">With a single arguments</div>

          <span>
            <span className="orange-code">1 </span>
            <span>{">"}</span>
            <span className="orange-code"> 3</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">3 </span>
            <span>{">"}</span>
            <span className="orange-code"> 1</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">250 </span>
            <span>{">="}</span>
            <span className="orange-code"> 250</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{"==="}</span>
            <span className="orange-code"> 1</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{"==="}</span>
            <span className="orange-code"> 2</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{"==="}</span>
            <span className="green-code"> '1'</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <div className="divider-card">Concise arrow functions</div>

          <span>
            <span className="orange-code">null </span>
            <span>{"??"}</span>
            <span className="green-code"> 'I win'</span>
            <span>;</span>
            <span className="grey-light-code"> // 'I win'</span>
          </span>

          <span>
            <span className="orange-code">undefined </span>
            <span>{"??"}</span>
            <span className="green-code"> 'Me too'</span>
            <span>;</span>
            <span className="grey-light-code"> // 'Me too'</span>
          </span>

          <span className="space-container-card">
            <span className="orange-code">false </span>
            <span>{"??"}</span>
            <span className="green-code"> 'I lose'</span>
            <span className="grey-light-code"> // 'false'</span>
          </span>

          <span>
            <span className="orange-code">0 </span>
            <span>{"??"}</span>
            <span className="green-code"> 'I lose again'</span>
            <span className="grey-light-code"> // 0</span>
          </span>

          <span>
            <span className="green-code">'' </span>
            <span>{"??"}</span>
            <span className="green-code"> 'Oh man!'</span>
            <span className="grey-light-code"> // ''</span>
          </span>
        </div>
      </div>
    </div>
  );
}
