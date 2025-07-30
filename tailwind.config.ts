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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Inter', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
				'mono': ['Roboto Mono', 'monospace'],
			},
			spacing: {
				'premium-xs': 'var(--spacing-xs)',
				'premium-sm': 'var(--spacing-sm)',
				'premium-md': 'var(--spacing-md)',
				'premium-lg': 'var(--spacing-lg)',
				'premium-xl': 'var(--spacing-xl)',
				'premium-2xl': 'var(--spacing-2xl)',
				'premium-3xl': 'var(--spacing-3xl)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				'accent-brand': {
					DEFAULT: 'hsl(var(--accent-brand))',
					hover: 'hsl(var(--accent-brand-hover))'
				},
				'accent-purple': {
					DEFAULT: 'hsl(var(--accent-purple))',
					hover: 'hsl(var(--accent-purple-hover))'
				},
				'brand-navy': {
					DEFAULT: 'hsl(var(--brand-navy))'
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
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
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
				}
			},
			borderRadius: {
				'premium-sm': 'var(--radius-sm)',
				'premium-md': 'var(--radius-md)',
				'premium-lg': 'var(--radius-lg)',
				'premium-xl': 'var(--radius-xl)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'subtle': 'var(--shadow-subtle)',
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'hover': 'var(--shadow-hover)',
			},
			transitionTimingFunction: {
				'premium': 'var(--ease-premium)',
				'bounce': 'var(--ease-bounce)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'scroll-reveal': {
					to: { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s var(--ease-premium)',
				'accordion-up': 'accordion-up 0.3s var(--ease-premium)',
				'fade-in-up': 'fade-in-up 0.6s var(--ease-premium)',
				'scale-in': 'scale-in 0.4s var(--ease-premium)',
				'scroll-reveal': 'scroll-reveal 0.6s var(--ease-premium) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
