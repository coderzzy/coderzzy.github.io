import { List } from 'antd';
import React from 'react';
import { metaInfo } from '../data/BlogMetaInfo';

const BlogList: React.FC = () => {

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          // console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={metaInfo}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          // actions={[
          //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          // ]}
          extra={
            <img
              width={272}
              src={item.picturePath}
            />
          }
        >
          <List.Item.Meta
            // 修改 onClick 事件处理函数
            title={<a onClick={() => window.open(item.contentLink, '_blank')}>{item.title}</a>}
            description={item.description}
          />
          {item.firstSentence}
        </List.Item>
      )}
    />
  );
};

export default BlogList;