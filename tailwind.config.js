module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#baad87", // Primary color (your brand color)
        secondary: "#C0C7C8", // Secondary color (light grayish tone)
        accent: "#9E9195", // Accent color (darker shade for contrast)
        background: "#DCECE4", // Background color (light background)
        dark: "#1A1A1A", // Dark color (for text, borders, or deep background)
        light: "#F7F7F7", // Light color (for contrasting elements, sections, or cards)
        // Additional colors for flexibility
        neutral: "#F4F4F4", // Neutral tones for background or less emphasis
        success: "#4CAF50", // Success message or status
        error: "#F44336", // Error message or status
        warning: "#FF9800", // Warning message or status
        info: "#2196F3", // Info message or status
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        serif: ["Georgia", "serif"], // Adding serif font for headings or contrast
        display: ["Roboto", "sans-serif"], // A clean, modern font for headlines
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 1s ease-in', // New fade-in animation
        bounce: 'bounce 1s infinite', // Bouncing animation for emphasis
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-10px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
      }
    },
  },
  plugins: [],
}
