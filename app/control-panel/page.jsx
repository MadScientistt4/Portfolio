"use client";
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { useTheme } from '../../contexts/ThemeContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { sampleThemes } from '@/lib/theme-utils.js';
import { LoaderCircle } from 'lucide-react';

const Divider = () => {
  return (
    <div className='w-full max-w-3xl mx-auto my-2 h-[0.5] bg-[var(--color-accent)]/60'></div>
  )
}

export default function ControlPanel() {
  const [vibe, setVibe] = useState("");
  const { currentThemeText, loading, getNewTheme, setCurrentTheme, setCurrentThemeText } = useTheme();
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // For rate limiting
  useEffect(() => {
    let timer;
    if (isRateLimited && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRateLimited(false);
    }
    
    return () => clearTimeout(timer);
  }, [isRateLimited, countdown]);


  const handleThemeGeneration = () => {
    if (loading || isRateLimited || !vibe.trim()) return;
    
    getNewTheme(vibe);
    
    setIsRateLimited(true);
    setCountdown(12);
  };

  return (
    <main className='h-full w-full mx-auto max-w-3xl'>
      <div className="text-[var(--color-text)] bg-[var(--color-primary)] min-h-screen flex flex-col gap-6 p-6 items-center">
        <div className="text-center font-bold text-4xl text-[var(--color-accent)]">
          Control Panel
        </div>
        <p className='text-center text-[var(--color-text)]/90 max-w-2xl leading-relaxed text-lg'>
          Describe a <span className="font-semibold text-[var(--color-accent)]">vibe</span> — like 
          <em className="font-medium"> "Scary Halloween"</em>, or <em className="font-medium">"cyberpunk night"</em> — and let the 
          <span className="font-semibold text-[var(--color-accent)]"> AI Theme Generator </span>
          instantly create a unique color palette for the entire portfolio.  
          You can also explore the sample styles below for inspiration.
        </p>
        <Divider />
        <div className="@container h-full w-full">
          <div className='flex flex-col @xl:flex-row gap-6'>
            <div className="bg-[var(--color-accent)] text-2xl font-bold flex items-center justify-center 
            p-8 text-[var(--color-onAccent)] @xl:order-2 w-full rounded-2xl @xl:rounded-3xl shadow-lg
            transition-all duration-300 hover:shadow-xl">
              Accent Color
            </div>
            <div className='mt-2 @xl:mt-0 flex flex-col gap-4 @xl:order-1 w-full text-center'>
              <p className="text-lg">
                Current Vibe: <span className="font-bold capitalize text-[var(--color-accent)]">{currentThemeText}</span>
              </p>
              <Input
                type="text"
                placeholder="Enter a vibe..."
                value={vibe}
                onChange={(e) => {
                  setVibe(e.target.value)
                }}
                className="text-base"
              />
              <Button
                onClick={handleThemeGeneration}
                disabled={loading || isRateLimited || !vibe.trim()}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]
                px-6 py-3 rounded-lg transition-all duration-300 text-[var(--color-onAccent)]
                shadow-md border-2 border-[var(--color-accent)] disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg font-semibold"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : isRateLimited ? (
                  `Try again in ${countdown}s`
                ) : (
                  "Change Theme"
                )}
              </Button>
              {!vibe.trim() ? (
                <p className="text-sm text-[var(--color-accent)] animate-pulse">
                  Please enter a vibe.
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <Divider />
        <h4 className="text-xl font-semibold mb-4 text-[var(--color-accent)]">Sample Styles</h4>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {
            sampleThemes.map((item, index) => {
              return <Button
                key={index}
                className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]
                px-5 py-2.5 rounded-lg transition-all duration-300 text-[var(--color-onAccent)]
                border-2 border-[var(--color-accent)] active:bg-[var(--color-primary)] active:text-[var(--color-accent)]
                shadow-md hover:shadow-lg font-medium"
                onClick={() => {
                  setCurrentTheme(item.theme);
                  // setVibe(item.name);
                  setCurrentThemeText(item.name);
                }}
              >
                {item.name}
              </Button>
            })
          }
        </div>
      </div>
    </main>
  );
}