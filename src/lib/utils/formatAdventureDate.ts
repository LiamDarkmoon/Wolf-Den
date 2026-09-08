export function formatAdventureDate(dateString: string) {
    const date = new Date(dateString);
    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    return `${days[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1}`;
}