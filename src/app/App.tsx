import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuizModal from "../components/QuizModal";
import FloatingQuizBtn from "../components/FloatingQuizBtn";
import Home from "../pages/Home/Home";
import WebSystems from "../pages/WebSystems/WebSystems";
import Mobile from "../pages/Mobile/Mobile";
import Software from "../pages/Software/Software";
import LocalSystems from "../pages/LocalSystems/LocalSystems";
import StyleGuide from "../pages/StyleGuide";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #f7f9ff;
    color: #0c1445;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(29, 78, 216, 0.25);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(29, 78, 216, 0.45);
  }
`;

const PageWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 68px;
`;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <PageWrap>
        <Navbar />
        <QuizModal />
        <FloatingQuizBtn />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web" element={<WebSystems />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/software" element={<Software />} />
            <Route path="/sistemas-locais" element={<LocalSystems />} />
            <Route path="/styleguide" element={<StyleGuide />} />
          </Routes>
        </Main>
        <Footer />
      </PageWrap>
    </BrowserRouter>
  );
}