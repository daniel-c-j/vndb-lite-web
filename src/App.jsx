import Features from "./components/Features";
import FirstView from "./components/FirstView";
import Footer from "./components/Footer";
import Meta from "./components/Meta";

function App() {
  return (
    <>
      <Meta />
      <ContentWrapper>
        <FirstView />
        <Features />
        <Footer />
      </ContentWrapper>
    </>
  );
}

function ContentWrapper({ children }) {
  return (
    <div align="center">
      <div className="root">{children}</div>
    </div>
  );
}

export default App;
