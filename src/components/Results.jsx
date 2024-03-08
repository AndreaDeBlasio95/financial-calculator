import { calculateInvestmentResults } from "../utils/investment.js";

export default function Results({ input }) {
  calculateInvestmentResults(input);

  return <p>Results...</p>;
}
