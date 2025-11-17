import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    logoText: "Makers",
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  args: {
    logoText: "Makers",
    isLoggedIn: true,
    userName: "홍길동",
  },
};
