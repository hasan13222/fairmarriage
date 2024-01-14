import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion_wrapper">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Community
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                Is FairMarriage Matrimony limited to a specific community or religion?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                No, FairMarriage Matrimony is inclusive and caters to individuals from diverse communities, backgrounds, and religious beliefs. We embrace diversity and provide a platform for all seeking a fair and harmonious marriage.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Authenticity
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                How do you ensure the authenticity of profiles on FairMarriage Matrimony?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                We employ stringent verification processes to validate the authenticity of profiles. Users are encouraged to provide accurate information, and our team verifies details to maintain a trustworthy and genuine community.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Interest
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                How can I express interest in a potential match?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                You can express interest by sending a personalized message or using our predefined expressions of interest. This initiates communication and allows you to start getting to know your potential match better.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Privacy
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                Are there privacy measures in place on FairMarriage Matrimony?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Yes, we prioritize the privacy of our users. Personal information is kept secure, and users have control over the visibility of their details. We adhere to strict privacy policies to ensure a safe and secure online environment.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
