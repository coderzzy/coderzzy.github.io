import React from 'react';
import styles from './App.module.less'

interface AppProps {
  // props
}

const App: React.FC<AppProps> = ({ }) => {
  return (
    <div className={styles.appWrapper}>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
