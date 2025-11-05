import { NextResponse } from "next/server";

export async function POST(req) {
  let { vibe } = await req.json();

  vibe = vibe.slice(0, 300);
  console.log(vibe);

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error("API key not found in environment variables");
    return NextResponse.json(
      { error: "API key configuration error" },
      { status: 500 }
    );
  }

  // const url = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${apiKey}`;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Generate a complete theme based on: "${vibe}".
                Return a JSON object with:
                1. Color scheme with keys: '--color-primary', '--color-accent', '--color-accent-hover', '--color-onAccent', and '--color-text' (valid hex codes)
                2. Font selection with keys: '--font-heading' and '--font-body' (select from Google Fonts only)
                
                For fonts, choose options that match the theme's mood. Background is '--color-primary', and text is '--color-text'.
                '--color-onAccent' should contrast well with '--color-accent' for readability.
                Return ONLY a valid JSON object without any explanation or markdown. Keep both font data and color data in the same json object, no nesting of objects`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;

    console.log("Raw response:", rawText);

    let jsonObject;

    // First, try to parse the response directly
    try {
      jsonObject = JSON.parse(rawText);
    } catch (e) {
      console.log("Direct parsing failed, trying to extract JSON from text");

      // Look for JSON in markdown code block
      const jsonMatch = rawText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        try {
          jsonObject = JSON.parse(jsonMatch[1].trim());
        } catch (e) {
          console.error("Failed to parse extracted JSON from code block");
          throw e;
        }
      } else {
        // If no code block, try to find JSON object directly
        const objMatch = rawText.match(/(\{[\s\S]*\})/);
        if (objMatch) {
          try {
            jsonObject = JSON.parse(objMatch[0]);
          } catch (e) {
            console.error("Failed to parse JSON from object match");
            throw e;
          }
        } else {
          throw new Error("No JSON found in the response");
        }
      }
    }

    return NextResponse.json(jsonObject);
  } catch (error) {
    console.error("Error generating theme:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
