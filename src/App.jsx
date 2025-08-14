import FirstView from "./components/FirstView";
import Header from "./components/Header";
import Meta from "./components/Meta";

function App() {
  return (
    <>
      <Meta />
      <ContentWrapper>
        <FirstView />
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
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
