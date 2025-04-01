export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const botToken = config.TELEGRAM_BOT_TOKEN; 
    const { message } = await readBody(event);
    const chatId = config.public.TELEGRAM_CHAT_ID;
  
    if (!message) {
      return { error: "Message is required" };
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
        const response = await $fetch(telegramUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
  
        return { success: true, response };
    } catch (error: any) {
        console.error("Error sending Telegram message:", error);
        return {
            success: false,
            error: error.message
        };
    }
  });
  