import { KeepAwake, registerRootComponent } from 'expo';
import { ReduxApp } from './ReduxApp';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(ReduxApp);
