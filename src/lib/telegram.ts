import { LeadSubmission } from '@/types';

export async function sendLeadToTelegram(lead: LeadSubmission): Promise<{ success: boolean; message: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const formattedMessage = `
<b>[ НОВАЯ ЗАЯВКА // APEX AGENCY ]</b>

<b>Имя:</b> ${escapeHtml(lead.name || 'Не указано')}
<b>Контакт:</b> ${escapeHtml(lead.contact || 'Не указан')}
<b>Услуга:</b> ${escapeHtml(lead.serviceType || 'Не выбрана')}
<b>Задача:</b> ${escapeHtml(lead.projectTask || 'Без описания')}
<b>Формат:</b> ${escapeHtml(lead.format || 'Стандарт')}
<b>Срок / Бюджет:</b> ${escapeHtml(lead.budgetOrTimeline || 'Стандарт')}
${lead.conceptNotes ? `\n<b>Концепт:</b>\n<i>${escapeHtml(lead.conceptNotes)}</i>` : ''}

<b>Источник:</b> ${escapeHtml(lead.source || 'Сайт Apex Agency')}
<b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })} (Almaty)
  `.trim();

  if (!token || !chatId) {
    console.warn('[Telegram Dispatch] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in env.');
    return {
      success: true,
      message: 'Заявка зарегистрирована. Подключите TELEGRAM_BOT_TOKEN для автоматической отправки в бота.'
    };
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Telegram API Error]', errorData);
      return { success: false, message: 'Ошибка при отправке в Telegram API' };
    }

    return { success: true, message: 'Заявка успешно доставлена менеджеру' };
  } catch (error) {
    console.error('[Telegram Dispatch Exception]', error);
    return { success: false, message: 'Сетевая ошибка при передаче данных' };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
