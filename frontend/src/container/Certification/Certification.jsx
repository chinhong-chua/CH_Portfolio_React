import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Certification.scss";

const Certification = () => {
  const [loading, setLoading] = useState(false);
  const [certs, setCerts] = useState([]);
  const [selectedTab, setSelectedTab] = useState([]);
  const [initialTabs, setInitialTabs] = useState([]);


  useEffect(() => {
    const query = '*[_type=="certificates"] | order(orderNum asc)';
    setLoading(true);
    client.fetch(query).then((data) => {
      let d = data.map((item) => ({
        iconPath: item.imgUrl ,
        label: item.name,
        link: item.certLink ==''? '' : item.certLink,
      }));
      setInitialTabs(d)
      setSelectedTab(d[0]);
      setLoading(false);
    });
  }, []);

  // console.log("tabs: ", tabs);
  // console.log("certs: ", certs);
  console.log("initialTabs: ", initialTabs);

  console.log("selectedTab: ", selectedTab);

  
  if (loading) return "Loading ...";

  return (
    <>
      <div className="window">
        <nav>
          <ul>
            {initialTabs.map((item) => (
              <li
                key={item.label}
                className={item.label === selectedTab.label ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {` ${item.label} `}
                {item.label === selectedTab.label ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* 306x306px */}
              {/* <a href={selectedTab.link} target="_blank" rel="noreferrer">
                <img src={selectedTab.iconPath} />
              </a> */}
          {selectedTab?.iconPath &&  (<a href={selectedTab.link} target="_blank" rel="noreferrer">
                <img src={urlFor(selectedTab?.iconPath)} />
              </a>)
              }
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

    </>
  );
};
export default AppWrap(
  MotionWrap(Certification, "app__certification"),
  "certification",
  "app__whitebg"
);
