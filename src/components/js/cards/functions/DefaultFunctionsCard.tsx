export function DefaultFunctionsCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">Functions</div>
      <div className="card-content">
        <div className="card-content-code">
          <span>
            <span className="grey-light-code">// Defining the function:</span>
            <br />
            <span className="blue-code">function </span>
            <span className="orange-code">sum</span>
            <span className="white-code">(num1, num2)</span>
            <span>{"{"}</span> <br />
            <span className="blue-code">&nbsp;&nbsp;return</span>
            <span> num1 + num2;</span> <br />
            <span className="white-code">{"}"}</span>
          </span>
        </div>
        <div className="card-content-code">
          <p>
            <span className="grey-light-code">// Calling the function:</span>
            <br />
            <span className="orange-code">sum</span>
            <span className="white-code">(3, 6)</span>
            <span>{";"}</span>
            <span className="grey-light-code"> // 9</span>
          </p>
        </div>
      </div>
    </div>
  );
}
