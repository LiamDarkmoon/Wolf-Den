export function adventureRegistrationEmail({
    adventureName,
    adventureDate,
    description,
    adventureUrl,
}: {
    adventureName: string;
    adventureDate: string;
    description?: string;
    adventureUrl: string;
}) {
    return `
        <!DOCTYPE html>
        <html>
            <body>
                <h1>⚔️ ¡Aventura confirmada!</h1>

                <p>
                    Te has registrado correctamente en
                    <strong>${adventureName}</strong>.
                </p>

                <p>
                    📅 ${adventureDate}
                </p>

                ${
                    description
                        ? `<p>${description}</p>`
                        : ""
                }

                <p>
                    <a href="${adventureUrl}">
                        Ver aventura en Wolf Den
                    </a>
                </p>
            </body>
        </html>
    `;
}