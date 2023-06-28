import "./Card.scss";

function Card({ link, title, content, imgLink, items }) {
  return (
    <div className="card">
      <a href={link} target="_blank">
        <div className="card-content">
          <div className="img-container">
            {imgLink != null ? (
              <img
                src={imgLink}
                alt="project-image"
                style={{ aspectRatio: 3 / 2 }}
              />
            ) : (
              <p>01/01/2001</p>
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
