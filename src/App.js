import React, { useState } from 'react';
import { RealData } from './data';
import { Layout, Typography, Input, Col, Row, Space, Table, Tag, Avatar, List, Steps, Button } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { useMediaQuery } from 'react-responsive'

const { Header, Footer, Content } = Layout;
const { Title } = Typography;



function App() {

  const onSearch = (event) => {
    const filteredData = RealData.filter((data) => {
      return data.title.toLowerCase().includes(event.target.value);
    })
    setData(filteredData);
  };
  const [data, setData] = useState(RealData)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 823px)' });



  return (
    <div className="App">
      <Header style={{ background: '#2dcc3f', height: "40vh", position: "Absolute", width: "100%" }}>
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={22} xl={20} >

            <Title style={{ color: 'white', marginTop: '30px' }}>Referral Status <FireOutlined /></Title>
            <Input
              placeholder="Search"
              allowClear
              onChange={onSearch}
              style={{ maxWidth: "340px", borderRadius: '5px' }}
              size="large"
            />
          </Col>
        </Row>
      </Header>
      {/* <Row justify="center"   >
        <Col xs={24} sm={24} md={22} lg={20} xl={20} style={{ background: 'white', top: "180px", position: "relative", borderRadius: "6px", overflowX: "scroll" }} >
          <List
            itemLayout="vertical"
            size='large'
            style={{ width: "100%" }}
            grid={{
              xxl: RealData.length
            }}

            header={
              <Row >
                <Col flex="230px" style={{ display: "flex", justifyContent: 'center' }}>
                  <Title level={4}>Candidate</Title>
                </Col>
                <Col flex="auto">
                  <Row >
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Reffered</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Interviewed</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Hired</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Joined</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Reward</Title>
                    </Col>
                  </Row>
                </Col>
              </Row>}
            dataSource={data}
            renderItem={item => (
              <div>
                <Avatar style={{ marginLeft: "10px", width: "45px", height: "auto" }} src="https://joeschmoe.io/api/v1/random" />
                <Typography.Title level={5}>{item.title}</Typography.Title>
                <Steps style={{ height: '78vh' }} direction="vertical" labelPlacement="vertical" items={item.items} />

              </div>

            )}
          />

        </Col>
      </Row> */}


      <Row justify="center"   >
        <Col xs={24} sm={24} md={24} lg={22} xl={20} style={{ background: 'white', top: "180px", position: "relative", borderRadius: "6px" }} >

          <List
            itemLayout="vertical"
            header={!isTabletOrMobile? 
              <Row >
                <Col flex="240px" style={{ display: "flex", justifyContent: 'center' }}>
                  <Title level={4}>Candidate</Title>
                </Col>
                <Col flex="auto">
                  <Row >
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Reffered</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Interviewed</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Hired</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Joined</Title>
                    </Col>
                    <Col flex={1} style={{ display: "flex", justifyContent: 'center' }}>
                      <Title level={4}>Reward</Title>
                    </Col>
                  </Row>
                </Col>
              </Row>: null}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <div style={{ width: "100%" }}>

                  <Row style={{ margin: "0 1%" }}>
                    <Col flex="210px" style={{ display: "flex", justifyContent: 'start', alignItems: 'center' }}   >
                      <Avatar style={{  width: "45px", height: "auto" }} src="https://joeschmoe.io/api/v1/random" />
                      <Typography.Title level={5}>{item.title}</Typography.Title>

                    </Col>
                    <Col flex="auto" >
                      <Steps labelPlacement="vertical" direction={isTabletOrMobile?"vertical":"horizontal"} style={{ color: 'green' }} items={item.items} />
                    </Col>

                  </Row>
                </div>


              </List.Item>

            )}
          />

         </Col>
      </Row> 

    </div>
  );
}

export default App;
