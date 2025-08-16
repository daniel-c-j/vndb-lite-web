import { useState } from "react";
import Features from "./components/Features";
import FirstView from "./components/FirstView";
import Footer from "./components/Footer";
import Meta from "./components/Meta";
import { useEffect } from "react";

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

const preLoadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};

function ContentWrapper({ children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      preLoadImage("hero-2.png"),
      preLoadImage("vndb-bg.png"),
      preLoadImage("badge-obtainium.png"),
      preLoadImage("badge-playstore.png"),
      preLoadImage("badge-appstore.png"),
    ]).then(() => {
      setImageLoaded(true);
    });
  });

  return (
    <div align="center">
      {imageLoaded ? (
        <div className="root">{children}</div>
      ) : (
        <p className="absolute top-[50%] left-[50%] -translate-[50%] text-xl ">
          <span className="size-4 spinner mr-1"></span> Loading...
        </p>
      )}
    </div>
  );
}

export default App;
