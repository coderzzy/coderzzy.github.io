import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginInlineStart: 24, fontSize: 24 }}>张小刀的杂文</div>
            </Header>
        </Layout>
    );
}

export default MainPage;
