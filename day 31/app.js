let userName = 'Hussam Soufan';
let age = 32;
let hoppies = ['sports', 'cooking', 'reading'];
let job = { 
  title: 'developer', 
  place: 'New York', 
  salary: 50000 
};

function calculateAdultYears(userAge) {
  return userAge - 18;
}

let adultYears = calculateAdultYears(age);
alert(adultYears);