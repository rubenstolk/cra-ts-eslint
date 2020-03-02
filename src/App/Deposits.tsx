import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

import styles from './Deposits.module.scss';

export default function Deposits() {
  return (
    <div className={styles.root}>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className="context">
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={e => e.preventDefault()}>
          View balance
        </Link>
      </div>
    </div>
  );
}