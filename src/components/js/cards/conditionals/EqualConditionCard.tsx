export function EqualConditionCard() {
  return (
    <div className="card">
      <div className="card-title">== vs ===</div>
      <div className="card-content">
        <div className="card-content-code">

        <span>
            <span className="orange-code">0 </span>
            <span>{'=='}</span>
            <span className="orange-code"> false</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">0 </span>
            <span>{'==='}</span>
            <span className="orange-code"> false</span>
            <span className="grey-light-code"> // false, different types</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'=='}</span>
            <span className="green-code"> "1"</span>
            <span className="grey-light-code"> // true, automatic type conversion</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'==='}</span>
            <span className="green-code"> "1"</span>
            <span className="grey-light-code"> // false, different types</span>
          </span>

          <span>
            <span className="orange-code">null </span>
            <span>{'=='}</span>
            <span className="orange-code"> undefined</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">null </span>
            <span>{'==='}</span>
            <span className="orange-code"> undefined</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="green-code">'0' </span>
            <span>{'=='}</span>
            <span className="orange-code"> false</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="green-code">'0' </span>
            <span>{'==='}</span>
            <span className="orange-code"> false</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <div className="divider-card">The == just check the value, === check both the value and the type</div>

        </div>
      </div>
    </div>
  );
}
