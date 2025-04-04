import React from 'react';
import { Layout } from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import styles from './PersonalDetailsPage.module.less'; // 需要创建对应的样式文件

const { Header, Content } = Layout;

const PersonalDetailsPage: React.FC = () => {
    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <div>
                    <h1>个人详情</h1>
                    <p>这里展示更多的个人信息，比如独立开发者项目列表。</p>
                </div>
            </Content>
        </Layout>
    );
};

export default PersonalDetailsPage;