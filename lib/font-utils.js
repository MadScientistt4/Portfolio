const loadFont = (fontName) => {
    if (!fontName) return;
  
    // Clean the font name
    const cleanFontName = fontName.replace(/['"]/g, "");
  
    // Skip system fonts
    if (
      cleanFontName.includes("system-ui") ||
      cleanFontName.includes("-apple-system") ||
      cleanFontName.includes("sans-serif") ||
      cleanFontName.includes("serif") ||
      cleanFontName.includes("monospace")
    ) {
      return;
    }
  
    // Format font name for Google Fonts URL
    const formattedName = cleanFontName.split(" ").join("+");
  
    // Check if already loaded
    const existingLink = document.querySelector(`link[href*="${formattedName}"]`);
    if (existingLink) return;
  
    // Load the font with font-display: swap for better loading experience
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@300;400;500;600;700&display=swap&font-display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };
  
  export default loadFont;