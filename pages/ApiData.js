import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../component/Header';
import style from '../component/Card/style.module.css'
function ApiData() {
  const [res, setRes] = useState()
  const [err, setErr] = useState(null)

  useEffect(() => {

    async function fetchData() {
      await axios.get('http://192.168.1.195:8007/registration/register')
        .then(res => setRes(res.data))
        .catch(err => setErr(err.code))
    }
    fetchData();
  }, [])

  return (
    <>
      <Header />
      <div style={{ color: "black" }}>
        {!err ?
          <>
            {res?.map((e) =>
              <div key={e.id} className={style.data}>
                <p>{e.name}</p>
                <p>{e.city}</p>
              </div>
            )}
          </>
          :
          <h4>{err}</h4>
        }
      </div>
    </>
  )
}

export default ApiData;

