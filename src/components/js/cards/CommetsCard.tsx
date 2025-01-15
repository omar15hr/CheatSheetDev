export function CommentsCard() {
  return (
    <div className="card">
      <div className="card-title-aritmethics">Comments</div>
      <div className="card-content">
        <div className="card-content-code">
          <span>
            <span className="grey-light-code"> // This is a comment</span>
          </span>
        </div>
        <div className="card-content-code">
          <span>
            <span className="grey-light-code"> /* This is a comment too */</span>
          </span>
        </div>
      </div>
    </div>
  );
}
