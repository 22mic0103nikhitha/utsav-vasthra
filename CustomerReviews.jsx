import "./CustomerReviews.css";
import r1 from "./assets/review1.png";
import r2 from "./assets/review2.png";
import r3 from "./assets/review3.png";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Shreshtha H",
      text:
        "I wore this stunning saree for my best friend’s wedding and absolutely loved it. The fit was perfect!",
      img: r1,
    },
    {
      name: "Juhi S",
      text:
        "Beautiful collection and amazing service. I received so many compliments!",
      img: r2,
    },
    {
      name: "Avantika G",
      text:
        "Last-minute function and Utsav Vasthra saved the day. Elegant and hassle-free.",
      img: r3,
    },
  ];

  return (
    <section className="reviews-section">
      <h2>Join The Utsav Experience</h2>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <img src={r.img} alt={r.name} />
            <p className="review-text">“{r.text}”</p>
            <span className="review-name">{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
