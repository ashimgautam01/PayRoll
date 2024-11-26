/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		  keyframes: {
			scroll: {
			  "0%": { transform: "translateX(0)" },
			  "80%": { transform: "translateX(-100%)" },
			},
		  },
		  animation: {
			scroll: "scroll 10s linear infinite",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

