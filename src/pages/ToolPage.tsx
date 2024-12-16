import React from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader'
import FloatingAssistant from '../components/FloatingAssistant/HuskyAssistant'
import RotatingGifGenerator from '../components/tools/RotatingGifGenerator'

const { Header, Content, Sider } = Layout;

interface ToolPageProps {
    // props
}

const ToolPage: React.FC<ToolPageProps> = ({ }) => {
    return (
        // <div className="bg-green-700">
        //     test
        // </div>
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <GlobalHeader />
            </Header>
            <Content>
                <RotatingGifGenerator />
            </Content>
            <FloatingAssistant />
        </Layout>
    );
}

export default ToolPage;