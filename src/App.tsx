import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FaqPrivacyTerms from "./pages/FaqPrivacyTerms";

export default function App() {
  return (
    <>
      <Loader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<FaqPrivacyTerms />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
