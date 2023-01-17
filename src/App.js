import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Footer from "./Componenet/footer";
import Navbar from "./Componenet/nav-bar";
import Upload from "./Componenet/upload";
 
function App() {
  return (
    <>
      <Navbar />
      <Upload />
      <Footer />
    </>
  );
}

export default App;
