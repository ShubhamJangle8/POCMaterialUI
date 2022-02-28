import React from 'react'
import { makeStyles, Box, Container, Toolbar, Typography, Button } from "@material-ui/core";
import errorImage from '../../img/errorImage.jpg'
import './styles.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// const theme = createTheme({
//     typography: {
//         h3: {
//             fontSize: 5,
//             '@media (max-width:854px)': {
//                 fontSize: 1,
//             },
//         }
//     }
// })

const ErrorPage = () => {
    return (
        // <ThemeProvider theme={theme}>
            <Box className="error-container">
                <img src={errorImage} className='error-image' alt="" />
                <div>
                    <Typography variant="h2" component="div" gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h3" component="div" gutterBottom>
                        OOPS! PAGE NOT FOUND
                    </Typography>
                    <Typography variant="h4" component="div" gutterBottom>
                        Sorry, the page you’re looking for doesn’t exist.
                    </Typography>
                    <Button variant='contained' className='button'>Return to Home</Button>
                </div >
            </Box>
        // </ThemeProvider>

    )
}

export default ErrorPage