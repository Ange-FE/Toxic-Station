import React, { useContext } from 'react';

import s from './SelectNetworks.module.scss';
import { networks } from '../config';
import NetworkContext from '../contexts/NetworkContext';

const SelectNetworks = (props) => {
  const { network, setNetwork } = useContext(NetworkContext);

  return (
    <div className={s.inputdiv}>
      <select
        className={s.inputChain}
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
      >
        {networks.map(({ chainId }, index) => (
          <option key={index}>{chainId}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectNetworks;
