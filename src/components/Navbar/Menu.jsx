import { motion } from "framer-motion";
import "./Navbar.scss";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
const Menu = ({ links }) => {
  return (
    <motion.div className="app__menu" whileInView={{ opacity: [0, 1] }} style={{zIndex: '10000'}}>
      {links.map((link) => (
        <motion.div
          whileInView={{ opacity: [0, 1], y: [10, 0] }}
          transition={{ delay: 0, duration: 0.3 }}
          key={link.id}
        >
          <ul>
            <li className="visible__links-header">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ fontSize: "2.3rem" }} />}
                  arial-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <a href="#">{link.heading}</a>
                </AccordionSummary>
                <AccordionDetails>
                  {link.link.map((aTag, index) => (
                    <div key={index} className="visible__links">
                      <motion.a
                        
                        href=""
                        whileInView={{ opacity: [0, 1] }}
                      >
                        {aTag}
                      </motion.a>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            </li>
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Menu;
