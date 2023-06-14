import React from "react";

import BabySVG from "../../components/Baby/Baby";
import Form from "../../components/Form/Form";

import './Home.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className="header">
                <h1>Baby on the Way?</h1>
            </div>
            <div className="parent">
                <div className="inner">
                    <BabySVG />
                </div>
                <div className="inner">
                    <Form />
                </div>
                <div className="inner">
                    <BabySVG />
                </div>
            </div>
            <div>
                <div className="low-banner">

                    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=babynames08a-20&linkCode=ur2&linkId=96b7b4234629a3d85f579e98aefcc902&camp=1789&creative=9325&node=165796011">Hottest Baby Products</a>
                
                    <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=babynames08a-20&linkCode=ur2&linkId=fc8676b399bbf88e1bc3c489a6597a17&camp=1789&creative=9325&index=books&keywords=How to raise a baby">Parenting Guides</a>
                                    
                    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=babynames08a-20&linkCode=ur2&linkId=a63b707eeafd5a6bf3de5d3e9727cd09&camp=1789&creative=9325&node=4">Children's Books</a>
                
                    <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=babynames08a-20&linkCode=ur2&linkId=c17d74ce11ee17483de7707927c1519d&camp=1789&creative=9325&node=196601011">Baby Toys</a>

                </div>
            </div>
        </React.Fragment>
    )   
}

export default Home;