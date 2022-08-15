import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const LinkComponent = ({ links }) => {
  return (
    <motion.div className="link-hover" whileInView={{ opacity: [0, 1] }}>
      <motion.div
        transition={{ ease: "easeInOut" }}
        className="links-visible gap-both"
      >
        {links.map((link, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ delay: (index % index) + 0.25 }}
            key={link.id}
          >
            <ul>
              <li>{link.heading}</li>
              {link.link.map((aTag, i) => (
                <Link to="/" key={i}>
                  {aTag}
                </Link>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LinkComponent;
