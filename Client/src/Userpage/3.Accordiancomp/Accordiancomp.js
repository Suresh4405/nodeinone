import React, { useState } from "react";
import "./accordian.css";
import { Collapse } from "antd";
import letcode from "../../assets/lis 2.jpg";
import node from "../../assets/nodejs.jpg";
import php from "../../assets/php.webp";
import Chash from "../../assets/chash.png";
import java from "../../assets/java.jfif";
import dotnet from "../../assets/dotnet_round.png";
import dotnetcore from "../../assets/.netcore.png";
import python from "../../assets/python.png";
import rails from "../../assets/rails.png";
import html from "../../assets/html.webp";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import angular from "../../assets/angular.png";
import ios from "../../assets/iosap.jpg";
import android from "../../assets/android.jpg";
import reactnative from "../../assets/reactnative.png";
import mysql from "../../assets/mysql.jpg";
import sqlserver from "../../assets/sqlserver.png";
import marina from "../../assets/mariyadb.png";
import mongodb from "../../assets/mongodb.png";
import Blockchain from "../../assets/blockchainno1.webp";
import kurbenetes from "../../assets/kubernetes.png";
import Artifical from "../../assets/Ai.png";
import rasperypi from "../../assets/rasperypi.png";
import aws from "../../assets/aws.jpg";
import asure from "../../assets/azure.png";
import googlecloud from "../../assets/googlecloud.png";

const { Panel } = Collapse;

const Accordiancomp = () => {
  const [selectedPanel, setSelectedPanel] = useState("1");

  const onChange = (key) => {
    setSelectedPanel(key[0]);
  };
  return (
    <div className="service-tot">
      <div className="service-tech">
        <h1 className="technology-exp">TECHNOLOGY EXPERTISE</h1>
        <span style={{ color: "#DD5746"}}>Chechout Our Domine Knowledge</span>
      </div>
      <div className="divider-div">
        <div className="divider-left">
          <img src={letcode} className="scribe-imahes"></img>
        </div>
        <div className="divder-right">
          <Collapse accordion onChange={onChange} activeKey={selectedPanel}>
            <Panel
              header={<span style={{ color: "aliceblue" }}>* BACK END</span>}
              key="1"
              style={{ backgroundColor: "black" }}
            >
              <img src={node} className="domine-img1"></img>
              <img src={php} className="domine-img1"></img>
              <img src={Chash} className="domine-img1"></img>
              <img src={java} className="domine-img1"></img>
              <img src={dotnet} className="domine-img2"></img>
              <img src={python} className="domine-img2"></img>
              <img src={dotnetcore} className="domine-img2"></img>
              <img src={rails} className="domine-img2"></img>
            </Panel>
            <Panel
              header={<span style={{ color: "aliceblue" }}>* FRONT END</span>}
              key="2"
              style={{ backgroundColor: "black" }}
            >
              <img src={html} className="domine-img2"></img>
              <img src={js} className="domine-img2"></img>
              <img src={react} className="domine-img2"></img>
              <img src={angular} className="domine-img2"></img>
            </Panel>
            <Panel
              header={<span style={{ color: "aliceblue" }}>* MOBILE</span>}
              key="3"
              style={{ backgroundColor: "black" }}
            >
              <img src={ios} className="domine-img2"></img>
              <img src={android} className="domine-img2"></img>
              <img src={reactnative} className="domine-img2"></img>
            </Panel>
            <Panel
              header={
                <span style={{ color: "aliceblue" }}>* DATA ENGINEERING</span>
              }
              key="4"
              style={{ backgroundColor: "black" }}
            >
              <img src={mysql} className="domine-img2"></img>
              <img src={sqlserver} className="domine-img2"></img>
              <img src={mongodb} className="domine-img2"></img>
              <img src={marina} className="domine-img2"></img>
            </Panel>
            <Panel
              header={
                <span style={{ color: "aliceblue" }}>
                  * INNOVATIONS & CLOUD
                </span>
              }
              key="5"
              style={{ backgroundColor: "black" }}
            >
              <img src={Blockchain} className="domine-img1"></img>
              <img src={kurbenetes} className="domine-img1"></img>
              <img src={Artifical} className="domine-img1"></img>
              <img src={rasperypi} className="domine-img1"></img>
              <img src={aws} className="domine-img2"></img>
              <img src={asure} className="domine-img2"></img>
              <img src={googlecloud} className="domine-img2"></img>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default Accordiancomp;
