export function formatAdventureDate(dateString: string) {
    const date = new Date(dateString);
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    return `${days[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1}`;
}

export function getLastWeek(){
    const now = new Date();
    const oneWeekAgo = new Date(
      now.getTime() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    return oneWeekAgo
}

export function getLastMonth(){
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    return oneMonthAgo.toISOString()
}