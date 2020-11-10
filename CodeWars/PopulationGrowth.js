// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// lets use this equation to calculate savings
// Data pulled from this article (2019) https://www.cnbc.com/2019/08/11/what-is-the-magic-retirement-number-try-1point7-million.html
// The average American belives they need 1.7 mil to retire (taking 4% per year this works out to be around 65k/year)
// The average American contributes 10% or less of their salary to their 401k
// The average American contributes 8,788 ($8800) to their salary per year
// The average annual S&P 500 return from 1957 through 2018 is roughly 8%.
function nbYear(p0, percent, aug, p) {
  let years = 0;
  let raise = 7000

  while(p0 < p){
    p0 = p0 + (p0 * percent / 100) + aug + raise;
    years++;
  }

  return years;
}

function noGrowth(p0, aug, p){
  let years = 0;

  while(p0 < p){
    p0 = p0 + aug;
    years++;
  }

  return years;
}

// function inflation(years, desiredSalaryToday){
//   let inflation = .035;
//   let actualSalaryValue;
  
//   for(let i = 0; i < years; i++){
//     actualSalaryValue = desiredSalaryToday * (1-inflation);
//   }

//   return actualSalaryValue;
// }

console.log(nbYear(0, 8, 22500, 1700000));
//accounting for inflation next
// console.log(inflation(nbYear(14000, 8, 10000, 1700000), 1000000));
// console.log(noGrowth(0, 8, 10000, 1700000));
// console.log(1700000 * .04);

// console.log(nbYear(1500000, 2.5, 10000, 2000000));// 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000));// 94