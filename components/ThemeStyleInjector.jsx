'use server';

import { cookies } from 'next/headers';
import { sampleThemes } from '@/lib/theme-utils.js';

export default async function ThemeStyleInjector() {
  // Get theme from cookies
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('portfolio-theme');

  // DEFAULT THEME
  let theme = sampleThemes[1].theme;

  // Parse the theme cookie if it exists
  if (themeCookie) {
    try {
      theme = JSON.parse(themeCookie.value);
    } catch (e) {
      console.error("Error parsing theme cookie:", e);
    }
  }

  // Generate CSS variables
  const cssVariables = Object.entries(theme)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n  ');

  return (
    <style id='st' dangerouslySetInnerHTML={{
      __html: `
      :root {
        ${cssVariables}
      }
      
      body {
        font-family: ${theme['--font-body'] || 'var(--font-robotoMono)'};
        background-color: var(--color-primary);
        color: var(--color-text);
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: ${theme['--font-heading'] || 'var(--font-robotoMono)'};
      }
    `

    }} />
  );
}