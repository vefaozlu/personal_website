import { Element } from "react-scroll";
import Card, { Technology } from "../Card/Card";
import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <Element name="about" className="one">
        <About />
      </Element>
      <Element name="projects" className="two">
        <Projects />
      </Element>
      <Element name="certificates" className="three">
        <Certificates />
      </Element>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <p>
        Qui ullamco qui do dolor eiusmod proident exercitation sint consectetur
      cillum. Aliquip sint aliquip sit mollit cupidatat incididunt tempor
      laboris adipisicing ipsum dolore esse anim. Amet officia sunt duis nulla
      et do do excepteur culpa esse eiusmod. Id anim id esse laborum non aliqua
      veniam.
      </p>
      <p>
        Qui ullamco qui do dolor eiusmod proident exercitation sint consectetur
      cillum. Aliquip sint aliquip sit mollit cupidatat incididunt tempor
      laboris adipisicing ipsum dolore esse anim.
      </p>
      <p>
        Qui ullamco qui do dolor eiusmod proident exercitation sint consectetur
      cillum. Aliquip sint aliquip sit mollit cupidatat incididunt tempor
      laboris adipisicing ipsum dolore esse anim. Amet officia sunt duis nulla
      et do do excepteur culpa esse eiusmod. Id anim id esse laborum non aliqua
      veniam.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <Card
        link={"https://google.com"}
        imgLink={
          "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
        title={"Rent App"}
        content={
          "Minim minim amet Lorem sint sunt aliquip aute in irure tempor enim fugiat."
        }
        items={technologies}
      />
      <Card
        link={"https://google.com"}
        imgLink={
          "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
        title={"Rent App"}
        content={
          "Minim minim amet Lorem sint sunt aliquip aute in irure tempor enim fugiat."
        }
        items={technologies}
      />
      <Card
        link={"https://google.com"}
        imgLink={
          "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
        title={"Rent App"}
        content={
          "Minim minim amet Lorem sint sunt aliquip aute in irure tempor enim fugiat."
        }
        items={technologies}
      />
      <Card
        link={"https://google.com"}
        imgLink={
          "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
        title={"Rent App"}
        content={
          "Minim minim amet Lorem sint sunt aliquip aute in irure tempor enim fugiat."
        }
        items={technologies}
      />
      <Card
        link={"https://google.com"}
        imgLink={
          "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }
        title={"Rent App"}
        content={
          "Minim minim amet Lorem sint sunt aliquip aute in irure tempor enim fugiat."
        }
        items={technologies}
      />
    </div>
  );
}

function Certificates() {
  return (
    <div className="certificates">
      <Card
        link={
          "https://google.https://coursera.org/share/c90ec31f3ea3e9d4c5046fc84337e515"
        }
        title={"Neural Networks and Deep Learning"}
        content={
          "Introductive course to Neural Networks and Deep Learning instructed by Andarw Ng."
        }
        items={[]}
      />
      <Card
        link={"https://google.com"}
        title={"Neural Networks and Deep Learning"}
        content={
          "Introductive course to Neural Networks and Deep Learning instructed by Andarw Ng."
        }
        items={[]}
      />
    </div>
  );
}

const technologies = [
  <Technology text="React" />,
  <Technology text="React" />,
  <Technology text="React" />,
  <Technology text="React" />,
  <Technology text="React" />,
];

export default Main;
