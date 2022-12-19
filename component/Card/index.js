import React from 'react'
import style from './style.module.css'
import blog from '../../config/config'
import Image from 'next/image'
import Link from 'next/link'
function index() {
    // console.log(blog)
    return (
        <div>
            <div className={style.Maincontainer}>
                <div className={style.cardcontainer}>
                    {blog.map((e) => (
                        <Link  href={`/Card/${e.slug}`}>
                        <div key={e.key} className={style.card}>
                            <div className={style.imagecontainer}>
                                <img src={e.img} width={300} />
                            </div>
                            <div className={style.cardContain} >
                                <h4>{e.title}</h4>
                                <p>{e.description}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index;
