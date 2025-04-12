import React, { useState } from 'react';
import { Tabs, Card, Image, Divider, Typography } from 'antd';
import { Layout } from 'antd';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';
import styles from './FitnessPage.module.less';
import { actionData } from '../../data/FitnessActionData';

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;



const FitnessPage: React.FC = () => {
    const [activeActionIndex, setActiveActionIndex] = useState(0);
    const [activeLevelIndex, setActiveLevelIndex] = useState(0);

    const currentAction = actionData[activeActionIndex];
    const currentLevel = currentAction.levelList[activeLevelIndex];
    const currentContent = currentLevel.levelContent;

    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <div className={styles.container}>
                    <Title level={2} className={styles.title}>《囚徒健身》知识总结</Title>

                    <div className={styles.tabsContainer}>
                        <Tabs
                            activeKey={activeActionIndex.toString()}
                            onChange={(key) => setActiveActionIndex(parseInt(key))}
                            className={styles.actionTabs}
                        >
                            {actionData.map((action, index) => (
                                <TabPane tab={action.actionName} key={index.toString()} />
                            ))}
                        </Tabs>

                        <Tabs
                            activeKey={activeLevelIndex.toString()}
                            onChange={(key) => setActiveLevelIndex(parseInt(key))}
                            className={styles.levelTabs}
                            tabPosition="top"
                        >
                            {currentAction.levelList.map((level, index) => (
                                <TabPane tab={level.levelName} key={index.toString()} />
                            ))}
                        </Tabs>
                    </div>

                    <Card className={styles.detailCard}>
                        <Title level={4}>{currentLevel.levelName}</Title>

                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <Image src={currentContent.image_start} alt="起始姿势" />
                                <Paragraph>{currentContent.image_start_description}</Paragraph>
                            </div>

                            {currentContent.image_middle && (
                                <div className={styles.imageWrapper}>
                                    <Image src={currentContent.image_middle} alt="中间姿势" />
                                    <Paragraph>{currentContent.image_middle_description}</Paragraph>
                                </div>
                            )}

                            <div className={styles.imageWrapper}>
                                <Image src={currentContent.image_end} alt="结束姿势" />
                                <Paragraph>{currentContent.image_end_description}</Paragraph>
                            </div>
                        </div>

                        <Divider />

                        <Title level={5}>训练标准</Title>
                        <Paragraph>{currentContent.target_junior}</Paragraph>
                        <Paragraph>{currentContent.target_intermediate}</Paragraph>
                        <Paragraph>{currentContent.target_senior}</Paragraph>
                    </Card>
                </div>
            </Content>
            <GlobalFooter />
        </Layout>
    );
};

export default FitnessPage;