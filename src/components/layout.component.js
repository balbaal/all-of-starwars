import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";

const Layout = props => (
  <div>
    <div style={{width: "550px", margin: "0 auto"}}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout