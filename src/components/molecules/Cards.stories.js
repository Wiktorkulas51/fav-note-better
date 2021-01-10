import React from "react";
import { StyledWrappers, Card } from "./Cards";

export default {
  component: StyledWrappers,
  title: "Molecules/Cards",
};

export const cardsPrimary = () => <Card />;
export const cardsSecondary = () => <Card cardType="twitter" />;
export const cardsTertiary = () => <Card cardType="article" />;
