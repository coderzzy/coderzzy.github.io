import React, { useState } from 'react';
import { Tabs, Card, Image, Divider, Typography } from 'antd';
import { Layout } from 'antd';
import GlobalHeader from '../../components/GlobalHeader';
import GlobalFooter from '../../components/GlobalFooter';
import styles from './KChartPage.module.less';
import { categoryList } from '../../data/KChartData';

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const KChartPage: React.FC = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeKIndex, setActiveKIndex] = useState(0);    

    const currentCategory = categoryList[activeCategoryIndex];
    const currentK = currentCategory.kList[activeKIndex];
    const currentContent = currentK.kContent;

    return (
        <Layout className={styles.layout}>
            <Header>
                <GlobalHeader />
            </Header>
            <Content className={styles.content}>
                <div className={styles.container}>
                    <Title level={2} className={styles.title}>K线知识库</Title>

                    <div className={styles.tabsContainer}>
                        <Tabs
                            activeKey={activeCategoryIndex.toString()}
                            onChange={(key) => setActiveCategoryIndex(parseInt(key))}
                            className={styles.categoryTabs}
                        >
                            {categoryList.map((category, index) => (
                                <TabPane tab={category.categoryName} key={index.toString()} />
                            ))}
                        </Tabs>

                        <Tabs
                            activeKey={activeKIndex.toString()}
                            onChange={(key) => setActiveKIndex(parseInt(key))}
                            className={styles.kTabs}
                            tabPosition="top"
                        >
                            {currentCategory.kList.map((k, index) => (
                                <TabPane tab={k.kName} key={index.toString()} />
                            ))}
                        </Tabs>
                    </div>

                    <Card className={styles.detailCard}>
                        <Title level={4}>{currentK.kName}</Title>

                        <div className={styles.imageContainer}>
                            {currentContent.image && (
                                <div className={styles.imageWrapper}>
                                    <Image src={currentContent.image} alt={currentK.kName} />
                                </div>
                            )}
                        </div>

                        <Divider />

                        {currentContent.feature && (
                            <>
                                <Title level={5}>特征</Title>
                                <Paragraph>{currentContent.feature}</Paragraph>
                            </>
                        )}

                        {currentContent.analysis && (
                            <>
                                <Title level={5}>分析</Title>
                                <Paragraph>{currentContent.analysis}</Paragraph>
                            </>
                        )}
                    </Card>
                </div>
            </Content>
            <GlobalFooter />
        </Layout>
    );
};

export default KChartPage;