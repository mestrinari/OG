import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
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

const PageWrap = styled.div`
  min-height: var(--value-100vh);
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: var(--number-one);
  padding-top: var(--size-navbar);
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
