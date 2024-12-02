import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from 'antd';
import { metaInfo } from '../data/BlogMetaInfo'

const BlogList: React.FC = () => {
  const navigate = useNavigate();

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
            title={<a onClick={()=>navigate('/blog')}>{item.title}</a>}
            description={item.description}
          />
          {item.firstSentence}
        </List.Item>
      )}
    />
  );
};

export default BlogList;