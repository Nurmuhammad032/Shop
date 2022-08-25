import "./Navbar.scss";
import Menu from "./Menu";
import { Accordion } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  exclusive,
  newArrivals,
  clothing,
  dresses,
  shoes,
  accessories,
  sale,
} from "./LinkData";
import { Link } from "react-router-dom";

const MenuAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Du Exclusive
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={exclusive} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            New arrivals
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={newArrivals} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Clothing
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={clothing} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Dresses
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={dresses} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Shoes
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={shoes} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Accessories
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={accessories} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.3rem" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Link to="" className="app__menu-heading">
            Sale
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          <Menu links={sale} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuAccordion;
