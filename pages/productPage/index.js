import React from "react";
import styles from "../../styles/Home.module.css";

import { Divider } from "@mui/material";
import { style } from "@mui/system";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Row, Col, Typography, Image } from "antd";
import "antd/dist/antd.css";
// Default theme
import "@splidejs/react-splide/css";
import { Pricing } from "../../components/ProductPage/Pricing";
import Community from "../../components/ProductPage/Community";
import { SideInfo } from "../../components/ProductPage/SideInfo";
import { Technology } from "../../components/ProductPage/Technology";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Menu } from 'antd';

const items = [
  {
    label: "Product Information",
    key: '1',
    // icon: <MailOutlined />,
  },
  {
    label: 'Technology',
    key: '2',
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: 'Community',
    key: '3',
    // icon: <SettingOutlined />,
  },
  {
    label: 'Pricing',

    key: '4',
  },
];


function Home() {
  const [value, setValue] = React.useState("1");
  const { Title } = Typography;

  const [current, setCurrent] = React.useState('1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadCrumbs}>
        Home /Category/ Sub-Category/ Product Name
      </div>

      <div className={styles.productHeader}>
        <div className={styles.productImageCard}>
          <img
            className={styles.productImage}
            src="https://avatars.githubusercontent.com/u/1231870?s=200&v=4"
          />
        </div>

        <div className={styles.productDescription}>
          <h5 className={styles.productDescTitle}>CircleCI</h5>
          <div className={styles.productLink}>https://circleci.com/</div>
          <div className={styles.propAlt}>
            <span className={styles.propTextConst}>
              Propietary Alternatives:
            </span>
            <span className={styles.propAltsDyn}>
              Company 1, Company 2, Company 3
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardMain}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />


        {current === '1' && <div style={{ padding: '20px' }}><Row>
          <Col span={18}>
            <div>
              <div className={styles.infoContainer}>
                <div className={styles.descriptionTitle}>
                  <span className={styles.descTag}>Description</span>
                  <Divider className={styles.divider} light />
                </div>
                <div className={styles.descLabel}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.descriptionTitle}>
                  <span className={styles.descTag}>Description</span>
                  <Divider className={styles.divider} light />
                </div>
                <div className={styles.descLabel}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. t was popularised in the
                  1960s with Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been
                  the industry’s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. t was
                  popularised in the 1960s with …
                </div>
              </div>
              <div className={styles.productHeader}>
                <div className={styles.infoContainer}>
                  <div className={styles.descriptionTitle}>
                    <span className={styles.descTag}>Founded In</span>
                    <Divider className={styles.divider} light />
                  </div>
                  <div className={styles.descLabel}>2014</div>
                </div>
                &emsp; &emsp;
                <div className={styles.infoContainer} style={{ marginLeft: '10%' }}>
                  <div className={styles.descriptionTitle}>
                    <span className={styles.descTag}>Founding Team</span>
                    <Divider className={styles.divider} light />
                  </div>
                  <div className={styles.descLabel}>
                    Name 1, Name 2, Name 3, Name 4, Name 5
                  </div>
                </div>
              </div>

              <div className={styles.infoContainer}>
                <div className={styles.descriptionTitle}>
                  <span className={styles.descTag}>
                    Propietary Alternatives:
                  </span>
                  <Divider className={styles.divider} light />
                </div>
                <div className={styles.descLabel}>
                  Company 1, Company 2, Company 3
                </div>
              </div>

              <div className={styles.infoContainer}>
                <div className={styles.descriptionTitle}>
                  <span className={styles.descTag}>Images</span>
                  <Divider className={styles.divider} light />
                </div>
                <div className={styles.descLabel}>
                  <Splide
                    aria-label="My Favorite Images"
                    options={{
                      rewind: true,
                      type: "loop",
                      gap: "1rem",
                      perMove: 1,
                      width: 800,
                      perPage: 2,
                      focus: 0,
                      omitEnd: true,
                    }}>
                    <SplideSlide>
                      <div className={styles.imageDiv}>
                        {/* <img
                          src="https://marketplace-screenshots.githubusercontent.com/7/0eb65a80-2d65-11ea-88e2-c1804c9f365b?auto=webp&format=jpeg&width=670"
                          alt="Image 1"
                          className={styles.imageProduct}
                        /> */}
                        <Image
                          className={styles.imageProduct}
                          height={200}
                          src="https://marketplace-screenshots.githubusercontent.com/7/0eb65a80-2d65-11ea-88e2-c1804c9f365b?auto=webp&format=jpeg&width=670"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className={styles.imageDiv}>
                        <Image
                          className={styles.imageProduct}
                          height={200}
                          src="https://circleci.com/docs/assets/img/docs/arch.png"
                        />
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>

              <div className={styles.infoContainer}>
                <div className={styles.descriptionTitle}>
                  <span className={styles.descTag}>Videos</span>
                  <Divider className={styles.divider} light />
                </div>
                <div className={styles.descLabel}>
                  <Splide
                    aria-label="My Favorite Images"
                    options={{
                      rewind: true,
                      type: "loop",
                      gap: "1rem",
                      perMove: 1,
                      width: 800,
                      perPage: 2,
                      focus: 0,
                      omitEnd: true,
                    }}>
                    <SplideSlide>
                      <div className={styles.imageDiv}>
                        <iframe
                          width="400px"
                          height="218px"
                          src={`https://www.youtube.com/embed/A36AHVHblA8`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide className={styles.imageDiv}>
                      <div className={styles.imageDiv}>
                        <iframe
                          width="400px"
                          height="218px"
                          src={`https://www.youtube.com/embed/uD6iNU-SESE`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </Col>
          <Col
            span={6}
            style={{
              paddingLeft: "10px",
              borderLeft: "1px solid #D9D9D9",
            }}>
            <SideInfo tab={1} />
          </Col>
        </Row></div>}

        {current === '2' && <div style={{ padding: '20px' }}><Technology /></div>}
        {current === '3' && <div style={{ padding: '20px' }}><Community /> </div>}
        {current === '4' && <div style={{ padding: '20px' }}><Pricing /></div>}




        {/* <TabPanel value="4">
          <Pricing />
        </TabPanel>
        <TabPanel value="3">
          <Community />
        </TabPanel>
        <TabPanel value="2">
          <Technology />
        </TabPanel> */}

      </div>
    </div>
  );
}

export default Home;
