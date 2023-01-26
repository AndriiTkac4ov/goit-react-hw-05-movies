export const theme = {
    colors: {
        white: '#fff',
        black: '#000',
        homeBackground: '#fff4e0',
        moviesBackground: '#cedfe0',
        primaryVertical: '#f26f6a',
        secondaryVertical: '#fff4e0',
        activeColor: '#ea332c',
        inFocusColor: '#1172c0',
        inFocusMovieColor: '#ea332c',
        textColor: '#713333',
    },
    sizes: value => `${8 * value}px`,
    fontSizes: {
        xs: 12,
        s: 16,
        m: 24,
        l: 32,
        xl: 64,
    },
    fontWeights: {
        normal: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    borders: {
        none: 'none',
        normal: '1px solid',
        double: '2px double',
    },
    radii: {
        none: '0',
        normal: '6px',
        round: '50%',
    },
}
