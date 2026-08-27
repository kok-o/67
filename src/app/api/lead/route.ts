import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToTelegram } from '@/lib/telegram';
import { LeadSubmission } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadSubmission;

    if (!body.name && !body.contact && !body.projectTask) {
      return NextResponse.json(
        { error: 'Заполните контактные данные или опишите задачу' },
        { status: 400 }
      );
    }

    const result = await sendLeadToTelegram(body);

    return NextResponse.json({
      success: true,
      message: result.message,
      leadData: body,
    });
  } catch (error) {
    console.error('[API Lead Handler Error]', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера при обработке заявки' },
      { status: 500 }
    );
  }
}
