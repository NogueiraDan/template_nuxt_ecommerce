const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.violet[700],
					...colors.violet,
				},
			},
			fontFamily: {
				sans: ["Inter"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}

