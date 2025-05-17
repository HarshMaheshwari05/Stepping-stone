
import { styled, Box, Typography,Rating} from '@mui/material';
import {useState} from 'react';
const Container = styled(Box)`
color:white;
    ${'' /* border: 1px solid #d3cede; */}
    background:#2e3267;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    padding:10px;
    align-items: center;
    flex-direction: column;
    box-shadow:5px 5px 10px black;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    };
    &:hover {
background: "rgb(7, 177, 77, 0.42)",    
             
}
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const [value, setValue]= useState();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return  str && (str.length) > limit ? str.substring(0, limit) + '...' :str;
    } 
 
    return (
        <Container>
            <Image src={url} alt="post" />
            <Text style={{color:'gray'}}>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Details style={{padding:'15px 15px 0px 15px', color:'rgb(206, 206, 206)'}}>
            <Text style={{  fontSize:'12px'}}><Text style={{color:"white", display:"inline-block",fontSize:"12px" ,fontWeight:'bold',background:'black' ,margin:'5px',}}>Author: </Text>{post.username}</Text>
            
            {addEllipsis(post.description, 100)}</Details>
            {/* <StyledRating
  name="customized-color"
  defaultValue={2}
  getLabelText={(value: 2) => `${value} Heart${value !== 1 ? 's' : ''}`}
  precision={0.5}
  icon={<FavoriteIcon fontSize="inherit" />}
  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
/> */}
<Rating
  name="simple-controlled"
  value={2}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
        </Container>
    )
}

export default Post;