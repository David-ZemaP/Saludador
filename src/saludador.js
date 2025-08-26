export function getGreeting(hour){
  let result = 'Buenas noches';
  if (hour >= 5 && hour < 12) {
    result = 'Buenos días';
  } else if (hour >= 12 && hour < 18) {
    result = 'Buenas tardes';
  }
  return result;
}

export function adjustGreetingForGenderAge(greeting, gender, age){
  // Then, add formal titles for people over 30
  if (gender === 'femenino' && age > 30) {
    return `${greeting} Sra.`;
  }
  if (gender === 'masculino' && age > 30) {
    return `${greeting} Sr.`;
  }

  return greeting;
}
