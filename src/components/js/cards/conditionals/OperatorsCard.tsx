export function OperatorsCard() {
  return (
    <div className="card-operators">
      <div className="card-title-aritmethics">Operators</div>
      
      <div className="card-content">
        <div className="card-content-code">

          <span>
            <span className="orange-code">true </span>
            <span>||</span>
            <span className="orange-code"> false</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">10 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 5</span>
            <span> ||</span>
            <span className="orange-code"> 10 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 20</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">false </span>
            <span>||</span>
            <span className="orange-code"> false</span>
            <span>;</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">10 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 100</span>
            <span> ||</span>
            <span className="orange-code"> 10 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 20</span>
            <span>;</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <div className="divider-card">Logical Operator &&</div>

          <span>
            <span className="orange-code">true </span>
            <span>&&</span>
            <span className="orange-code"> true</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 2</span>
            <span> &&</span>
            <span className="orange-code"> 2 </span>
            <span>{'>'}</span>
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
            <span>{'==='}</span>
            <span className="orange-code"> 4</span>
            <span> &&</span>
            <span className="orange-code"> 3 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 1</span>
            <span>;</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <div className="divider-card">Comparison Operators</div>

          <span>
            <span className="orange-code">1 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 3</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">3 </span>
            <span>{'>'}</span>
            <span className="orange-code"> 1</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">250 </span>
            <span>{'>='}</span>
            <span className="orange-code"> 250</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'==='}</span>
            <span className="orange-code"> 1</span>
            <span className="grey-light-code"> // true</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'==='}</span>
            <span className="orange-code"> 2</span>
            <span className="grey-light-code"> // false</span>
          </span>

          <span>
            <span className="orange-code">1 </span>
            <span>{'==='}</span>
            <span className="green-code"> '1'</span>
            <span className="grey-light-code"> // false</span>
          </span>

        </div>
      </div>
    </div>
  );
}
