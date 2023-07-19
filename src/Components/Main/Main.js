import { Element } from "react-scroll";
import Card, { Technology } from "../Card/Card";
import "./Main.scss";
import preview_1 from "../../Assets/rent_app_preview.png";
import preview_2 from "../../Assets/pomodoro_preview.png";
import preview_3 from "../../Assets/adis_preview.png";
import preview_4 from "../../Assets/rick_and_morty_preview.png";

function Main() {
  return (
    <div className="Main">
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

export function About() {
  return (
    <div className="about" name="about">
      <p>
        Hello, I'm K. Vefa Özlü! I am a senior student studying Computer
        Engineering, and I have had a great interest in developing projects
        throughout my university life. I have undertaken numerous projects both
        with the support of my friends and individually. These projects have
        played a significant role in expanding my knowledge in addition to my
        coursework.
      </p>
      <p>
        My goal is to continuously improve myself in the field of full-stack
        mobile application development and become a sought-after engineer in
        this domain. Alongside my experience in mobile programming, I have
        developed a keen interest in artificial intelligence. While working in
        my field, I also take courses on deep learning algorithms through
        Coursera.
      </p>
    </div>
  );
}

export function Projects() {
  return (
    <div className="projects" name="projects">
      <Card
        link={"https://github.com/vefaozlu/rentapp_api.git"}
        imgLink={preview_1}
        title={"Rent App"}
        content={
          "This app is for landlords to manage their properties and tenants. Still in development."
        }
        items={[
          <Technology text="NodeJS" />,
          <Technology text="GraphQL" />,
          <Technology text="Postgres" />,
          <Technology text="Prisma ORM" />,
          <Technology text="Firebase" />,
          <Technology text="Flutter" />,
        ]}
      />
      <Card
        link={"https://github.com/vefaozlu/pomodoro.git"}
        imgLink={preview_2}
        title={"Pomodoro App"}
        content={"This app is for students to control their study periods."}
        items={[
          <Technology text="Flutter" />,
          <Technology text="BLoC" />,
          <Technology text="Hive" />,
        ]}
      />
      <Card
        link={"https://github.com/vefaozlu/rick_and_morty.git"}
        imgLink={preview_4}
        title={"Rick and Morty Characters"}
        content={`This app lists characters of cartoon series Rick and Morty fetching data from rickandmotyapi`}
        items={[<Technology text="Swift" />]}
      />
      <Card
        link={"https://github.com/vefaozlu/adis.git"}
        imgLink={preview_3}
        title={"ADIS"}
        content={
          "Simple app made for a friend who studies Speech and Language Therapy using flutter and audioplayers package."
        }
        items={[<Technology text="Flutter" />, <Technology text="BLoC" />]}
      />
    </div>
  );
}

export function Certificates() {
  return (
    <div className="certificates" name="certificates">
      <Card
        link={"https://coursera.org/share/c90ec31f3ea3e9d4c5046fc84337e515"}
        /* alt="3/3/2023" */
        imgLink={
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
        }
        title={"Neural Networks and Deep Learning"}
        content={
          "Introductive course to Neural Networks and Deep Learning instructed by Andrew Ng."
        }
        items={[]}
      />
      <Card
        link={"https://coursera.org/share/04f2bcee6d110f88074af4fd1b7dba9e"}
        /* alt="23/4/2023" */
        imgLink={
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&dpr=1&w=333&h=215&q=40"
        }
        title={
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"
        }
        content={
          "Introductive course about Tuning, Regularization and optimization algotirhms instructed by Andrew Ng."
        }
        items={[]}
      />
    </div>
  );
}

export default Main;
