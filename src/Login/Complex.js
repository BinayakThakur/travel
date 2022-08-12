import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Login from './Login';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={0}>
        <Grid item>
          
           
           
         
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                A new way to prepare for interviews
                <Login></Login>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Forum with interview questions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                How to?<br/>
                1) Create Account<br/>
                2) Login<br/>
                3) Vote for interview questions which you think is important<br/>
                4) Send new Interview questions in Send Post
            
              </Typography>
            </Grid>
            
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
  );
}
