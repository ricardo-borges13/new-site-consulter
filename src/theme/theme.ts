// Utility function to convert hex to rgba
function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const theme = {
  colors: {
    background: {
      global: '#F9FAFB', // Cor global
      light: '#eef5ea', //Fundo de seções específicas (Cards,Maps)
    },
    text: {
      contato: ' #bdbdbd',
      form: '#f2f7eb',
    },
  
    primary: '#94c11f', // Main green color
    lightPrimary: '#9bc82a', // Added new color
    primaryDark: '#7cb342', // Darker primary for hover states

    secondary: '#2a2a2a', // Dark text/background

    lightGray: '#f6f6f6',
    mediumGray: '#eeeeee',
    darkGray: '#1A1A1A',
    white: '#FFFFFF',
    black: '#000000',
    success: '#1e7f4f',
    lightSuccess: '#2c8f5c', // Added new color
    error: '#b30000',
    whatsappGreen: '#25d366', // Added new color
    whatsappGreenDark: '#1ebe5d', // Added new color
    ctaGreen: '#2e7d32', // Added new color
    ctaGreenDark: '#1b5e20', // Added new color
    technicalGreen: '#1e7f4f', // Added new color
    technicalGreenDark: '#16613c', // Added new color
    errorRed: '#ef4444', // Added new color
    warningYellow: '#d49b09', // Added new color
    warningYellowDark: '#b8860b', // Added new color
    section: {
       footer: '#2c2a2a',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  breakpoints: {
    microMobile: '344px',
    smallestMobile: '360px',
    smallerMobile: '375px',
    tinyMobile: '390px',
    smallScreenMobile: '537px',
    midMobile: '540px',
    smallMobile: '550px',
    extraSmallMobile: '490px',
    mobile: '600px',
    smallTabletMobile: '650px',
    tabletMedium: '768px',
    extraSmallTablet: '800px',
    smallTablet: '961px',
    tablet: '900px',
    midTablet: '1000px',
    desktopSmall: '1024px',
    desktop: '1200px',
    mediumDesktop: '1038px',
    desktopSmallest: '1253px',
    largeDesktop: '1400px',
    desktopLarge: '3000px',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  shadows: {
    small: '0 4px 10px rgba(0, 0, 0, 0.1)',
    medium: '0 8px 20px rgba(0, 0, 0, 0.08)',
    large: '0 10px 24px rgba(0, 0, 0, 0.2)',
  },
  hexToRgba, // Make the utility function available
};

export type Theme = typeof theme;
