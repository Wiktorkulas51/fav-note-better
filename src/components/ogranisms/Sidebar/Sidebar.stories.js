import React from "react";
import SideBar from "./Sidebar";
import { MemoryRouter } from "react-router-dom";

export default {
  component: SideBar,
  title: "Organisms/sidebar",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const SideBarNormal = () => <SideBar></SideBar>;
