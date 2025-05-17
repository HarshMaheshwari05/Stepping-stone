import './banner.css'
import { styled, Box, Typography } from '@mui/material';
import imageurl from '../../image/humanAtStepping.svg'
const Image = styled(Box)`
    width: 100%;
    background-color: #1f2641;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
   margin-left:30px;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    margin-left:30px;
`;
const Ima = styled('img')({
    width:300,
   

})
const Div = styled(Box)`
    float:right;
    position:absolute;
    right:100px;
`;
const Banner = () => {
    
    return (
        <Image>
            <Heading>Stepping stone</Heading>
            <SubHeading>choose your stone of success</SubHeading>
           <Div className="image-"><Ima id="i" src={imageurl} alt = "image"/></Div> 
        </Image>
    )
}

export default Banner;