import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import { UnstyledPrimeReactProvider } from "../src";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <UnstyledPrimeReactProvider>
        <Story />
      </UnstyledPrimeReactProvider>
    ),
  ],
};

export default preview;
