"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { sampleThemes } from '@/lib/theme-utils';
import loadFont from '@/lib/font-utils';

const ThemeContext = createContext();

const defaultTheme = sampleThemes[1];

export function ThemeProvider({ children }) {
  const [currentThemeText, setCurrentThemeText] = useState(defaultTheme.name);
  const [currentTheme, setCurrentTheme] = useState(defaultTheme.theme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const themeCookie = Cookies.get('portfolio-theme');
    const themeTextCookie = Cookies.get('portfolio-theme-text');

    if (themeCookie) {
      try {
        setCurrentTheme(JSON.parse(themeCookie));
      } catch (e) {
        console.error("Error parsing theme cookie:", e);
      }
    }

    if (themeTextCookie) {
      setCurrentThemeText(themeTextCookie);
    }
  }, []);

  const updateTheme = (theme, text) => {
    setCurrentTheme(theme);
    if (text) setCurrentThemeText(text);

    // Update cookies (30 day expiration)
    Cookies.set('portfolio-theme', JSON.stringify(theme), { expires: 30 });
    if (text) Cookies.set('portfolio-theme-text', text, { expires: 30 });

    if (theme['--font-heading']) {
      loadFont(theme['--font-heading']);
    }
    if (theme['--font-body']) {
      loadFont(theme['--font-body']);
    }

    const cssVariables = Object.entries(theme)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n  ');

    document.getElementById('st').innerHTML = `
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
    `;
  };

  async function getNewTheme(vibe) {
    setLoading(true);

    const trimmedVibe = vibe.slice(0, 300);

    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ vibe: trimmedVibe })
      });

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const themeObject = await res.json();

      if (themeObject.error) {
        throw new Error(themeObject.error);
      }

      updateTheme(themeObject, vibe);
    } catch (error) {
      console.error("Error fetching new theme:", error);
      alert(`Error generating theme: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      currentThemeText,
      loading,
      getNewTheme,
      setCurrentTheme: (theme) => updateTheme(theme),
      setCurrentThemeText: (text) => {
        setCurrentThemeText(text);
        Cookies.set('portfolio-theme-text', text, { expires: 30 });
      },
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}