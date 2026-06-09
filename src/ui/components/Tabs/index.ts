import { Tabs as BaseTabs } from './Tabs';
import { TabsList } from './List/TabsList';
import { Tab } from './Tab/Tab';
import { TabsPanel } from './Panel/TabsPanel';

export { TabsList } from './List/TabsList';
export { Tab } from './Tab/Tab';
export { TabsPanel } from './Panel/TabsPanel';
export { useTabs } from './TabsContext';

export type { TabsProps } from './types';
export type { TabsListProps } from './List/types';
export type { TabProps } from './Tab/types';
export type { TabsPanelProps } from './Panel/types';

export const Tabs = Object.assign(BaseTabs, {
  List: TabsList,
  Tab: Tab,
  Panel: TabsPanel,
});

export default Tabs;
