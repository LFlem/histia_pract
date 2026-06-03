import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: "#272149",           // fond de page
                    badge: "#BFB9DF",        // texte badge
                    title: "#A199D2",        // titre
                    body: "#877EBC",         // texte description
                    link: "#E1C3FF",         // lien nouveautés
                },
            },
            fontFamily: {
                display: ["var(--font-display)"],
                heading: ["var(--font-heading)"],
            },
            fontSize: {
                "brand-xs": ["12px", { lineHeight: "16px", letterSpacing: "0" }],
                "brand-m": ["24px", { lineHeight: "100%" }],
                "brand-xxl": ["48px", { lineHeight: "100%" }],
                "brand-body": ["24px", { lineHeight: "32px", letterSpacing: "0.02em" }],
            },
        },
    },
    plugins: [],
};

export default config;