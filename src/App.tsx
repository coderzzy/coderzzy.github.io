import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { blue } from '@ant-design/colors';
import MainPage from './pages/MainPage'


interface AppProps {
  // props
}

const App: React.FC<AppProps> = ({ }) => {
  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: blue.primary,
        colorTextBase: "white",
        borderRadius: 2,

        // 派生变量，影响范围小
        colorBgContainer: '#f6ffed',
      },
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

  );
}

export default App;
