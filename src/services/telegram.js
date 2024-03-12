export const sendTelegramMessage = async (token, chatid, message) => {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatid,
                text: message,
            }),
        });

        await response.json();
    } catch (exc) {
        console.error(exc)
    }

}
