export function AnonymousFunctionsCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">Anonymous Functions</div>
      <div className="card-content">
        <div className="card-content-code">
          <span>
            <span className="grey-light-code">// Named function</span>
            <br />
            <span className="blue-code">function </span>
            <span className="orange-code">rocketToMars</span>
            <span className="white-code">()</span>
            <span>{"{"}</span> <br />
            <span className="blue-code">&nbsp;&nbsp;return</span>
            <span className="green-code">'BOOM!'</span>
            <span>;</span> <br />
            <span className="white-code">{"}"}</span>
          </span>
        </div>
        <div className="card-content-code">
          <p>
            <span className="grey-light-code">// Anonymous function</span>
            <br />
            <span className="blue-code">const</span>
            <span className="white-code"> rocketToMars</span>
            <span>{" ="}</span>
            <span className="blue-code"> function</span>
            <span>()</span>
            <span>{" {"}</span> <br />
            <span className="blue-code">&nbsp;&nbsp;return</span>
            <span className="green-code">'BOOM!'</span>
            <span>;</span> <br />
            <span className="white-code">{"}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
