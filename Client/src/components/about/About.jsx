
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;


const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3" style={{color:'white'}} >Stepping Stone</Typography>
                <Text variant="h5">
                        Stepping stone is a web app where people can share the path for a skills they have mastered or they can share any study content they want 
                        and resources related to it . 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/anchalpaswan" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                   feel free to contact us 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/wh00__am_i/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send us an Email 
                        <Link href="mailto:anchalpaswan10@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;