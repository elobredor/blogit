export const formatDate = (date) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  
  const classDate = new Date(date);
  
  const formattedDate = `${months[classDate.getMonth()]} ${classDate.getDate()} del ${classDate.getFullYear()}`;
  
  return formattedDate;
}

export const setReadingTime = (words) => {
  const readingTime = `${Math.ceil(words.split(' ').length / 100)} min de lectura`;
  return readingTime;
}


