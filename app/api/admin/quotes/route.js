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

// Read quotes from file
function readQuotes() {
  ensureDataDir();
  
  if (!fs.existsSync(QUOTES_FILE)) {
    return [];
  }

  try {
    const content = fs.readFileSync(QUOTES_FILE, 'utf-8');
    if (!content.trim()) return [];
    
    return content
      .trim()
      .split('\n---\n')
      .filter(block => block.trim())
      .map(block => {
        try {
          return JSON.parse(block);
        } catch {
          return null;
        }
      })
      .filter(quote => quote !== null);
  } catch (error) {
    console.error('Error reading quotes:', error);
    return [];
  }
}

// Write quotes to file
function writeQuotes(quotes) {
  ensureDataDir();
  
  const content = quotes
    .map(quote => JSON.stringify(quote))
    .join('\n---\n');
  
  fs.writeFileSync(QUOTES_FILE, content, 'utf-8');
}

// GET - Fetch all quotes
export async function GET(request) {
  try {
    const quotes = readQuotes();
    return NextResponse.json({ success: true, quotes });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { success: false, message: 'Teklifler yüklenemedi' },
      { status: 500 }
    );
  }
}

// DELETE - Remove a quote by index
export async function DELETE(request) {
  try {
    const { index } = await request.json();
    
    if (typeof index !== 'number' || index < 0) {
      return NextResponse.json(
        { success: false, message: 'Geçersiz index' },
        { status: 400 }
      );
    }

    const quotes = readQuotes();
    
    if (index >= quotes.length) {
      return NextResponse.json(
        { success: false, message: 'Teklif bulunamadı' },
        { status: 404 }
      );
    }

    quotes.splice(index, 1);
    writeQuotes(quotes);

    return NextResponse.json({ 
      success: true, 
      message: 'Teklif silindi',
      quotes 
    });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return NextResponse.json(
      { success: false, message: 'Silme işlemi başarısız' },
      { status: 500 }
    );
  }
}
