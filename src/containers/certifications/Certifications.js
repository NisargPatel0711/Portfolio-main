import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { awards, certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            {props.title}
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {
          (props.awards === true) ? (
            awards.awards.map((cert) => {
              return <CertificationCard certificate={cert} theme={theme} />;
            })
          ) : (
            certifications.certifications.map((cert) => {
              return <CertificationCard certificate={cert} theme={theme} />;
            })
          )
        }
      </div>
    </div>
  );
}

export default Certifications;
