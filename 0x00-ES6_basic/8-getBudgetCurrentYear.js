const getCurrentYear = new Date().getFullYear();

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear}`]: income,
    [`gdp-${getCurrentYear}`]: gdp,
    [`capital-${getCurrentYear}`]: capita,
  };
  return budget;
}
