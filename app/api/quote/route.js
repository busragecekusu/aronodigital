import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const QUOTES_FILE = path.join(process.cwd(), 'data', 'quotes.txt');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Add a new quote
function addQuote(quoteData) {
  ensureDataDir();
  
  const quote = {
    ...quoteData,
    date: new Date().toISOString()
  };

  const quoteString = JSON.stringify(quote);
  
  // Append to file with separator
  const separator = fs.existsSync(QUOTES_FILE) && fs.statSync(QUOTES_FILE).size > 0 
    ? '\n---\n' 
    : '';
  
  fs.appendFileSync(QUOTES_FILE, separator + quoteString, 'utf-8');
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phone, message } = data;
    
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Geçersiz e-posta adresi' },
        { status: 400 }
      );
    }

    // Save quote
    addQuote({ firstName, lastName, email, phone, message: message || '' });

    return NextResponse.json({ 
      success: true, 
      message: 'Teklifiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.' 
    });
  } catch (error) {
    console.error('Error saving quote:', error);
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
