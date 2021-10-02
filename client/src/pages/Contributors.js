import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from "@material-ui/core";
import justin from '../justin.jpg'
import heather from '../heather.jpg'
import melody from '../melody.jpg'
import brian from '../brian.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
  personPic: {
    height: 'auto',
    width: '300px',
    margin: '20px',
    borderRadius: '10px',
  },
  contributorsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    "@media (max-width: 1200px)": {
      gridTemplateColumns: '1fr',
    },
  },
  personWords: {
    padding: '0 30px',
    textAlign: 'left',
    marginBottom: '10px'
  },
  person: {
    color: '#fff',
    margin: '30px',
    lineHeight: '1.5',
    fontWeight: '600',
  },
  personName: {
    marginBottom: '15px',
    color: '#E18335',
  },
  personLink: {
    textDecoration: 'none',
    color: '#1E91D6',
    fontSize: '1rem',
  }

})

const Contributors = () => {
  const classes = useStyles();
  return (
    <div className={classes.contributorsContainer}>
      <div className={classes.person}>
        <img src={brian} alt="Brian" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Brian Palay</Typography>
        <div className={classes.personWords}>
          <p>
            I'm a full-stack web developer with a degree in architecture and over a decade of experience with digital design platforms. Unsurprisingly, I prefer to work on the front, striving to build clean and polished applications with intuative, responsive, and enjoyable user experiences.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/bpplaysguitar"><GitHubIcon style={{ fontSize: '2rem', marginRight: '6px' }} />Brian's Github</a>
      </div>


      <div className={classes.person}>
        <img src={heather} alt="Heather" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Heather Bjoin</Typography>
        <div className={classes.personWords}>
          <p>
          If you never knew, creativity and complex puzzles go hand and hand; which is where my fascination with web development comes into play. Although I enjoy having the knowledge and being able to handle code on both the front-end and back-end, working with React.js has brought me the most joy. The world of code is one that is easy to get lost in, but no matter which side I am on, I find its complexity entertaining and intriguing with endless possibilities.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/HeatMarie"><GitHubIcon style={{ fontSize: '2rem', marginRight: '6px' }} />Heather's Github</a>
      </div>


      <div className={classes.person}>
        <img src={justin} alt="Justin" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Justin Hoch</Typography>
        <div className={classes.personWords}>
          <p>
            Full stack web developer, passionate about creating and maintaining websites both on the front end and back end. Leveraging background experience in customer services to design intuitive and effective experiences for the web. Known for having a bright personality that can help lift the spirits of coworkers. Bilingual, languages include English and basic Spanish.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/Justinean"><GitHubIcon style={{ fontSize: '2rem', marginRight: '6px' }} />Justin's Github</a>
      </div>

      <div className={classes.person}>
        <img src={melody} alt="Melody" className={classes.personPic} />
        <Typography className={classes.personName} variant="h4">Melody Monyok</Typography>
        <div className={classes.personWords}>
          <p>
            As a full-stack web developer, I enjoy working with both front and back-end coding projects, but I especially enjoy JavaScript coding, figuring out complex functionality, and configuring MySQL or Mongo Database systems. React is becoming a new love of mine as well.
          </p>
        </div>
        <a className={classes.personLink} target="_blank" href="https://github.com/mmonyok"><GitHubIcon style={{ fontSize: '2rem', marginRight: '7px' }} />Melody's Github</a>
      </div>

    </div>
  );
};

export default Contributors;