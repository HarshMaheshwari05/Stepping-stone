
import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
            <Grid container  spacing={5}>
                <Grid item lg={15} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;