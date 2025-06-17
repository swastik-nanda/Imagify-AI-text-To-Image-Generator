import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Header></Header>
      <Steps></Steps>
      <Description></Description>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
