import React from 'react';
import style from './style.module.css';
function index() {
  return (
    <div style={{ top:"0px",
      position: "sticky",
      zIndex:" 1000"}}>
      <div className={style.Header}>
        <div className={style.Headtitle}>Blogposter</div>
        <div className={style.navtitle}>
          <span>Home</span>
          <span>Blog</span>
          <span>About</span>
          <span>Contact</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default index;
