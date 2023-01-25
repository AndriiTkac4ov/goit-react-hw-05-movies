export const theme = {
    colors: {
        white: '#fff',
        homeBackground: '#ffd180',
        moviesBackground: '#cedfe0',
        primaryVertical: '#8eb53f',
        secondaryVertical: '#ffd180',
        inFocusColor: '#713333',
        activeColor: '#ea332c',
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
    },
    radii: {
        none: '0',
        normal: '4px',
        round: '50%',
    },
}