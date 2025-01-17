export function OperatorsCard() {
  return (
    <div className="card-operators">
      <div className="card-title-aritmethics">Operators</div>
      <div className="card-content">
        <div className="card-content-code">
          <span>
            <span className="blue-code">var </span>
            <span>x =</span>
            <span className="orange-code"> 10</span>
            <span>;</span>
          </span>
        </div>
        <div className="card-content-code">
          <span className="grey-light-code">// true</span>
          <p>
            <span>{"result = (x == "}</span>
            <span className="orange-code">1</span>
            <span>{") ? "}</span>
            <span className="orange-code">true</span>
            <span>{" : "}</span>
            <span className="orange-code">false</span>
            <span>;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
