import React from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader'
import FloatingAssistant from '../components/FloatingAssistant/HuskyAssistant'

const { Header, Content, Sider } = Layout;

interface PageProps {
    // props
}

const Page: React.FC<PageProps> = ({ }) => {
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <GlobalHeader />
            </Header>
            <Content>
               
            </Content>
            <FloatingAssistant />
        </Layout>
    );
}

export default Page;
