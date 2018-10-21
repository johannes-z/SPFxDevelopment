import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './FldCustomizerTglReact.module.scss';

export interface IFldCustomizerTglReactProps {
  text: string;
}

const LOG_SOURCE: string = 'FldCustomizerTglReact';

export default class FldCustomizerTglReact extends React.Component<IFldCustomizerTglReactProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FldCustomizerTglReact mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FldCustomizerTglReact unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        { this.props.text }
      </div>
    );
  }
}
