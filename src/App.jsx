//Routing and navigation for the website
import { Routes, Route, Outlet } from "react-router-dom";

//Chakra UI components
import { Box, Container } from "@chakra-ui/react";

//Website pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

//UI components
import Navbar from "./components/structures/Navbar";
import Footer from "./components/structures/Footer";

function Layout() {
  return (
    <Box bg="gray.100" minH="100vh" py={10} style={{ fontFamily: "Lato" }}>
      <Container maxW="container.lg">
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;