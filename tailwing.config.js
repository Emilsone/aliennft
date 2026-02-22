module.exports = {
    theme: {
      extend: {
        keyframes: {
          blink: {
            '0%, 100%': { opacity: '1' },
            '50%':       { opacity: '0' },
          },
          slideIn: {
            from: { opacity: '0', transform: 'translateX(-20px)' },
            to:   { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          blink:   'blink 1.2s ease-in-out infinite',
          slideIn: 'slideIn 0.8s ease both',
        },
        fontFamily: {
          condensed: ['Barlow Condensed', 'sans-serif'],
          mono:      ['Share Tech Mono', 'monospace'],
          barlow:    ['Barlow', 'sans-serif'],
        },
      },
    },
  };