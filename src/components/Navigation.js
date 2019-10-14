import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.id = "temp";
    script.src =
      "https://c0dco635.caspio.com/dp/e7508000a093229793654ec5aa3c/emb";
    script.async = true;

    // Load script
    const div = document.querySelector("#admin_content");
    div.appendChild(script);
  }, []);

  const handleNav = click_type => {
    // Remove previous child node
    let div = document.querySelector("#admin_content");
    const parent = div.parentNode;
    parent.removeChild(div);

    // Set script atr
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "temp";
    script.async = true;

    // Recreate div node
    const admin = document.querySelector("#admin_results");
    div = document.createElement("div");
    div.id = "admin_content";
    admin.appendChild(div);

    // Refocus content element
    let curr = document.querySelector("#admin_content");

    switch (click_type) {
      case "L":
        script.src =
          "https://c0dco635.caspio.com/dp/e7508000a093229793654ec5aa3c/emb";

        // Load script
        curr.appendChild(script);
        break;

      case "C":
        script.src =
          "https://c0dco635.caspio.com/dp/e7508000a73554fd5be14cd9b8b4/emb";

        // Load script
        curr.appendChild(script);
        break;

      case "J":
        script.src =
          "https://c0dco635.caspio.com/dp/e7508000398ed4e16ab94896ab6b/emb";

        // Load script
        curr.appendChild(script);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Navbar color="fade" fade expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink onClick={() => handleNav("L")}>Listed Positions</NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink onClick={() => handleNav("C")}>
                Applicant Directory
              </NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink onClick={() => handleNav("J")}>Post Job</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="content" id="admin_results">
        <div id="admin_content"></div>
      </div>
    </div>
  );
}
