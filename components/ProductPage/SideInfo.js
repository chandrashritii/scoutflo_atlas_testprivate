import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import TagIcon from "@mui/icons-material/Tag";
import { Progress } from "antd";
import CountUp from "react-countup";
import { Collapse, Typography, Col, Row, Form } from "antd";

// import * as growLottie from "../assets/grow-lottie.json";
import { Avatar, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

export const SideInfo = ({ tab }) => {
  const { Title } = Typography;
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: growLottie,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div>
      {tab === 3 && (
        <Row>
          <Col span={12}>
            <Form.Item label="Total Members">
              <hr style={{ color: "black", borderStyle: "solid" }} />
              <div style={{ display: "flex" }}>
                {/* <Lottie options={defaultOptions} height={50} width={50} />{" "} */}
                <Title style={{ color: "#334BD0" }}>
                  <CountUp start={0} end={3354} />
                </Title>
              </div>
            </Form.Item>
          </Col>
        </Row>
      )}
      {tab === 3 && (
        <Row>
          <Col span={12}>
            <Form.Item label="Active Members">
              <hr style={{ color: "black", borderStyle: "solid" }} />

              <div style={{ display: "flex" }}>
                {/* <Lottie options={defaultOptions} height={50} width={50} />{" "} */}
                <Title style={{ color: "#334BD0" }}>
                  <CountUp start={0} end={2000} />
                </Title>
              </div>
            </Form.Item>
          </Col>
        </Row>
      )}

      {tab !== 1 && (
        <Row>
          <Col span={12}>
            <Form.Item label="People">
              <hr style={{ color: "black", borderStyle: "solid" }} />

              <Avatar.Group
                maxCount={4}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" />
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80
" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
            </Form.Item>
          </Col>
        </Row>
      )}

      <Row>
        <Col span={12}>
          Website
          <hr style={{ color: "black", borderStyle: "solid" }} />
          {/* <Divider light /> */}{" "}
          <div style={{ color: "#1F3180", display: "flex" }}>
            {" "}
            <LanguageIcon />
            <span style={{ marginLeft: '10px' }}>circleci.com</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={12}>


        </Col>
      </Row>

      <br />
      {tab === 2 && <Row>
        <Col span={12}>
          Top Technologies
          <hr style={{ color: "black", borderStyle: "solid" }} />
          {/* <Divider light /> */}{" "}
          <div>
            <div className="progress" style={{ height: '16px' }}>
              <div className="progress-bar progress-bar-success" role="progressbar" style={{ width: "40%", background: '#5166D9' }}>
              </div>
              <div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: "20%", background: '##832C1E' }}>
              </div>
              <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '40%', background: '#F3CD81' }}>
              </div>
            </div>
            <br />
            <div style={{ display: "flex", color: "#505050" }}>
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  marginTop: "3px",
                  //   paddingBottom: "20%",
                  backgroundColor: "#5166D9",
                }}
              />
              <span style={{ color: '#707070' }}>&emsp;40% JavaScript</span>
            </div>
            <div style={{ display: "flex", color: "#505050" }}>
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  marginTop: "3px",
                  backgroundColor: "#832C1E",
                }}
              />
              <span style={{ color: '#707070' }}>&emsp;20% Ruby</span>
            </div>

            <div style={{ display: "flex", color: "#505050" }}>
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  marginTop: "3px",
                  backgroundColor: "#F3CD81",
                }}
              />
              <span style={{ color: '#707070' }}>&emsp; 40% Python</span>
            </div>


          </div>

        </Col>
      </Row>}

      <br />
      <Row>
        <Col span={12}>
          Github Organisation
          <hr style={{ color: "black", borderStyle: "solid" }} />
          {/* <Divider light /> */}
          <div style={{ color: "#1F3180", display: "flex" }}>
            <GitHubIcon />
            <span style={{ marginLeft: '10px' }}>circleci</span>

          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          Hashtags
          <hr style={{ color: "black", borderStyle: "solid" }} />
          {/* <Divider light /> */}
          <div style={{ color: "#1F3180", display: "flex" }}>
            <TagIcon />
            <span style={{ marginLeft: '10px' }}> Tag 1, Tag 2</span>

          </div>
        </Col>
      </Row>
    </div>
  );
};
