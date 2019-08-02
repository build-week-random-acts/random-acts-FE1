import React from 'react';
import { useContext } from 'react';
import { ActsContext } from '../contexts/ActsContext';
import Act from './Act';

const Acts = () => {
  const { acts } = useContext(ActsContext);
  // console.log('acts is', acts);

  return (
    <div className='acts'>
      <h3>Random Acts</h3>
      {acts.map((act, index) => (
        <Act act={act} key={index} />
      ))}
    </div>
  );
};

export default Acts;
