import React, { useEffect, useState } from "react";
import {
  Collapse,
  Typography,
  Divider,
  Col,
  Row,
  Form,
  Input,
  List,
} from "antd";
import axios from "axios";

import { SideInfo } from "./SideInfo";

const Community = ({ contributorsUrl }) => {
  const { Panel } = Collapse;
  const { Title } = Typography;
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const [gotTopContri, setGotTopContri] = useState(false);
  const [contributorsData, setContributorsData] = useState([]);

  useEffect(() => {
    const getTopContributors = async () => {
      try {
        axios
          .get(`https://api.github.com/repos/chatwoot/chatwoot/contributors`)
          .then(function (response) {
            setGotTopContri(true);

            let arr = [];

            const contentLength =
              response?.data?.length >= 10 ? 10 : response?.data?.length;

            for (let i = 0; i < contentLength; i++) {
              arr.push(response?.data[i]);
            }
            setContributorsData(arr);
          })
          .catch(function (error) {
            console.log(error);
            setGotTopContri(false);
            setContributorsData([]);
          });
      } catch (e) {
        console.log("Error", e);
        setGotTopContri(false);
        contributorsData([]);
      }
    };

    getTopContributors();
  }, []);

  return (
    <>
      <Form layout="vertical" form={form}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={17}>
            <Form.Item label="Top Contributors">
              <div
                style={{
                  // overflow: "scroll",
                  // height: "600px",
                  borderBottom: "1px solid #EAEAEA",
                  borderTop: "1px solid #EAEAEA",
                }}>
                <List
                  bordered
                  dataSource={contributorsData}
                  renderItem={(item) => (
                    <List.Item>
                      <div>
                        <img
                          src={item?.avatar_url}
                          alt="Avatar"
                          style={{
                            borderRadius: "50%",
                            height: "70px",
                            width: "70px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            window.open(`${item?.html_url}`, "_blank")
                          }></img>
                        <label style={{ marginLeft: '10px' }}> {item?.login} </label>
                      </div>

                      <div style={{ textAlign: "center" }}>
                        <Typography.Text style={{ color: "green" }}>
                          +{item?.contributions}
                        </Typography.Text>{" "}
                        &emsp;
                        {/* <br /> */}
                        <Typography.Text>Contributions</Typography.Text>
                      </div>
                      {/* <Button danger ghost onClick={() => handleRemoveItem(item)}>
                        Remove
                      </Button> */}
                    </List.Item>
                  )}
                />
              </div>
            </Form.Item>
          </Col>
          <Col span={7} style={{ borderLeft: "1px solid #D9D9D9" }}>
            <SideInfo tab={3} />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Community;
