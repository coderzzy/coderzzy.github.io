import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { gray } from '@ant-design/colors';
import { useGlobalContext } from './context/GlobalContext'
import MainPage from './pages/MainPage'
import BlogPage from './pages/BlogPage'


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
        colorTextBase: gray.primary,
        borderRadius: 2,

        // 派生变量，影响范围小
        // colorBgContainer: '#f6ffed',
      },
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
