"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import loadFont from "@/lib/font-utils";
import { sampleThemes } from "@/lib/theme-utils";

const FontLoader = () => {
    useEffect(() => {
        // Add preconnect links for faster font loading
        const preconnectGoogle = document.createElement("link");
        preconnectGoogle.rel = "preconnect";
        preconnectGoogle.href = "https://fonts.googleapis.com";
        document.head.appendChild(preconnectGoogle);

        const preconnectGstatic = document.createElement("link");
        preconnectGstatic.rel = "preconnect";
        preconnectGstatic.href = "https://fonts.gstatic.com";
        preconnectGstatic.crossOrigin = "anonymous";
        document.head.appendChild(preconnectGstatic);

        // Retrieve the saved theme from cookies
        const themeCookie = Cookies.get("portfolio-theme");
        let theme = sampleThemes[1].theme;

        if (themeCookie) {
            try {
                theme = JSON.parse(themeCookie);

                if (theme["--font-heading"]) {
                    loadFont(theme["--font-heading"]);
                }
                if (theme["--font-body"]) {
                    loadFont(theme["--font-body"]);
                }
            } catch (error) {
                console.error("Error parsing theme cookie:", error);
            }
        }

        // Generate CSS variables for :root
        const cssVariables = Object.entries(theme)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n  ');

        // Update the style tag with both root variables and font settings
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
    }, []);

    return null;
};

export default FontLoader;