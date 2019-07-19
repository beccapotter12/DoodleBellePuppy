import React, { Component } from 'react';
import './Home.css';
// import NavBar from '../../components/ui/Navbar2/index';
import PuppyPhoto from '../../assets/images/UI Images/BannerImage3.png';
import Fleur from '../../assets/images/Current Litter/Fleur.jpeg';
import Footer from '../../components/ui/Footers/footer';
import SignUpBtn from '../../components/ui/Buttons/LearnMoreBtn.png';
import Carousel from '../../components/ui/Carousel';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* <NavBar /> */}
                    <img className="homeBanner" src={PuppyPhoto} alt="puppy" />
                </div>
                <div className="row contentDiv">
                    <div className="col-sm">
                        <p className="homeHeader">Mission Statement</p>
                        <p className="homeBody">Blah blah blah words, this is where we will put the mission statement.</p>
                        <p className="homeBody">More words will go here for the mission statement part of this part of the page</p>
                        <p className="homeBody">And more words here that dont really matter and people wont really read.</p>
                    </div>
                    <div className="col-sm">
                        <img className="homeImage" src={Carousel} alt="puppyPhotos" />
                    </div>
                </div>
                <div className="row contentDiv">
                    <div className="col-sm">
                        <img className="homeImage" src={Fleur} alt="puppyPhotos" />
                    </div>
                    <div className="col-sm">
                        <p className="homeHeader">Don't Miss Out!</p>
                        <p className="homeBody">Use the button below to sign up</p>
                        <p className="homeBody">so you dont miss a thing! Some</p>
                        <p className="homeBody">more words here I dont know yet.</p>
                        <img className="signUpBtn"src={SignUpBtn} alt="signUp"></img>
                    </div>
                </div>
                <div className="homeFooter">
                    <img src={Footer} alt="footer"/>
                </div>
            </div>
        )
    }
}

export default HomePage