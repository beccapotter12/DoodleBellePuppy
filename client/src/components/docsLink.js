import React from "react";
import { MDBRow, MDBIcon } from "mdbreact";

const DocsLink = props => {
  return (
    <div>
      <MDBRow className="align-items-center mt-5">
        <h4 className="grey-text" style={{ margin: "0px" }}>
          <strong>{props.title}</strong>
        </h4>
        <a
          className="border grey-text px-2 border-light rounded ml-2"
          target="_blank"
          href={props.href + "/?utm_source=DemoApp&utm_medium=MDBReactPro"}
          rel="noopener noreferrer"
        >
          <MDBIcon icon="graduation-cap" className="mr-2" />
          Docs
        </a>
      </MDBRow>
      <hr className="mb-5" />
    </div>
  );
};

export default DocsLink;