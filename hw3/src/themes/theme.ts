import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'h1' },
                    style: {
                        fontSize: '72px',
                        color: '#101828',
                        lineHeight: '120%',
                        '@media (max-width:1080px)': {
                            fontSize: '36px',
                        },
                        '@media (max-width:768px)': {
                            fontSize: '32px',
                        },
                    },
                },
                {
                    props: { variant: 'h2' },
                    style: {
                        fontSize: '48px',
                        color: '#101828',
                        '@media (max-width:1080px)': {
                            fontSize: '28px',
                        },
                        '@media (max-width:768px)': {
                            fontSize: '28px',
                        },
                    },
                },
                {
                    props: { variant: 'h3' },
                    style: {
                        fontSize: '36px',
                        color: '#101828',
                        '@media (max-width:1080px)': {
                            fontSize: '24px',
                        },
                        '@media (max-width:768px)': {
                            fontSize: '24px',
                        },
                    },
                },
            ],
        },
    },
});


export default theme;
