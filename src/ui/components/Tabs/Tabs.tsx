import type { TabsProps } from './types';
import { TabsContext } from './TabsContext';
import { useState } from 'react';
import styles from './Tabs.module.scss';

export const Tabs = ({ children, defaultActiveIndex = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const contextValue = {
    activeIndex,
    setActiveIndex,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={styles.tabs}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
