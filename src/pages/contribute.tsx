import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";

import { Container, Row, Column } from "../grid";

const ProjectDescription = () => (
  <div>
    <p>
      Celerity is a research project that is being developed openly on{" "}
      <a href="https://github.com/celerity" target="_blank">
        GitHub
      </a>
      .
    </p>
    <p>
      If you want to contribute to Celerity's development, feel free to file a{" "}
      <a
        href="https://github.com/celerity/celerity-runtime/blob/master/CONTRIBUTING.md"
        target="_blank"
      >
        pull request
      </a>
      !<br /> Run into problems or limitations? Don't hesitate to{" "}
      <a
        href="https://github.com/celerity/celerity-runtime/issues/new"
        target="_blank"
      >
        open an issue
      </a>
      .<br /> For general questions and support, join us on our{" "}
      <a href="https://discord.gg/k8vWTPB">Discord server</a>!
    </p>
  </div>
);

const Research = () => (
  <div>
    <h2>Celerity Research Collaboration</h2>
    For inquiries regarding research opportunities and collaboration, please
    contact either{" "}
    <a href="https://dps.uibk.ac.at/~petert/" target="_blank">
      Peter Thoman
    </a>{" "}
    at UIBK or{" "}
    <a href="https://www.cosenza.eu/" target="_blank">
      Biagio Cosenza
    </a>{" "}
    at UNISA.
  </div>
);

export default () => (
  <Layout>
    <Container>
      <Row>
        <Column size={12} className="text--center">
          <img
            className="celerity-loves-github"
            src={`/img/celerity_loves_github.png`}
            srcSet={`/img/celerity_loves_github.png, /img/celerity_loves_github@2x.png 2x`}
            alt=""
          />
          <ProjectDescription />
        </Column>
      </Row>
      <hr className="separator" />
      <Row>
        <Column size={12} className="text--center">
          <Research />

          <div className="uni-logos">
            <a href="https://www.uibk.ac.at" target="_blank">
              <img src={`/img/uibk_logo.svg`} alt="University of Innsbruck" />
            </a>
            <a href="https://web.unisa.it" target="_blank">
              <img src={`/img/unisa_logo.svg`} alt="University of Salerno" />
            </a>
          </div>
        </Column>
      </Row>
    </Container>
  </Layout>
);
