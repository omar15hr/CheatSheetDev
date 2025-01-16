export function AssignmentCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">Assignment Operators</div>
      <div className="card-content">
        
        <div className="card-content-code">
          <span>
            <span className="blue-code">let </span>
              number =
            <span className="orange-code"> 100</span>;
          </span>
        </div>

          <span>
            <span className="grey-light-code"> // Both statements will add 100</span>
          </span>

          <span>
            <span className="white-code">number </span>
              = number +
            <span className="orange-code"> 100</span>;<br /><br />
            <span className="white-code">number </span>
              += 
            <span className="orange-code"> 10</span>;
          </span>

          <div className="card-content-code">
            <span>
              <span className="green-code">console</span>
              .<span className="orange-code">log</span>
                <span className="white-code">(number)</span>;
            </span>
            <span className="grey-light-code">// 120</span>
          </div>

      </div>
    </div>
  );
}
