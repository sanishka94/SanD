import {DiYii} from "react-icons/di";
import {ImFacebook2} from "react-icons/im";
import {FaSalesforce} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {BsLine} from "react-icons/bs";
import {SiMongodb} from "react-icons/si";

import Ball from "../components/Ball";

import styles from "./Work.module.css"

const work_data = [
  {
    "key":1,
    "title": "Yii2",
    "icon" : <DiYii />,
    "details" : [
      "Created and developed new pages for new projects",
      "Adjusted design as requested by other departments",
      "Created rest APIs in the backend to collect amd forward data to other applications"
    ]
  },
  {
    "key":2,
    "title": "Facebook",
    "icon" : <ImFacebook2 />,
    "details" : [
      "Setup facebook pixel on the website for analysis",
      "Setup conversion API in the backend to send conversion events to FB",
      "Added facebook Single Sign On to website form",
      "Developed facebook chat bot to send promotional message to customers starting a conversation on messenger through the website",
    ]
  },
  {
    "key":3,
    "title": "Google",
    "icon" : <FcGoogle />,
    "details" : [
      "Integrated Google Single Sign On to internal employee information system, replacing the need to use passwords",
      "Setup google analytics and google tag manager in website to measure page events",
    ]
  },
  {
    "key":4,
    "title": "Line",
    "icon" : <BsLine />,
    "details" : [
      "Intergrated Line Single Sign On to community management system for our customers"
    ]
  },
  {
    "key":5,
    "title": "Salesforce",
    "icon" : <FaSalesforce />,
    "details" : [
      "Developed and updated apex code to handle incoming leads and systematically assign sales users to them",
      "Updated the sales checkin system page in salesforce with lightening components",
      "Created flows to handle leads and systematically assign sales users to them",
      "Created flows to manage opportunities"
    ]
  },
  {
    "key":6,
    "title": "UiPath",
    "icon" : "",
    "details" : [
      "Automated the daily extraction of payment transactions from kasikorn bank",
      "Automated the contract preparation for digital signatures in HelloSign"
    ]
  },
  {
    "key":7,
    "title": "Amazon Web Services",
    "icon" : "",
    "details" : [
      "Created load balancer and security group to manage traffic to the company's EC2 instance",
      "Added third party SSL certificate to load balancer",
    ]
  },
  {
    "key":8,
    "title": "MongoDB",
    "icon" : "",
    "details" : [
      "Connected and extracted all data from MongoDB database in AWS using Stitch",
    ]
  },
  {
    "key":9,
    "title": "BigQuery",
    "icon" : "",
    "details" : [
      "Created reports using SQL and Google Data Studio, to showcase showcase salesforce and website analytics",
    ]
  },
];

const Work = () => {
  return <div className={styles.balls_container}>
    {work_data.map(entry => <Ball id={entry.key} icon={entry.icon} name={entry.title} details={entry.details} />)}
  </div>;
};

export default Work;
