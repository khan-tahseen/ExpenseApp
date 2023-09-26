import React, { useContext } from 'react';
import ExpenceOutput from '../components/ExpenceOutput/ExpenceOutput';
import { ExpencesContext } from '../store/expences-context';

export default function AllExpences() {
  const expencesCtx = useContext(ExpencesContext);
  return (
    <ExpenceOutput expences={expencesCtx.expences} expencePeriod={'Total'} />
  );
}
