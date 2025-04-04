import React, { useEffect } from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader'
import BlogRender from '../components/BlogRender'

const { Header, Content, Sider } = Layout;

interface MainPageProps {
    // props
}

const MainPage: React.FC<MainPageProps> = ({ }) => {
    useEffect(() => {
        console.log(11111);
    });

    return (
        <Layout>
            <Header>
                <GlobalHeader />
            </Header>
            <Content>
                <BlogRender />
            </Content>
        </Layout>
    );
}

export default MainPage;
