
import "./portfolio.css";
import Me from "../../assets/Me.png";


const data = [
  {
    id: 1,
    image: Me,
    title: "Krimc Cube Shop",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Me,
    title: "Krimc Cube Shop",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: Me,
    title: "Krimc Cube Shop",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: Me,
    title: "Krimc Cube Shop",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      
      <h5>My Recent Works</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
        return(
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="portfolio_items-cta">
              <a href={github} className="btn btn-primary" target='_blank'>Demo</a>
            </div>
          </article>
          )
        })}
        </div>
    </section>
  );
}

export default Portfolio;
