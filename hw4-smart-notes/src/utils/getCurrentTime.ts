

export function getCurrentTime(minutes: number = 0, hours: number = 0) {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
}