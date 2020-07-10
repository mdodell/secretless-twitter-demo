import React, { useState } from 'react';

import { Button, Typography, Row, Col, Card } from 'antd';
import ShowTweets from './ShowTweets';
import TokenForm from './TokenForm';
import DisplayMessage from './DisplayMessage';

import './App.scss';

const { Title } = Typography;

const App = props => {
  const [tweets, setTweets] = useState([]);
  const [noVisibleSecrets, setNoVisibleSecrets] = useState(false);
  const [bearerToken, setBearerToken] = useState("");
  const [error, setError] = useState(false);


  const onFinish = ({twitter_token}) => {
    fetch(`/fetchWithoutSecretless?twitter_token=${twitter_token}`).then(res => res.text()).then(data => {
      setTweets(JSON.parse(data))
      setBearerToken(twitter_token)
      setNoVisibleSecrets(false);
      setError(false);
    }).catch((error) => {
      setError(true)
    })
  };

  return (
    <Row justify="center">
      <Col span={20}>

        <Row justify="center">
          <Title className="text-center mt-1">Secretless-Broker Twitter API Demo</Title>
        </Row>
        <DisplayMessage bearerToken={bearerToken} noVisibleSecrets={noVisibleSecrets} error={error}/>

        <ShowTweets tweets={tweets}/>

        <Row justify="center" className="mt-1 flex-direction-column">
          <Col span={24}>
            <Row justify="center">
              <Card className="full-width ant-list-bordered">
                <Title level={4}>No token needed!</Title>
                <Button type="primary" className="full-width" onClick={() => {
                    fetch('/fetchWithSecretless').then(resp => resp.text()).then(data => {
                      setTweets(JSON.parse(data))
                      setBearerToken("")
                      setNoVisibleSecrets(true)
                      setError(false);
                    }).catch(() => setError(true));
                  }}>Fetch Tweets with Secretless</Button>
              </Card>
              <TokenForm onFinish={onFinish} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  export default App;
