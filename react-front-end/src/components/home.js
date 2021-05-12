import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import placeholderImage from '../assets/calgary.jpg';
import placeholderImage1 from '../assets/chicago.jpg';
import placeholderImage2 from '../assets/vancouver.jpg';
import placeholderImage3 from '../assets/newyork.jpg';


const Home = () => {
    return(
        <div>
          <Container bg="danger">
            <Row>
                <Col>
                    <Image src={placeholderImage} alt="One amazing photo!" width="500" height="250" fluid/>
                </Col>
                <Col>
                    <Image src={placeholderImage1} alt="One amazing photo!" width="500" height="250" fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={placeholderImage2} alt="One amazing photo!" width="500" height="250" fluid/>
                </Col>
                <Col>
                    <Image src={placeholderImage3} alt="One amazing photo!" width="500" height="250" fluid/>
                </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Home;

// export default Home;++export default function Home() {
//     const classes = useStyles();
//     const history = useHistory();
  
//     const handleClick = () => {
//       history.push("/map");
//     };
//     return (
//       <div className="Home">
//         <Box className={classes.hero}>
//           <Container className={classes.heroContents}>
//             <h1>GlassWalls</h1>
//             <h4 className="home-moto">Helping Each Other Find Home</h4>
//             <TextField
//               id="standard-full-width"
//               className={classes.search}
//               label="Search"
//               fullWidth
//               autoComplete="off"
//               variant="filled"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment>
//                     <IconButton>
//                       <SearchIcon onClick={handleClick} />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Container>
//         </Box>
//         <Container className={classes.container}>
//           <Typography className={classes.itemTitle} variant="h4">
//             Popular North American Cities
//           </Typography>
//           <Grid className={classes.grid} container>
//             <Grid
//               onClick={handleClick}
//               className={`${classes.gridCard} ${classes.sanFran}`}
//               item
//             >
//               <p>San Francisco</p>
//             </Grid>
//             <Grid className={`${classes.gridCard} ${classes.vancouver}`} item>
//               <p>Vancouver</p>
//             </Grid>
//             <Grid className={`${classes.gridCard} ${classes.losAngeles}`} item>
//               <p>Los Angeles</p>
//             </Grid>
//             <Grid className={`${classes.gridCard} ${classes.newYork}`} item>
//               <p>New York</p>
//             </Grid>
//             <Grid className={`${classes.gridCard} ${classes.toronto}`} item>
//               <p>Toronto</p>
//             </Grid>
//             <Grid className={`${classes.gridCard} ${classes.seattle}`} item>
//               <p>Seattle</p>
//             </Grid>
//           </Grid>
//           <Grid>
//             <Typography className={classes.itemTitle} variant="h4">
//               How GlassWalls works for you
//             </Typography>
//           </Grid>
//           <Grid className={classes.itemContainer} container spacing={3}>
//             <Grid className={classes.item} item xs>
//               <RateReviewOutlinedIcon className={classes.svg} />
//               <Typography variant="h5">Reviews</Typography>
//               <Typography className={classes.paragraphs}>
//                 View 1000's of building reviews left by current or past residents.
//               </Typography>
//               <Typography className={classes.paragraphs}>
//                 Have you reviewed your building yet? Add it today!
//               </Typography>
//             </Grid>
//             <Grid className={classes.item} item xs>
//               <ApartmentOutlinedIcon className={classes.svg} />
//               <Typography variant="h5">Properties</Typography>
//               <Typography className={classes.paragraphs}>
//                 Find out what people are saying about buildings from around the
//                 corner to around the globe.
//               </Typography>
//               <Typography className={classes.paragraphs}>
//                 Start your search today!
//               </Typography>
//             </Grid>
//             <Grid className={classes.item} item xs>
//               <ExploreOutlinedIcon className={classes.svg} />
//               <Typography variant="h5">Areas</Typography>
//               <Typography className={classes.paragraphs}>
//                 New in town or curious about neighborhood ratings?
//               </Typography>
//               <Typography className={classes.paragraphs}>
//                 Let our heatmap fueled by user ratings lead you to your ideal
//                 area!
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
  
//         <Grid className={classes.mapContainer} container spacing={2}>
//           <Grid item xs={8}>
//             <img
//               className={classes.mapImage}
//               src={mapImage}
//               alt={classes.mapImage}
//             />
//           </Grid>
//           <Grid className={classes.mapText} item xs={4} m>
//             <Typography variant="h4" className={classes.mapTitle}>
//               Interactive Map
//             </Typography>
//             <Typography>
//               The map is designed to make your property search a breeze with
//               color-coded areas based on user ratings and filters to find your
//               home without the headache!
//             </Typography>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }