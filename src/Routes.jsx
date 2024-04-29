import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ThermofisherScientificCorporateLandingPageCFour from "pages/ThermofisherScientificCorporateLandingPageCFour";
import ThermofisherScientificCorporateCSR from "pages/ThermofisherScientificCorporateCSR";
import ThermofisherScientificCorporateInvestors from "pages/ThermofisherScientificCorporateInvestors";
import ThermofisherScientificCorporateNewsroom from "pages/ThermofisherScientificCorporateNewsroom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "thermofisherscientificcorporatelandingpagecfour",
      element: <ThermofisherScientificCorporateLandingPageCFour />,
    },
    {
      path: "thermofisherscientificcorporatecsr",
      element: <ThermofisherScientificCorporateCSR />,
    },
    {
      path: "thermofisherscientificcorporateinvestors",
      element: <ThermofisherScientificCorporateInvestors />,
    },
    {
      path: "thermofisherscientificcorporatenewsroom",
      element: <ThermofisherScientificCorporateNewsroom />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
