export const timeLapse = (date) => {
  const oldDate = new Date(date);
  const now = new Date();
  const difference = now - oldDate;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.5);
  const years = Math.floor(months / 12);
  if (years === 1) return `${years} año`;
  if (years > 0) return `${years} años`;
  if (months === 1) return `${months} mes`;
  if (months > 0) return `${months} meses`;
  if (days === 1) return `${days} día`;
  if (days > 0) return `${days} días`;
  if (hours === 1) return `${hours} hora`;
  if (hours > 0) return `${hours} horas`;
  if (minutes === 1) return `${minutes} minuto`;
  if (minutes > 0) return `${minutes} minutos`;
  if (seconds === 1) return `${seconds} segundo`;
  if (seconds > 0) return `${seconds} segundos`;
  return '';
};

export const simpleTimeLapse = (date) => {
  const oldDate = new Date(date);
  const now = new Date();
  const difference = now - oldDate;
  return difference;
};
