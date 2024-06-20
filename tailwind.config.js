/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '500px',
            // => @media (min-width: 640px) { ... }

            'md': '700px',
            // => @media (min-width: 768px) { ... }

            'lg': '1030px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1232px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },


        extend: {

            gridTemplateColumns: {
                // Simple 16 column grid
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '18': 'repeat(18, minmax(0, 1fr))',

                // Complex site-specific column configuration
                'footer': '200px minmax(900px, 1fr) 100px',
            },
            gridColumn: {
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
            },
            colors: {
                light: {
                    400: "#AFBFF3"
                },
                createTodo: {
                    600: "#8BA5E9"
                },
                AddBtn: {
                    600: "#0EA5E9"
                },
                textColor: {
                    400: "#6B72A1"
                },
                listBtn: {
                    400: "#FF6347"
                },


            }
        },

    },
    plugins: [],
}