/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					bg: '#0D1117',
					surface: '#161B22',
					border: '#30363D',
					text: '#C9D1D9',
					muted: '#AAB3BC',
				},
				accent: {
					DEFAULT: '#238636', // Emerald Green
					hover: '#2EA043',
					light: 'rgba(35, 134, 54, 0.15)',
				},
				warning: {
					DEFAULT: '#D29922',
					light: 'rgba(210, 153, 34, 0.15)',
				},
				danger: {
					DEFAULT: '#F85149',
					light: 'rgba(248, 81, 73, 0.15)',
				},
				glass: {
					surface: 'rgba(22, 27, 34, 0.7)',
					border: 'rgba(48, 54, 61, 0.6)',
				},
				background: '#0D1117',
				foreground: '#C9D1D9',
				primary: {
					DEFAULT: '#238636',
					foreground: '#ffffff',
				},
				border: '#30363D',
				input: '#161B22',
				ring: '#238636',
				card: {
					DEFAULT: '#0D1117',
					foreground: '#C9D1D9',
				},
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
				'glow': '0 0 15px rgba(35, 134, 54, 0.3)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			animation: {
				'pulse-glow': 'pulse-glow 2s infinite',
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(35, 134, 54, 0.4)' },
					'50%': { boxShadow: '0 0 0 6px rgba(35, 134, 54, 0)' },
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

