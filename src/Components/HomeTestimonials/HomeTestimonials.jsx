import React, {useState} from 'react';
import { Container, Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia, Card } from '@material-ui/core';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import './style.css';

const HomeTestimonials = () => {

    const quotes = {
       0: {
           client: "Nenna Tiwanna",
           date: "May, 14 2021",
           quote: "Claudia is one of the most gifted mediums I have gone to. The information she brought through was accurate and specific. She was able to pick up on things that nobody else knew but me. She was extremely generous with her time and ethical in her delivery. She kindly booked me in for a free follow-up chat about one of the messages that had come through in a previous reading to provide clarity. I left my reading full of hope and at peace. She is truly gifted!",
       },
       1: {
        client: "Mari Provan-Strauss",
        date: "February, 11 2020",
        quote: "By far the most accurate and amazing medium I have ever had a reading from.",
    },
    2: {
        client: "Jaimie Rankin",
        date: "February, 23 2019",
        quote: "Claudia had some very accurate insight through her reading with me! Amazing experience.",
    }
    }

    const [current, setCurrent] = useState(quotes[0])

    const [active, setActive] = useState(0)

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    return (
        <Container maxWidth="lg">
        <Grid container spacing={4}>
           
          <Grid item xs={12} sm={12} md={8} lg={8}>
              <Typography gutterBottom>{current.quote}</Typography>
              <Typography gutterBottom>{current.client}</Typography>
              <Typography gutterBottom>{current.date}</Typography>
              <div className="container">
                  {Object.keys(quotes).map(index => (
                      <span onClick={event => handleSetClick(event)}
                             data-quote={index}
                             key={index}
                             className="next"/>
                  ))}
              </div>
          </Grid>

        </Grid>
        </Container>      
    )
}

export default HomeTestimonials