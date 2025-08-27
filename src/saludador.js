export function getGreeting(hour){
  let result = 'Buenas noches';
  if (hour >= 5 && hour < 12) {
    result = 'Buenos días';
  } else if (hour >= 12 && hour < 18) {
    result = 'Buenas tardes';
  }
  return result;
}

export function GreetingForGenderAge(greeting, gender, age){
  if (age > 30){
    if (gender === 'femenino'){
      return `${greeting} Sra.`;
    }
    return `${greeting} Sr.`;
  }
  if (gender === 'femenino'){
    return `${greeting} señorita`;
  }
  return `${greeting} joven`;
}
