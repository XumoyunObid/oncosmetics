import React from 'react'
import './blogsPage.css'
// import img
import blogs_leftImg from '../../assets/blogsPage-img/blogs-left-img.svg'
import img1 from '../../assets/blogsPage-img/blogs-img1.svg'
import img2 from '../../assets/blogsPage-img/blogs-img2.svg'
import img3 from '../../assets/blogsPage-img/blogs-img3.svg'
import img4 from '../../assets/blogsPage-img/blogs-img4.svg'
import img5 from '../../assets/blogsPage-img/blogs-img5.svg'
import img6 from '../../assets/blogsPage-img/blogs-img6.svg'
import img7 from '../../assets/blogsPage-img/blogs-img7.svg'
import img8 from '../../assets/blogsPage-img/blogs-img8.svg'
// import img end

const EightCards = ({ img, text1, text2, title }) => {
    return (
        <div className='blogs-rightCard'>
            <div className="blogs-right-img"> <img src={img} alt="" /> </div>
            <div className="blogs-right-title">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <p className='blogs-right-end-title'>{title}</p>
        </div>
    )
}


export const BlogsPage = () => {
    try {
        return (
            <section className='blogsPage-container'>
                <ul className="blogs-category">
                    <li> <a href="">All Articles</a> </li>
                    <li> <a href="">Beauty</a> </li>
                    <li> <a href="">Fragrance</a> </li>
                    <li> <a href="">Hair</a> </li>
                    <li> <a href="">Makeup</a> </li>
                    <li> <a href="">Skin</a> </li>
                    <li> <a href="">Wellness</a> </li>
                </ul>
                <div className="blogs-div">
                    <div className="blogs-left-div">
                        <div className="bogs-left-img"> <img src={blogs_leftImg} alt="let image" /> </div>
                        <div className="blogs-left-title">
                            <p>Fragrance</p>
                            <p>May 2, 2021</p>
                        </div>
                        <h3 className='blogs-left-easy'>Easy affordable make <br /> up look</h3>
                        <p className='blogs-left-weall'>
                            We all have different hair typess and have to <br />
                            choose haircare products according to it. But still <br />
                            there are some tips that are applicable.
                        </p>
                        <button className='blogs-left-btn'>Read Article</button>
                    </div>
                    <div className="blogs-right-div">
                        <EightCards img={img1} text1={'Beauty'} text2={'May 2, 2021'} title={'Some beaty secrets from our editor in chief'} />
                        <EightCards img={img2} text1={'Fragrance'} text2={'May 2, 2021'} title={'Morning beauty routine: our main rules'} />
                        <EightCards img={img3} text1={'Beauty'} text2={'May 2, 2021'} title={'Organic ingredients: do they even work?'} />
                        <EightCards img={img1} text1={'Beauty'} text2={'May 2, 2021'} title={'Some beaty secrets from our editor in chief'} />
                        <EightCards img={img2} text1={'Fragrance'} text2={'May 2, 2021'} title={'Morning beauty routine: our main rules'} />
                        <EightCards img={img3} text1={'Beauty'} text2={'May 2, 2021'} title={'Organic ingredients: do they even work?'} />
                        <EightCards img={img2} text1={'Fragrance'} text2={'May 2, 2021'} title={'Morning beauty routine: our main rules'} />
                        <EightCards img={img3} text1={'Beauty'} text2={'May 2, 2021'} title={'Organic ingredients: do they even work?'} />
                    </div>
                </div>
            </section>
        )
    } catch (e) { console.log(e); }
}
