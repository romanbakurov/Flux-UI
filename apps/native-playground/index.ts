import App from './App';
import { registerRootComponent } from 'expo';

let Root = App;

if (process.env.STORYBOOK_ENABLED === 'true') {
  const StorybookUI = require('./.rnstorybook/storybook.requires').default;
  Root = StorybookUI;
}

registerRootComponent(Root);
