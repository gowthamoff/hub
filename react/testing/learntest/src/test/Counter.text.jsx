import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    render(<Counter initialValue={0} />);
  });

  test("renders with initial value", () => {
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("Count: 0");
  });

  test("increments counter when increment button is clicked", () => {
    const incrementButton = screen.getByTestId("increment-button");
    const counterValue = screen.getByTestId("counter-value");

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent("Count: 1");
  });

  test("decrements counter when decrement button is clicked", () => {
    const decrementButton = screen.getByTestId("decrement-button");
    const counterValue = screen.getByTestId("counter-value");

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent("Count: -1");
  });

  test("resets counter when reset button is clicked", () => {
    // First increment a few times
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Then reset
    const resetButton = screen.getByTestId("reset-button");
    const counterValue = screen.getByTestId("counter-value");

    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent("Count: 0");
  });

  test("accepts and renders custom initial value", () => {
    render(<Counter initialValue={5} />);
    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue).toHaveTextContent("Count: 5");
  });

  test("multiple interactions work correctly", () => {
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const counterValue = screen.getByTestId("counter-value");

    fireEvent.click(incrementButton); // 1
    fireEvent.click(incrementButton); // 2
    fireEvent.click(decrementButton); // 1

    expect(counterValue).toHaveTextContent("Count: 1");
  });
});
