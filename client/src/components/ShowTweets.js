import React from 'react';
import {List, Typography, Avatar} from 'antd';

const { Title } = Typography;

const ShowTweets = ({tweets}) => {
  return (
      (tweets.length !== 0) &&
        <List
          className="mt-1"
          header={<Title level={4}>Fetched Tweets</Title>}
          bordered
          dataSource={tweets}
          renderItem={tweet => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={tweet.user.profile_image_url} />}
                title={<a href={tweet.user.url}>{tweet.user.name}</a>}
                description={tweet.full_text}
              />
            </List.Item>
          )}
        />
)}

export default ShowTweets;
