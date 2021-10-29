import type { NextPage } from "next";
import { motion } from "framer-motion";
import MobileNavButton from "../components/mobile-nav-button";
import { NextSeo } from "next-seo";
import styles from "../styles/discord.module.scss";

const DiscordServer: NextPage<{}> = () => {
  const setTransition = (delay: number) => ({
    duration: 0.5,
    delay: delay,
    ease: "easeOut",
  });
  return (
    <>
      <NextSeo title="r/NxHouse Community" />
      <MobileNavButton />
      <div
        className="container text-hover-animated"
        style={{ width: "100%", paddingLeft: "32px", paddingRight: "32px" }}
      >
        <motion.h6
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={setTransition(0)}
          style={{ marginBottom: "-14px" }}
        >
          Welcome to!
        </motion.h6>
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={setTransition(0.25)}
        >
          r/NxHouse Community
        </motion.h1>
        <motion.h6
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={setTransition(0.5)}
          style={{ paddingLeft: "28px", marginTop: "-26px" }}
        >
          Official NEiX’s Discord Server
        </motion.h6>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(0.5)}
          >
            - PRODUCER ZONE
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(0.75)}
          >
            - GAMING ZONE
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(1)}
          >
            - WORKSPACE PRIVATE
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(1.25)}
          >
            - MUSICBOT ZONE
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(1.5)}
          >
            - FREE TALK
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(1.75)}
          >
            - iT SUPPORT
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(2)}
          >
            - STORE
          </motion.b>
          <motion.b
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={setTransition(2.25)}
          >
            - HELPER
          </motion.b>
        </div>
        <div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(2.5)}
          >
            this discord server is beta, work in process
          </motion.p>
        </div>
        <a
          href="https://discord.gg/8qe3xnkHjJ"
          target="_blank"
          className="link2"
        >
          JOIN NOW
        </a>
        <div style={{ height: 25 }}></div>
        <div></div>
        <div className={styles.row}>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(3)}
            className={styles.card}
          >
            <div style={{ width: 65 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.27 688.27"
              >
                <g>
                  <g>
                    <rect
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      x="5.5"
                      y="5.5"
                      width="677.27"
                      height="677.27"
                      rx="30.85"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M640.39,424.4H600.08V404.24H559.77V424.4H479.15V384.09h90.7c6,0,10.08-4,10.08-10.08V192.61c0-6.05-4-10.08-10.08-10.08h-262c-6.05,0-10.08,4-10.08,10.08V374c0,6.05,4,10.08,10.08,10.08h90.7V424.4H257.44V394.16c0-6-4-10.07-10.08-10.07H237.28V363.93h10.08c6,0,10.08-4,10.08-10.08V313.54c0-6-4-10.08-10.08-10.08h-131c-6,0-10.08,4-10.08,10.08v30.24H96.19c-6,0-10.08,4-10.08,10.07v40.31c0,6,4,10.08,10.08,10.08h10.08V424.4H55.88c-6.05,0-10.08,4-10.08,10.08V646.11H66V494.94H86.11V646.11h20.16V494.94H590V646.11h20.16V494.94h20.16V646.11h20.15V434.48C650.47,428.43,646.44,424.4,640.39,424.4ZM559.77,202.69V313.54H317.9V202.69ZM317.9,333.7H559.77v30.23H317.9Zm100.78,50.39H459V424.4H418.68ZM126.42,323.62H237.28v20.16H126.42Zm-20.15,40.31H217.12v20.16H106.27Zm20.15,40.31H237.28V424.4H126.42Zm473.66,70.55H66V444.55H630.32v30.24Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M106.27,222.84H247.36c6,0,10.08-4,10.08-10.08V152.3A40.43,40.43,0,0,0,217.12,112H186.89V41.44H166.74V112H136.5A40.43,40.43,0,0,0,96.19,152.3v60.46C96.19,218.81,100.22,222.84,106.27,222.84Zm30.23-90.7h80.62a20.22,20.22,0,0,1,20.16,20.16v50.39H116.35V182.53h50.39V162.38H116.35V152.3A20.21,20.21,0,0,1,136.5,132.14Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>WORKSPACE PRIVATE</h1>
            <p>มีพื้นที่ทำงานส่วนตัว ไม่ว่าจะเป็นทำเพลง หรือทำเอกสารอื่นๆ</p>
            <p>สามารถขอโซนนี้ได้จากแอดมินโดยตรง</p>
          </motion.section>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(3.125)}
            className={styles.card}
          >
            <div style={{ width: 65 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.27 688.27"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <rect
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      x="5.5"
                      y="5.5"
                      width="677.27"
                      height="677.27"
                      rx="30.85"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M648.68,270.75v-44a11,11,0,0,0-3.22-7.78h0L557.4,130.87a11,11,0,0,0-7.79-3.22H256.08a11,11,0,0,0,0,22h289l66.05,66H77.17l66.05-66H212a11,11,0,1,0,0-22H138.66a11,11,0,0,0-7.78,3.22L42.82,218.94h0a11,11,0,0,0-3.22,7.78v44a83.88,83.88,0,0,0,14.68,47.5V549.61a11,11,0,0,0,11,11H623a11,11,0,0,0,11-11V373.49a11,11,0,0,0-22,0V538.61H267.08V388.17a11,11,0,0,0-11-11H124a11,11,0,0,0-11,11V538.61H76.28V340.32a84.3,84.3,0,0,0,121.09-27.93,84.36,84.36,0,0,0,146.77,0,84.36,84.36,0,0,0,146.77,0,84.38,84.38,0,0,0,157.77-41.64ZM135,399.17H245.07V538.61H135Zm429.3-66a62.45,62.45,0,0,1-62.38-62.38,11,11,0,1,0-22,0,62.38,62.38,0,0,1-124.76,0,11,11,0,1,0-22,0,62.38,62.38,0,0,1-124.76,0,11,11,0,1,0-22,0,62.38,62.38,0,0,1-124.76,0v-33H626.66v33A62.43,62.43,0,0,1,564.29,333.13Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M212,450.54a11,11,0,0,0-11,11v14.68a11,11,0,1,0,22,0V461.55A11,11,0,0,0,212,450.54Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M358.81,479.9a11,11,0,0,0,0,22H564.29a11,11,0,0,0,11-11V388.17a11,11,0,0,0-11-11H314.78a11,11,0,0,0-11,11V490.9a11,11,0,0,0,22,0V399.17H553.28V479.9Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>Reseller</h1>
            <p>
              พื้นที่ตลาดขายของทุกสิ่งทุกอย่าง อาทิเช่น อุปกรณ์ทำเพลง, Drum Kit
              และอื่นๆ
            </p>
            <p>มีระบบกลางพร้อม</p>
          </motion.section>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(3.25)}
            className={styles.card}
          >
            <div style={{ width: 65 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.27 688.27"
              >
                <g>
                  <g>
                    <rect
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      x="5.5"
                      y="5.5"
                      width="677.27"
                      height="677.27"
                      rx="30.85"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M626.66,366.56a9.62,9.62,0,0,0-16.21,10.36,120.75,120.75,0,0,1,19,65.17,122.36,122.36,0,0,1-1,15.41c-.26,2-.56,4-.92,6q-.27,1.5-.57,3a121.37,121.37,0,0,1-118.7,96.78h0c-1.43,0-2.87,0-4.29-.08-.69,0-1.38-.06-2.07-.1l-2.1-.12-2.85-.24-1.15-.11c-1.18-.12-2.35-.25-3.52-.41l-.25,0a120.92,120.92,0,0,1-45.28-15.69,8.78,8.78,0,0,0-1.15-.57,120.92,120.92,0,0,1-49.73-58.48,9.62,9.62,0,1,0-17.84,7.2A140.88,140.88,0,0,0,402,534a310.91,310.91,0,0,0-115.65-.1,141.11,141.11,0,0,0,23.89-39.25,9.62,9.62,0,1,0-17.84-7.2,120.93,120.93,0,0,1-49.75,58.49,9.12,9.12,0,0,0-1.13.56,120.84,120.84,0,0,1-45.28,15.68l-.25,0c-1.17.15-2.34.29-3.51.41l-1.17.11c-.94.09-1.89.17-2.83.24l-2.12.12-2.05.1c-1.43.05-2.87.08-4.31.08a121.17,121.17,0,1,1,0-242.34H285.79v23.6a9.62,9.62,0,0,0,9.62,9.62h46.16a9.62,9.62,0,0,0,0-19.24H305v-14h73.09v14h-7.48a9.62,9.62,0,0,0,0,19.24h17.1a9.62,9.62,0,0,0,9.61-9.62v-23.6H508.28A120.38,120.38,0,0,1,594,356.41a9.62,9.62,0,0,0,13.6-13.6,139.49,139.49,0,0,0-99.28-41.13H351.19V266.56A40.82,40.82,0,0,1,392,225.79h68.5a60,60,0,1,0,0-120H339A9.62,9.62,0,0,0,339,125H460.46a40.78,40.78,0,1,1,0,81.55H392a60.08,60.08,0,0,0-60,60v35.12H180c-77.42,0-140.41,63-140.41,140.41S102.58,582.5,180,582.5c1.66,0,3.31,0,5-.1.77,0,1.54-.07,2.31-.11s1.66-.08,2.49-.14c1.07-.07,2.13-.17,3.19-.26l1.39-.13c1.33-.14,2.66-.29,4-.47l.28,0a139.76,139.76,0,0,0,52.57-18c10.43-3.9,92.8-32.44,186.13.14a139.77,139.77,0,0,0,52.38,17.88l.28,0c1.32.17,2.64.33,4,.46l1.39.13c1.06.1,2.12.19,3.18.26.83.06,1.66.1,2.49.14s1.53.09,2.31.12c1.64.06,3.3.09,4.95.09h0a140.35,140.35,0,0,0,116.39-62c.63-.93,1.26-1.87,1.87-2.82q3.65-5.7,6.76-11.76a140.4,140.4,0,0,0-6.63-139.4Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M169.74,506.74h2.57a25,25,0,0,0,25-25V467.62h14.11a25,25,0,0,0,25-25v-2.56a25,25,0,0,0-25-25H197.31V400.94a25,25,0,0,0-25-25h-2.57a25,25,0,0,0-25,25v14.11H130.63a25,25,0,0,0-25,25v2.56a25,25,0,0,0,25,25h14.11v14.11A25,25,0,0,0,169.74,506.74Zm-39.11-58.35a5.78,5.78,0,0,1-5.77-5.77v-2.56a5.78,5.78,0,0,1,5.77-5.78h23.73a9.61,9.61,0,0,0,9.61-9.61V400.94a5.78,5.78,0,0,1,5.77-5.77h2.57a5.78,5.78,0,0,1,5.77,5.77v23.73a9.62,9.62,0,0,0,9.62,9.61h23.72a5.78,5.78,0,0,1,5.77,5.78v2.56a5.78,5.78,0,0,1-5.77,5.77H187.7a9.62,9.62,0,0,0-9.62,9.62v23.72a5.78,5.78,0,0,1-5.77,5.77h-2.57a5.78,5.78,0,0,1-5.77-5.77V458a9.61,9.61,0,0,0-9.61-9.62Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M503.73,421.39a32.06,32.06,0,1,0-32.06-32.06A32.09,32.09,0,0,0,503.73,421.39Zm0-44.88a12.83,12.83,0,1,1-12.82,12.82A12.83,12.83,0,0,1,503.73,376.51Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M503.73,525.4a32.06,32.06,0,1,0-32.06-32.06A32.09,32.09,0,0,0,503.73,525.4Zm0-44.88a12.82,12.82,0,1,1-12.82,12.82A12.83,12.83,0,0,1,503.73,480.52Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M419.67,441.34a32.06,32.06,0,1,0,32.05-32.06A32.09,32.09,0,0,0,419.67,441.34Zm44.88,0a12.83,12.83,0,1,1-12.82-12.83A12.83,12.83,0,0,1,464.55,441.34Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M587.79,441.34a32.06,32.06,0,1,0-32.06,32.05A32.09,32.09,0,0,0,587.79,441.34Zm-44.88,0a12.83,12.83,0,1,1,12.82,12.82A12.84,12.84,0,0,1,542.91,441.34Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>Gaming Community</h1>
            <p>หาเพื่อนเล่นเกมส์, หาคนแบกแรงค์</p>
          </motion.section>
        </div>
        <div className={styles.row}>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(3.5)}
            className={styles.card}
          >
            <div style={{ width: 65 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.27 688.27"
              >
                <g>
                  <g>
                    <rect
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      x="5.5"
                      y="5.5"
                      width="677.27"
                      height="677.27"
                      rx="30.85"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M271.79,422.92l-4.05,38.25a10.94,10.94,0,0,0,10.88,12.09H394.33a10.94,10.94,0,0,0,10.89-12.09l-4.05-38.25H545.29A40.71,40.71,0,0,0,586,382.24V100.31a40.73,40.73,0,0,0-40.68-40.69H118.91a40.73,40.73,0,0,0-40.68,40.69V382.24a40.72,40.72,0,0,0,40.68,40.68Zm110.38,28.46H290.78l3-28.46h85.35ZM118.91,81.51H545.29a18.82,18.82,0,0,1,18.8,18.8v248.2h-464V100.31A18.82,18.82,0,0,1,118.91,81.51Zm-18.8,300.73V370.4h464v11.84A18.81,18.81,0,0,1,545.29,401H118.91A18.82,18.82,0,0,1,100.11,382.24Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M545,546.79a11,11,0,0,0,.36-10.73l-21.62-41.58a10.92,10.92,0,0,0-9.71-5.9H150.18a10.93,10.93,0,0,0-9.71,5.9l-21.62,41.58a10.94,10.94,0,0,0,9.71,16H535.64A11,11,0,0,0,545,546.79Zm-398.4-16.63,10.23-19.69H507.38l10.23,19.69Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M564.09,571.75H546.58a46,46,0,0,0-46,46,10.94,10.94,0,0,0,10.94,10.94H599.1a10.94,10.94,0,0,0,10.95-10.94A46,46,0,0,0,564.09,571.75Zm-39,35a24.09,24.09,0,0,1,21.44-13.13h17.51a24.11,24.11,0,0,1,21.44,13.13Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>iT Support and Community</h1>
            <p>ปรึกษาปัญหาคอม แลกเปลี่ยนความรู้และขอความช่วยเหลือ</p>
          </motion.section>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={setTransition(3.75)}
            className={styles.card}
          >
            <div style={{ width: 65 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.27 688.27"
              >
                <g>
                  <g>
                    <rect
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      x="5.5"
                      y="5.5"
                      width="677.27"
                      height="677.27"
                      rx="30.85"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M194.35,405l30.41,30.4L316,344.14l-91.22-91.22-30.41,30.4,60.81,60.82Z"
                    />
                    <path
                      style={{ fill: "#FFF" }}
                      d="M408.64,387.14h-86v43h86Z"
                    />
                    <path
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeMiterlimit: 10,
                        strokeWidth: 18,
                      }}
                      d="M129.14,129.14a43,43,0,0,0-43,43v344a43,43,0,0,0,43,43h430a43,43,0,0,0,43-43v-344a43,43,0,0,0-43-43Zm430,43h-430v344h430Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>Developer Community</h1>
            <p>
              พูดคุยเรื่องการ Coding แบ่งปันความรู้เรื่องภาษาเขียนและอีกมากมาย
            </p>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default DiscordServer;
