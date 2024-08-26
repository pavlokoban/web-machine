import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  let lang = 'en';

  if (pathname.startsWith('/ru')) {
    lang = 'ru';
  } else if (pathname.startsWith('/uk')) {
    lang = 'uk';
  }

  // Создаем экземпляр NextResponse
  const response = NextResponse.next();
  
  // Устанавливаем язык в заголовке ответа
  response.headers.set('x-lang', lang);

  return response; // Возвращаем экземпляр NextResponse
}
