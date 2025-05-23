import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";

export function MyNavbar() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width on resize
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyles =
    "text-miss-ivy-gold hover:!text-white hover:bg-hidden text-md text-center border-black border-b-2 hover:cursor-pointer";

  // Conditionally set the margin-left class based on screen size
  const middleAnchorMargin =
    screenSize >= 1400 ? "ml-[48%]" : screenSize < 767 ? "ml-[44%]" : "";

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar fluid className="bg-miss-ivy-green w-screen fixed z-20">
      <Navbar.Brand onClick={() => handleSmoothScroll("top")}>
        <img
          src="/brand-name-golden.png"
          alt="Miss Ivy Logo"
          className="w-14 h-14 ml-2 hover:cursor-pointer"
        />
      </Navbar.Brand>

      {/* Conditionally render the anchor based on screen size */}
      {screenSize >= 1400 || screenSize <= 767 ? (
        <a onClick={() => handleSmoothScroll("top")} className={`fixed w-10 ${middleAnchorMargin} hover:cursor-pointer`}>
          <img src="/icon-golden.png" alt="Middle Icon" />
        </a>
      ) : null}

      <Navbar.Toggle className="hover:bg-black hover:border-2 border-miss-ivy-gold text-miss-ivy-gold focus:ring-0" />

      <Navbar.Collapse className="z-20 bg-miss-ivy-green lg">
        <Navbar.Link
          href="https://www.opentable.ca/r/miss-ivy-toronto?corrid=d2c2c43e-d0d0-449b-9550-28abfea43d60&p=2&sd=2024-10-28T19%3A00%3A00"
          className={`${linkStyles}`}
          target="_blank"
        >
          Reservations
        </Navbar.Link>
        <Navbar.Link onClick={() => handleSmoothScroll("dining")} className={`${linkStyles}`}>
          Dining
        </Navbar.Link>
        <Navbar.Link onClick={() => handleSmoothScroll("cocktails")} className={`${linkStyles}`}>
          Cocktails
        </Navbar.Link>
        <Navbar.Link onClick={() => handleSmoothScroll("events")} className={`${linkStyles}`}>
          Events
        </Navbar.Link>
        <Navbar.Link onClick={() => handleSmoothScroll("contact")} className={`${linkStyles}`}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
