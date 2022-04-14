import { getByTestId, render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories"; //👈  Our stories imported here

//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks, Loading, Empty } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});

it("render loading state", () => {
  const { container } = render(<Loading />);
  expect(container.querySelector(".loading-item")).not.toBe(null);
});

it("renders empty state", () => {
  const { container } = render(<Empty />);
  expect(container.querySelector(".wrapper-message")).not.toBe(null);
});

it("renders empty state getByTestId", () => {
  render(<Empty />);
  expect(screen.getByTestId("empty")).toBeInTheDocument();
});
