import { Row, Col, Card, Typography, Divider, Radio, Switch } from "antd";
import styles from "../../styles/Home.module.css";

export const Pricing = () => {
  const { Title } = Typography;

  return (
    <div>
      <div className={styles.infoContainer} style={{ display: "flex" }}>
        <div className={styles.descriptionTitle}>
          <span className={styles.descTag}>Pricing &emsp;</span>
          <Divider className={styles.divider} light />
        </div>
        <Radio.Group
          className={styles.radioBts}
          // onChange={handleModeChange}
          value={"top"}
          style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Self-Hosted</Radio.Button>
          <Radio.Button value="left">Cloud-Hosted</Radio.Button>
          <Radio.Button value="right">Other Model</Radio.Button>
        </Radio.Group>

        <div
          style={{
            position: "absolute",
            right: "15%",
            width: "max-content",
          }}>
          <span className={styles.descTag}>Pricing Tier: &emsp;</span>

          <Switch
            checkedChildren="Monthly"
            unCheckedChildren="Annually"
            defaultChecked
          />
        </div>
      </div>

      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
        <br />
        <div style={{ marginLeft: "15px" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <br />
      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
        <br />
        <div style={{ marginLeft: "15px" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      <div style={{ display: "flex", width: "100vw" }}>
        <div style={{ display: "flex" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
        <br />
        <div style={{ marginLeft: "15px" }}>
          <Card style={{ width: "40vw" }}>
            <Row>
              <Col span={21}>
                <Title level={3}>Open Source</Title>
              </Col>
              <Col span={3}>
                <Title level={4}>Month</Title>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <p>Lorem Ipsum blah blah blah....</p>
              </Col>
              <Col span={3}>
                <p>/Per/Month</p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};
