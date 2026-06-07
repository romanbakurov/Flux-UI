import type { TabsPanelProps } from './types';
import styles from './TabsPanel.module.scss';
import { useTabs } from '../TabsContext';
import { cn } from '@utils/cn';

export const TabsPanel = ({
  index,
  children,
  className = '',
}: TabsPanelProps) => {
  const { activeIndex } = useTabs();
  const isActive = activeIndex === index;

  if (!isActive) return null;

  return (
    <div
      role='tabpanel'
      id={`tab-panel-${index}`}
      className={cn(styles.panel, className)}
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  );
};

TabsPanel.displayName = 'TabPanel';
