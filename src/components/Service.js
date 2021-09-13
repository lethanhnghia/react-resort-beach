import React from "react";

import { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import {
  ServiceContainer,
  ItemContainer,
  IconContainer,
  TitleHead,
  Detail,
  Title,
  ItemList,
} from "./ServiceElement";

const Service = () => {
  const [data] = useState([
    {
      icon: <FaCocktail />,
      title: "free colktail",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem?",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem?",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem?",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beeer",
      detail:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, exercitationem?",
    },
  ]);

  return (
    <ServiceContainer>
      <Title>Service</Title>
      <ItemList>
        {data.map((item) => {
          return (
            <ItemContainer key={item.title}>
              <IconContainer>{item.icon}</IconContainer>
              <TitleHead>{item.title}</TitleHead>
              <Detail>{item.detail}</Detail>
            </ItemContainer>
          );
        })}
      </ItemList>
    </ServiceContainer>
  );
};

export default Service;
