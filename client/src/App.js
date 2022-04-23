import { Container } from "@material-ui/core";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        {/* navbar */}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
