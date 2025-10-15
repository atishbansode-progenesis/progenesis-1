

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/page-components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                primary: "var(--font-manrope)",
            },
            screens: {
                csxl:"1600px",
                csLg: '1100px',
                xsm: '350px',
            },
        },
    },
    plugins: [],
};
