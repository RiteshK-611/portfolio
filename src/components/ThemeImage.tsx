'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DarkSVG = dynamic(() => import('../assets/svgs/bgd.svg'));
const LightSVG = dynamic(() => import('../assets/svgs/bgl.svg'));

const ThemeImage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return currentTheme === 'dark' ? <DarkSVG /> : <LightSVG />;
};

export default ThemeImage;