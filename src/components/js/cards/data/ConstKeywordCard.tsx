export function ConstKeywordCard() {
  return (
    <div className="card-const-keyword">
      <div className="card-title-keyword">const Keyword</div>
      <div className="card-content">
        <div className="card-content-code">
          <span>
            <span className="blue-code">const </span>
            numberOfColumns = <span className="orange-code">4</span>;
          </span>
          <div className="card-content-code"></div>
        </div>
        <div className="card-content-code">
          <span>
            <span className="grey-light-code">
              // TypeError: Assignment to constant...
            </span>
          </span>
          <span>
            <span className="white-code">numberOfColumns </span>={" "}
            <span className="orange-code"> 8</span>;
          </span>
        </div>
      </div>
    </div>
  );
}
