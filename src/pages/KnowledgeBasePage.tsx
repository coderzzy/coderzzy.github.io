import React from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import styles from './KnowledgeBasePage.module.less';

const KnowledgeBasePage: React.FC = () => {
    const knowledgeList = [
        {
            title: '《囚徒健身》知识总结',
            description: '包含俯卧撑、深蹲、引体向上等训练动作的详细指南',
            link: '/knowledge-base/fitness',
            image: '/images/knowledge/fitness.jpg'
        },
        {
            title: '股票K线知识总结',
            description: '包含各种K线形态及其市场含义的分析',
            link: '/knowledge-base/k-chart',
            image: '/images/knowledge/k_chart.jpg'
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>知识库</h1>
            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={knowledgeList}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={item.link}>
                            <Card
                                hoverable
                                cover={<img alt={item.title} src={item.image} />}
                            >
                                <Card.Meta 
                                    title={item.title} 
                                    description={item.description} 
                                />
                            </Card>
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default KnowledgeBasePage;