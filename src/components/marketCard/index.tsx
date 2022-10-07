import { VoidFunctionComponent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IProductData } from '../../types';
import { Avatar, CardHeader, Grid } from '@mui/material';

const MarketCard: VoidFunctionComponent<IProductData> = (props) => {
  
  const getInitials = function (name: string) {
    return name.split(" ").map((n)=>n[0]).join(".").substring(0, 3);
  }

  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card sx={{ maxWidth: 250, marginX:'auto', marginY:2, height:230 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:'blue', fontSize:14 }} aria-label="recipe">
              {getInitials(props.companyName)}
            </Avatar>
          }
          title={props.companyName}  align="left"
        />
        <CardContent>
          <Typography align="left" variant="body2" color="blue">
            {props.titlePrice}
          </Typography>
          <Typography align="left" variant="body2" color="green">
            {props.savePrace}
          </Typography>
          <Typography align="justify" variant="body2" color="black">
            {props.description.substring(0, 90)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MarketCard;
