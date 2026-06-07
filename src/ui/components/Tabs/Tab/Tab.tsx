import type { TabProps } from './types';
import styles from './Tab.module.scss';
import { useTabs } from '../TabsContext';
import { cn } from '@utils/cn';

export const Tab = ({ index, children, className = '' }: TabProps) => {
  const { activeIndex, setActiveIndex } = useTabs();
  const isActive = activeIndex === index;

  return (
    <button
      role='tab'
      aria-selected={isActive}
      aria-controls={`tab-panel-${index}`}
      id={`tab-${index}`}
      className={cn(styles.tab, isActive && styles.active, className)}
      onClick={() => {
        setActiveIndex(index);
      }}
    >
      {children}
    </button>
  );
};

Tab.displayName = 'Tab';
