import "./Card.scss";

function Card({ link, title, content, imgLink, alt, items }) {
  return (
    <div className="card">
      <a href={link} target="_blank">
        <div className="card-content">
          <div className="img-container">
            {imgLink != null ? (
              <img src={imgLink} alt="preview" style={{ aspectRatio: 16 / 9 }} />
            ) : (
              <p>{alt}</p>
            )}
          </div>
          <div className="content">
            <p className="title">{title}</p>
            <p className="information">{content}</p>
            <div className="tecknologies-container">
              <ul>
                {items.map((technology, index) => (
                  <div key={index}>{technology}</div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export function Technology({ text }) {
  return (
    <li>
      <div className="technology">
        <p>{text}</p>
      </div>
    </li>
  );
}

export default Card;
