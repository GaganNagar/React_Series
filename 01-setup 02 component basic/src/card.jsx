import "./App.css";

function Card() {
  const title = "React Notes";
  const description =
    "Practice React daily and build strong placement-level skills.";
  const tag = "Placement Series";

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="tag">{tag}</span>
    </div>
  );
}

export default Card;
