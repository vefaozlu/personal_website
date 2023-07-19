import Header from "../../Components/Header/Header";
import Main, {
  About,
  Projects,
  Certificates,
} from "../../Components/Main/Main";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main items={[<About />, <Projects />, <Certificates />]} />
    </div>
  );
}

export default Home;
