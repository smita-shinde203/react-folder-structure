import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";

export const About = () => {
    return (
        <Box marginY={{xs:'50px', md:'100px'}}>
            <Container fixed sx={{ padding:{xs:'50px auto',md:"100px auto"} }}>
                <Typography variant='h2' mt='10px'>
                    About Us
                </Typography>
                <Grid container mt='10px' spacing={5} >
                    <Grid item xs={12} sm={8} md={5} lg={6} >
                        <Box>
                            <img src={require("../../ui/assets/about/Group 33 (1).png")} alt="" style={{ width: '100%' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={6} sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <Typography variant='h2' >
                            Short Story About Our Hospital
                        </Typography>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet gravida vitae nibh. Velit vehicula scelerisque tristique scelerisque tellus risus.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }} >
                            {data.map((item, index) =>
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <img src={require("../../ui/assets/about/Group 33 (2).png")} alt="" />
                                    <Typography variant='body1'>
                                        {item.title}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


const data = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur '
    },
]