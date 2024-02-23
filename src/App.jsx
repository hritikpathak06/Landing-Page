import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Container />
        <h1 className="heading__text">Related deals you might like for</h1>
        <div className="card__content">
          <Card />
          <Card />
          <Card />
        </div>
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default App;
