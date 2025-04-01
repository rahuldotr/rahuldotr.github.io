export const useTelegram = () => {
    const sendNotification = async (message) => {
      try {
        await fetch('https://telegram-bot-backend-13bzn6yxu-01cr4b-gmailcoms-projects.vercel.app/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        });
        console.log('Telegram notification sent successfully');
        return true;
      } catch (error) {
        console.error('Error sending Telegram notification:', error);
        return false;
      }
    };
  
    const sendVisitorActionNotification = async (actionName) => {
      const userAgent = navigator.userAgent;
      const referrer = document.referrer || 'Direct visit';
      const screenSize = `${window.innerWidth}x${window.innerHeight}`;
      
      let ipInfo = 'Unknown';
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        ipInfo = `IP: ${data.ip}, Location: ${data.city}, ${data.country_name}, Org: ${data.org}`;
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
      
      const message = `
      🔔🔔 Action: ${actionName}! 🔔🔔
      =============================
      Device: ${userAgent}
      -----------------------------------------------
      Referrer: ${referrer}
      -----------------------------------------------
      Screen: ${screenSize}
      -----------------------------------------------
      ${ipInfo}
      -----------------------------------------------
      Time: ${new Date().toLocaleString()}
    `;
      
      return await sendNotification(message);
    };
  
    return {
      sendNotification,
      sendVisitorActionNotification
    };
  };
  