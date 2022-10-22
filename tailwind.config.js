module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js', 
    'node_modules/react-daisyui/dist/**/*.js',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [  
      {
        mytheme: {
        
            "primary": "#7209B7",
                    
            "secondary": "#D926A9",
                    
            "accent": "#1FB2A6",
                    
            "neutral": "#191D24",
                    
            "base-100": "#2A303C",
                    
            "info": "#3ABFF8",
                    
            "success": "#36D399",
                    
            "warning": "#FBBD23",
                    
            "error": "#F87272",
        },
      },
      ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },
  theme : {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  }
}