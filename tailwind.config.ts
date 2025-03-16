
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom IMDB-inspired colors
				'imdb-yellow': '#F5C518',
                'imdb-dark': '#121212',
                'imdb-gray': '#2A2A2A',
                'imdb-light-gray': '#DDDDDD',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
                        opacity: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
                        opacity: '1'
					},
					to: {
						height: '0',
                        opacity: '0'
					}
				},
                'fade-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-in-right': 'slide-in-right 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'gradient-x': 'gradient-x 3s ease infinite',
                'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
			},
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1))',
                'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0) 70%)',
            },
            backdropBlur: {
                xs: '2px',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
