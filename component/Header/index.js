import { Button } from 'antd';
import React, { useState } from 'react';
import style from './style.module.css';
import Link from 'next/link';
function index() {
  const [dis, setDis] = useState(false);
  // const [dis2, setDis2] = useState(true);
  // const [dis3, setDis3] = useState(true);

  // function handleOnchange() {
  //   if (dis === false && dis2 === true && dis3 === true) {
  //     setDis(true)
  //     setDis2(false);
  //   }
  //   if (dis === true && dis2 === false && dis3 === true) {
  //     setDis2(true)
  //     setDis3(false);
  //   }
  //   if (dis === true && dis2 === true && dis3 === false) {

  //   }
  // }

  return (
    <div style={{
      top: "0px",
      position: "sticky",
      zIndex: " 1000"
    }}>
      <div className={style.Header}>
        <div className={style.Headtitle}>Blogposter</div>
        <div className={style.navtitle}>
          <Link href="#">
            <span>HOME</span>
          </Link>
          <Link href="#">
            <span>Contact</span>
          </Link>
          <Link href="/ApiData">
            <span>Data</span>
          </Link>
          <Link href="#">
            <span>BLOG</span>
          </Link>
          <Link href="#">
            <span>ABOUT</span>
          </Link>
        </div>
        <Button
          disabled={dis}
          className={style.btnstyle}
          style={{ background: "#10b981", color: "#fff", fontWeight: "600" }}
        // onClick={handleOnchange}
        >
          JOIN
        </Button>

      </div>
    </div>
  )
}

export default index;
