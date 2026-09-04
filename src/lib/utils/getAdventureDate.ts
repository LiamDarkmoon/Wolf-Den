export function getNextAdventureDate() {
  const now = new Date();

  const day = now.getDay();
  const daysUntilSunday = day === 0 ? 7 : 7 - day;

  const sunday = new Date(now);
  sunday.setDate(sunday.getDate() + daysUntilSunday);

  const yyyy = sunday.getFullYear();
  const mm = String(sunday.getMonth() + 1).padStart(2, "0");
  const dd = String(sunday.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}T16:00:00-03:00`;
}