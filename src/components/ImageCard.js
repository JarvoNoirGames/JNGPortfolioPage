import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {AiOutlineYoutube} from "react-icons/ai";
import Typography from '@mui/material/Typography';

const ImageCard = (props) => {
  return (
    <Card className="bg-secondery" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Game Image"
        className='project-img'
        image={props.ImgPath}
      />
      <CardContent className="bg-secondery text-white">
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography className='px-5 py-16 justify-left'>
          {props.Description}
        </Typography>
      </CardContent>
      <img className="bg-secondery" src={props.Engine} alt={props.Engine}/>
      <CardActions className="bg-secondery">
      <a href= {props.Link} target="_blank" rel="noreferrer noopener" className="pr-4 inline-block text-accent hover:text-white">
        {" "}
        <AiOutlineYoutube size={40} />{" "}
      </a>
      </CardActions>
    </Card>
  );
}

export default ImageCard;
