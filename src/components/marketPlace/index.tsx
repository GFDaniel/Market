import { Grid, Typography } from '@mui/material';
import { VoidFunctionComponent } from 'react';
import { IProductsData } from '../../types';
import MarketCard from '../marketCard';

const MarketPlace: VoidFunctionComponent<IProductsData> = ({ item }) => {
  return (
    <div>
      <Typography align="left" variant="h6" color="blue" marginTop={2} marginLeft={5} fontWeight={'bold'}>
        Top Deals
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        {item?.map((item:any, i:any) => {
          return <MarketCard key={i} icon={item.icon} companyName={item.companyName} titlePrice={item.titlePrice} 
          savePrace={item.savePrace} description={item.description} endorsedBy={item.endorsedBy} seller={item.seller} />
        })}
      </Grid>
    </div>
  );
}

export default MarketPlace;