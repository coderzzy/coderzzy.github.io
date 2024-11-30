import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useGlobalContext } from './context/GlobalContext'
import MainPage from './pages/MainPage'


interface AppProps {
  // props
}

const App: React.FC<AppProps> = ({ }) => {
  const { colorTextBase } = useGlobalContext();

  return (
    <ConfigProvider theme={{
      token: {
        // Seed Token，影响范围大
        // colorPrimary: colorPrimary,
        colorTextBase: colorTextBase,
        borderRadius: 2,

        // 派生变量，影响范围小
        // colorBgContainer: '#f6ffed',
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
