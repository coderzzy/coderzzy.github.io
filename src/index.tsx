import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd'; // 新增导入
import { GlobalProvider } from './context/GlobalContext'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          headerBg: 'var(--ant-color-bg-container)',
          headerPadding: 0,
        }
      }
    }}
  >
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ConfigProvider>
);
