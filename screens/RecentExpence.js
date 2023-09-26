import React, { useContext } from 'react';
import ExpenceOutput from '../components/ExpenceOutput/ExpenceOutput';
import { ExpencesContext } from '../store/expences-context';
import { getDateMinusDays } from '../utilities/date';

export default function RecentExpence() {
  const expencesCtx = useContext(ExpencesContext);

  const recentExpences = expencesCtx.expences.filter((expence) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expence.date > date7DaysAgo;
  });
  
  return (
    <ExpenceOutput expences={recentExpences} expencePeriod={'Last 7 Days'} />
  );
}
