export function getGoogleCalendarUrl({
  adventure_date,
  title,
  description = "",
  duration = 4,
  url = "",
}:{
    adventure_date: string;
    title: string;
    description?: string;
    duration?: number;
    url?: string;
}) {
  const start = new Date(adventure_date);

  if (Number.isNaN(start.getTime())) {
    throw new Error("Invalid adventure_date");
  }

  const end = new Date(
    start.getTime() + duration * 60 * 60 * 1000
  );

  const formatGoogleDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const details = [
    description,
    url ? `\n\nVer aventura en Wolf Den:\n${url}` : "",
  ].join("");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `⚔️ ${title} — Wolf Den`,
    dates: `${formatGoogleDate(start)}/${formatGoogleDate(end)}`,
    details,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}