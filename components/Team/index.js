import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../common/Container";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
  },
};
const Team = (props) => {
  const [teams, setTeams] = useState(props.staff);

  return (
    <Container id="team" style={{ margin: "0 auto" }}>
      <Box style={{ textAlign: "center", margin: "0 auto", padding: 0 }}>
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: "normal",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}>
          MEET OUR STAFF
        </Typography>
        <Box component={Typography} fontWeight={700} variant={"h3"} align={"center"}>
          Trusted Ontario Certified Teachers (OCT)
        </Box>
      </Box>

      <Carousel className="TeamSlider" responsive={responsive}>
        {teams.map(function (team, i) {
          // Skip Team Members with no images OR set default image here
          if (team.yoast_head_json.schema["@graph"][1].url.length === 0) {
            return;
          }

          return (
            <Grid item margin={3} key={i} data-aos={"fade-up"}>
              <Box component={Card} boxShadow={1} bgcolor={"transparent"}>
                <Box
                  component={CardMedia}
                  borderRadius={0}
                  width={"100%"}
                  height={"100%"}
                  style={{ backgroundSize: "cover" }}
                  minHeight={260}
                  image={team.yoast_head_json.schema["@graph"][1].url}
                />
                <Box component={CardContent} bgcolor={"transparent"} marginTop={-5} minHeight={160}>
                  <Box component={Card} borderRadius={2}>
                    <CardContent>
                      <Typography dangerouslySetInnerHTML={{ __html: team.title.rendered }} />
                      <Typography className="subject" dangerouslySetInnerHTML={{ __html: team.content.rendered }} />
                    </CardContent>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Team;
