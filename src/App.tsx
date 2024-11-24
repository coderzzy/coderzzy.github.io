import React from 'react';
import styles from './App.module.less'
import BlogRender from './components/BlogRender'

interface AppProps {
  // props
}

const App: React.FC<AppProps> = ({ }) => {
  return (
    <div className={styles.appWrapper}>
      {/* <BlogRender /> */}
    </div>
  );
}

export default App;
