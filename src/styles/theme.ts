const theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#ffffff',
    },
    spacing: (factor: number): string => `${0.25 * factor}rem`,
    borderRadius: '0.25rem',
    fontSize: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem'
    }
};

export default theme;