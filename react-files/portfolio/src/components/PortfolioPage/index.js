import React from 'react';
import Grid from 'material-ui/Grid';
import PortfolioItem from './PortfolioItem';
import _portfolioItems from './_portfolioItems';

const PortfolioPage = props => (
  <div>
    <Grid container spacing={24} justify={'center'}>
      {_portfolioItems.map(item =>
        <PortfolioItem key={item.id} item={item} />,
      )}
    </Grid>
  </div>
);

export default PortfolioPage;
