import Container from "../components/container";
import Main from "../components/main";
import Swipe from "../components/swipe";

const HomePage = () => {
  return (
    <>
      <Swipe />
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default HomePage;
