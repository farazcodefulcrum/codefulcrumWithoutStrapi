import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <>
      <Helmet defaultTitle="codeFulcrum" title={title} defer>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Suprabha Blog!" />
        <meta name="title" content="Suprabha Blog!" />
      </Helmet>
    </>
  );
};

export default Head;
