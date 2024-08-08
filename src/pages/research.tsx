import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
import { Container, Row, Column } from "../grid";

const publications = [
  {
    title:
      "Balancing Tracking Granularity and Parallelism in Many-Task Systems: The Horizons Approach",
    authors: "Peter Thoman, Philip Salzmann",
    publishedAt: "SN Computer Science, 2024",
    doi: "10.1007/s42979-024-02749-w",
  },
  {
    title:
      "Automatic Discovery of Collective Communication Patterns in Parallelized Task Graphs",
    authors:
      "Fabian Knorr, Philip Salzmann, Peter Thoman, and Thomas Fahringer ",
    publishedAt: "International Journal of Parallel Programming, 2024",
    doi: "10.1007/s10766-024-00767-y",
  },
  {
    title:
      "Command Horizons: Coalescing Data Dependencies while Maintaining Asynchronicity",
    authors: "Peter Thoman, Philip Salzmann",
    publishedAt: "WAMTA 2023",
    doi: "10.1007/978-3-031-32316-4_2",
  },
  {
    title:
      "An Asynchronous Dataflow-Driven Execution Model For Distributed Accelerator Computing",
    authors:
      "Philip Salzmann, Fabian Knorr, Peter Thoman, Philipp Gschwandtner, Biagio Cosenza, and Thomas Fahringer",
    publishedAt: "CCGRID 2023",
    doi: "10.1109/CCGrid57682.2023.00018",
  },
  {
    title:
      "Declarative Data Flow in a Graph-Based Distributed Memory Runtime System",
    authors: "Fabian Knorr, Peter Thoman, Thomas Fahringer",
    publishedAt: "International Journal of Parallel Programming, 2022",
    doi: "10.1007/s10766-022-00743-4",
  },
  {
    title: "The Celerity High-level API: C++20 for Accelerator Clusters",
    authors:
      "Peter Thoman, Florian Tischler, Philip Salzmann, and Thomas Fahringer",
    publishedAt: "HLPP 2021",
  },
  {
    title:
      "Porting Real-World Applications to GPU Clusters: A Celerity and CRONOS Case Study",
    authors:
      "Philipp Gschwandtner, Ralf Kissmann, David Huber, Philip Salzmann, Fabian Knorr, Peter Thoman, and Thomas Fahringer",
    publishedAt: "eScience 2021",
  },
  {
    title: "Celerity: High-level C++ for Accelerator Clusters",
    authors: "Peter Thoman, Philip Salzmann, Biagio Cosenza, Thomas Fahringer",
    publishedAt: "Euro-Par 2019",
    doi: "10.1007/978-3-030-29400-7_21",
  },
];

const events = [
  {
    title:
      "A High-Level API for Dynamic Load Balancing in Large-Scale Parameter Sweeps",
    authors: "Philip Salzmann",
    info: "HLPP 2024",
  },
  {
    title:
      "SYCL and Celerity: High(-ish) level, vendor-independent C++ for GPU parallelism",
    authors: "Peter Thoman",
    info: "Guest Lecture, Trento 2023",
    video: "https://www.youtube.com/watch?v=xK_tCN9nm4Q",
  },
  {
    title:
      "Automatic Discovery of Collective Communication Patterns in Parallelized Task Graphs",
    authors: "Fabian Knorr",
    info: "HLPP 2023",
  },
  {
    title: "SYCL Panel Discussion",
    authors: "Peter Thoman",
    info: "IWOCL/SYCLcon 2021",
  },
  {
    title: "Celerity — High-Level Distributed Accelerator C++ Programming",
    authors: "Philipp Gschwandtner",
    info: "Talk at AHPC 2020",
  },
  {
    title: "Celerity: High-productivity Programming for Accelerator Clusters",
    authors: "Peter Thoman",
    info: "Talk at ScalPerf 2019",
  },
  {
    title: "Introducing Celerity: High-level C++ for Accelerator Clusters",
    authors: "Philip Salzmann",
    info: "Demo session at HPCS 2019",
  },
];

const Research = () => (
  <Row>
    <Column size={12}>
      <div className="uni-logos margin-vert--lg">
        <a href="https://www.uibk.ac.at" target="_blank">
          <img src="/img/uibk_logo.svg" alt="University of Innsbruck" />
        </a>
        <a href="https://web.unisa.it" target="_blank">
          <img src="/img/unisa_logo.svg" alt="University of Salerno" />
        </a>
      </div>
      <div className="text--center margin-vert--lg">
        Celerity research is being carried out at the University of Innsbruck
        and the University of Salerno.
        <br />
        This page provides an overview of selected research publications and
        talks.
      </div>
    </Column>
  </Row>
);

function formatDOI(doi) {
  if (doi == null) return "";
  return (
    <span>
      <strong>DOI:</strong>{" "}
      <a href={`https://dx.doi.org/${doi}`} target="_blank">
        {doi}
      </a>
    </span>
  );
}

function formatVid(vid) {
  if (vid == null) return "";
  return (
    <strong>
      <a href={vid} target="_blank">
        Video
      </a>
    </strong>
  );
}

const Highlights = () => (
  <Row className="margin-vert--lg">
    <Column size={6}>
      <h2>Selected Publications</h2>
      {publications.map(({ title, authors, publishedAt, doi }) => (
        <div key={title} className="margin-bottom--lg">
          <h3 className="margin-bottom--none">{title}</h3>
          <div>{authors}</div>
          <div>
            <strong>{publishedAt}</strong>
          </div>
          <div>{formatDOI(doi)}</div>
        </div>
      ))}
    </Column>
    <Column size={6}>
      <h2>Selected Talks & Demos</h2>
      {events.map(({ title, authors, info, video }) => (
        <div key={title} className="margin-bottom--lg">
          <h3 className="margin-bottom--none">{title}</h3>
          <div>{authors}</div>
          <div>
            <strong>{info}</strong>
          </div>
          {formatVid(video)}
        </div>
      ))}
    </Column>
  </Row>
);

const Acknowledgements = () => (
  <Row className="margin-vert--xl">
    <Column size={12}>
      <div className="text--center">
        <h2>Acknowledgements</h2>
        <p>
          This project has received funding from the{" "}
          <strong>FFG (Austrian Research Promotion Agency)</strong> under grant
          agreement <strong>FO999903595</strong>.
        </p>

        <p>
          This project has received funding from the{" "}
          <strong>
            European High-Performance Computing Joint Undertaking (JU)
          </strong>{" "}
          under grant agreement <strong>No 956137</strong>.
        </p>

        <p>
          This research has been partially funded by the{" "}
          <strong>FWF (I 3388)</strong> and{" "}
          <strong>DFG (CO 1544/1-1, project number 360291326)</strong> as part
          of the <strong>CELERITY</strong> project.
        </p>
      </div>
    </Column>
  </Row>
);

export default () => (
  <Layout>
    <Container>
      <Research />
      <Highlights />
      <hr className="separator" />
      <Acknowledgements />
    </Container>
  </Layout>
);
