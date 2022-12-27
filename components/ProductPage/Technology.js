import { Row, Col, Card, Typography, Divider, Radio, Switch } from "antd";
import styles from "../../styles/Home.module.css";
import { SideInfo } from "./SideInfo";
import StarIcon from "@mui/icons-material/Star";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

//Migrate inline css to modular files
//Create a separate documentation file
//Replace window linking to history
//Make a common folder for Buttons etc + constants
//

export const Technology = () => {
  const { Title } = Typography;

  return (
    <div>
      <Row>
        <Col span={17}>
          <div className={styles.infoContainer}>
            <div className={styles.descriptionTitle}>
              <span className={styles.descTag}>Description</span>
              <Divider className={styles.divider} light />
            </div>
            <Card style={{ width: "95%" }}>
              <Row>
                <Col span={24}>
                  <Title
                    level={5}
                    style={{ color: "#273CA0", textDecoration: "undeline" }}>
                    circleci-docs
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={21}>
                  <p>Documentation for CircleCl</p>
                </Col>
              </Row>

              <Row>
                <Col span={21}>
                  <div style={{ display: "flex" }}>
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
                      &emsp;Javascript
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <StarIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <ForkLeftIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    &emsp;
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <div
                        style={{
                          height: "16px",
                          width: "16px",
                          marginTop: "3px",
                          border: "1px solid #707070",
                          //   paddingBottom: "20%",
                          //   backgroundColor: "#5166D9",
                        }}
                      />
                      <span>&emsp;Javascript</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <span>&emsp;Updated 10 Minutes Ago </span>
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div style={{ color: "#417E44" }}>
                    <LocalOfferIcon style={{ color: "#519E56" }} /> v.2.0.6
                  </div>
                  <div></div>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: "95%", marginTop: "10px" }}>
              <Row>
                <Col span={24}>
                  <Title
                    level={5}
                    style={{ color: "#273CA0", textDecoration: "undeline" }}>
                    circleci-docs
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={21}>
                  <p>Documentation for CircleCl</p>
                </Col>
              </Row>

              <Row>
                <Col span={21}>
                  <div style={{ display: "flex" }}>
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
                      &emsp;Javascript
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <StarIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <ForkLeftIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    &emsp;
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <div
                        style={{
                          height: "16px",
                          width: "16px",
                          marginTop: "3px",
                          border: "1px solid #707070",
                          //   paddingBottom: "20%",
                          //   backgroundColor: "#5166D9",
                        }}
                      />
                      <span>&emsp;Javascript</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <span>&emsp;Updated 10 Minutes Ago </span>
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div style={{ color: "#417E44" }}>
                    <LocalOfferIcon style={{ color: "#519E56" }} /> v.2.0.6
                  </div>
                  <div></div>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: "95%", marginTop: "10px" }}>
              <Row>
                <Col span={24}>
                  <Title
                    level={5}
                    style={{ color: "#273CA0", textDecoration: "undeline" }}>
                    circleci-docs
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={21}>
                  <p>Documentation for CircleCl</p>
                </Col>
              </Row>

              <Row>
                <Col span={21}>
                  <div style={{ display: "flex" }}>
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
                      &emsp;Javascript
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <StarIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <ForkLeftIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    &emsp;
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <div
                        style={{
                          height: "16px",
                          width: "16px",
                          marginTop: "3px",
                          border: "1px solid #707070",
                          //   paddingBottom: "20%",
                          //   backgroundColor: "#5166D9",
                        }}
                      />
                      <span>&emsp;Javascript</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <span>&emsp;Updated 10 Minutes Ago </span>
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div style={{ color: "#417E44" }}>
                    <LocalOfferIcon style={{ color: "#519E56" }} /> v.2.0.6
                  </div>
                  <div></div>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: "95%", marginTop: "10px" }}>
              <Row>
                <Col span={24}>
                  <Title
                    level={5}
                    style={{ color: "#273CA0", textDecoration: "undeline" }}>
                    circleci-docs
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={21}>
                  <p>Documentation for CircleCl</p>
                </Col>
              </Row>

              <Row>
                <Col span={21}>
                  <div style={{ display: "flex" }}>
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
                      &emsp;Javascript
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <StarIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <ForkLeftIcon style={{ marginTop: "-1px" }} /> &nbsp; 668
                    </div>
                    &emsp;
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <div
                        style={{
                          height: "16px",
                          width: "16px",
                          marginTop: "3px",
                          border: "1px solid #707070",
                          //   paddingBottom: "20%",
                          //   backgroundColor: "#5166D9",
                        }}
                      />
                      <span>&emsp;Javascript</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        color: "#505050",
                        marginLeft: "10px",
                      }}>
                      <span>&emsp;Updated 10 Minutes Ago </span>
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div style={{ color: "#417E44" }}>
                    <LocalOfferIcon style={{ color: "#519E56" }} /> v.2.0.6
                  </div>
                  <div></div>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col
          span={6}
          style={{ borderLeft: "1px solid #D9D9D9", paddingLeft: "10px" }}>
          <SideInfo tab={2} />
        </Col>
      </Row>
    </div>
  );
};
