export function StringInterpolationCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">String Interpolation</div>
      <div className="card-content">
        
        <div className="card-content-code">
          <span>
            <span className="blue-code">let </span>
              age =
            <span className="orange-code"> 7</span>;
          </span>
        </div>

        <div className="card-content-code">
          <span className="grey-light-code">// String concatenation</span>
          <span>
            <span className="green-code">'Bryan is '</span>
            <span className="white-code"> + age + </span>
              <span className="green-code">' years old.'</span>;
          </span>
        </div>

        <div className="card-content-code">
          <span className="grey-light-code">// String concatenation</span>
          <span>
            <span className="green-code">{'`Bryan is ${age} years old.`'}</span>;
          </span>
        </div>

      </div>
    </div>
  )
}