import "./index.scss";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "gray",
          padding: "10px",
          minHeight: "100vh",
          gap: "10px",
        }}
      >
        <div style={{ flex: "25%" }}>
          <Header />
        </div>
        <div style={{ flex: "50%" }}>
          <Main />
        </div>
        <div style={{ flex: "25%" }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
