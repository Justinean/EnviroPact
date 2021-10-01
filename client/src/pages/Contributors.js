import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from "@material-ui/core";
import justin from '../brian.jpg'
import heather from '../melody.jpg'
import melody from '../melody.jpg'
import brian from '../brian.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
  personPic: {
    height:'auto',
    width:'300px',
    margin:'20px',
    borderRadius:'10px',
  },
  contributorsContainer:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    "@media (max-width: 1200px)": {
      gridTemplateColumns:'1fr',
    },
  },
  personWords:{
    padding:'0 30px',
    textAlign:'left',
    marginBottom:'10px'
  },
  person:{
    color:'#fff',
    margin:'30px',
    lineHeight:'1.5',
    fontWeight:'600',
  },
  personName:{
    marginBottom:'15px',
    color:'#E18335',
  },
  personLink:{
    textDecoration:'none',
    color:'#1E91D6',
    fontSize:'1rem',
  }
 
})

const Contributors = () => {
  const classes = useStyles();
  return (
      <div className={classes.contributorsContainer}>
        
        <div className={classes.person}>
        <img src={melody} alt="Melody" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Melody Monyok</Typography>
        <div className={classes.personWords}>
          <p>
          As a full-stack web developer, I enjoy working with both front and back-end coding projects, but I especially enjoy JavaScript coding, figuring out complex functionality, and MySQL or Mongo Database systems. React is also becoming a new love as well.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/mmonyok"><GitHubIcon style={{ fontSize:'2rem', marginRight:'7px'}}/>Melody's Github</a>
        </div>

        <div className={classes.person}>
        <img src={brian} alt="Brian" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Brian Palay</Typography>
        <div className={classes.personWords}>
          <p>
          I'm a full-stack web developer with a degree in architecture and over a decade of experience with digital design platforms. Unsurprisingly, I prefer to work on the front, striving to build clean and polished applications with intuative, responsive, and enjoyable user experiences.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/bpplaysguitar"><GitHubIcon style={{ fontSize:'2rem', marginRight:'6px'}}/>Brian's Github</a>
        </div>

        <div className={classes.person}>
        <img src={justin} alt="Justin" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Justin Hoch</Typography>
        <div className={classes.personWords}>
          <p>
          Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio Justin bio 
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/Justinean"><GitHubIcon style={{ fontSize:'2rem', marginRight:'6px'}}/>Justin's Github</a>
        </div>

        <div className={classes.person}>
        <img src={heather} alt="Heather" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Heather Bjoin</Typography>
        <div className={classes.personWords}>
          <p>
          Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio Heather bio 
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/Justinean"><GitHubIcon style={{ fontSize:'2rem', marginRight:'6px'}}/>Heather's Github</a>
        </div>

        
      </div>
  );
};

export default Contributors;