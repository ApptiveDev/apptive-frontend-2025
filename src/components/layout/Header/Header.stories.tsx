import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["dark", "light", "gray"],
      description: "섹션에 따른 헤더 색상 변경",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
  },
};

//디폴트
export const Default: Story = {
  args: {
    variant: "dark",
  },
};
