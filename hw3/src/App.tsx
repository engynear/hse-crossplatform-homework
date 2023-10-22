// Пример компонента App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Steps from './components/Steps/Steps';
import Testimonials from './components/Testimonials/Testimonials';
import Form from './components/Form/FormBlock';
import Footer from './components/Footer/Footer';

import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from './themes/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const mobile = useMediaQuery('(max-width:768px)', { noSsr: true });

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Box mt={theme.spacing(mobile ? 5 : 10)}>
          <Hero />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <About />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <Steps />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <Projects />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <Testimonials />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <Form />
        </Box>
        <Box mt={theme.spacing(mobile ? 12 : 30)}>
          <Footer />
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
