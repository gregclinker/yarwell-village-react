import React from 'react';
import './App.css';
import Band from './Band.js';
import Business from './Business.js';
import Church from './Church.js';
import Council from './Council.js';
import History from './History.js';
import Home from './Home.js';
import Local from './Local.js';
import Pub from './Pub.js';
import Schools from './Schools.js';
import Villagehall from './Villagehall.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const menuItems = ['history', 'village hall', 'businesses', 'services', 'pub', 'church', 'schools', 'parish council', 'band'];
const carouselImages = ['/images/homepage-banners/20161229_094550.jpg',
    '/images/homepage-banners/banner-01.jpg',
    '/images/homepage-banners/banner-02.jpg',
    '/images/homepage-banners/banner-03.jpg',
    '/images/homepage-banners/banner-04.jpg',
    '/images/homepage-banners/banner-05.jpg',
    '/images/homepage-banners/banner-06.jpg',
    '/images/homepage-banners/banner-07.jpg',
    '/images/homepage-banners/banner-08.jpg',
    '/images/homepage-banners/banner-09.jpg',
    '/images/homepage-banners/banner-10.jpg',
    '/images/homepage-banners/banner-11.jpg',
    '/images/homepage-banners/banner-12.jpg',
    '/images/homepage-banners/banner-13.jpg',
    '/images/homepage-banners/banner-14.jpg',
    '/images/homepage-banners/banner-15.jpg',
    '/images/homepage-banners/banner-16.jpg',
    '/images/homepage-banners/banner-17.jpg',
    '/images/homepage-banners/banner-18.jpg',
    '/images/homepage-banners/banner-19.jpg',
    '/images/homepage-banners/banner-1.jpg',
    '/images/homepage-banners/banner-20.jpg',
    '/images/homepage-banners/banner-21.jpg',
    '/images/homepage-banners/banner-22.jpg',
    '/images/homepage-banners/banner-23.jpg',
    '/images/homepage-banners/banner-2.jpg',
    '/images/homepage-banners/banner-3.jpg'];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
        this.home = this.home.bind(this);
        this.showPage = this.showPage.bind(this);
        this.pickMenu = this.pickMenu.bind(this);
        this.state = {
            showMenu: false,
            pageToDisplay: 'home'
        }
    }

    menuToggle() {
        this.setState({showMenu: !this.state.showMenu});
    }

    home(e) {
        this.showPage(e, 'home');
    }

    pickMenu(e, page) {
        this.showPage(e, page);
        this.menuToggle();
    }

    showPage(e, page) {
        e.preventDefault();
        this.setState({pageToDisplay: page});
    }

    render() {
        return (
            <div className="App">
                <body className="home">
                <header>
                    <div className="row">
                        <div class={this.state.showMenu ? "two columns menuColumn active" : "two columns menuColumn"}>
                            <div onClick={() => this.menuToggle()} className="menuToggle">
                                <div>
                                    <span></span><span></span><span></span>
                                </div>
                                <a href="#" onClick={() => this.menuToggle()}>{this.state.showMenu ? "Close" : "Menu"}</a>
                            </div>
                            <nav class="menu">
                                <ul>{menuItems.map(name => (<li><a href="#" onClick={(e) => this.pickMenu(e, name)}>{name}</a></li>))}                                </ul>
                            </nav>
                        </div>
                        <div class="one columns facebookColumn">
                            <a target="_blank" href="https://www.facebook.com/pages/Yarwell-Village/1479648902331414">
                                <img src="/images/facebook.png" height="42" width="42"/>
                            </a>
                        </div>
                        <div class="six columns logoColumn">
                            <div class="headerLogo">
                                <a href="index.html"></a>
                            </div>
                        </div>
                        <div class="two columns directionsColumn">
                            <a href="https://www.google.com/maps/dir/Current+Location/52.5646884,-0.424955">Get Directions</a>
                        </div>
                    </div>
                </header>
                <main>
                    <section class="banner">
                        {(() => {
                                if (this.state.pageToDisplay === 'home') {
                                    return (<div class="slideshow">
                                        <Carousel showArrows={false} autoPlay={true} showThumbs={false}>
                                            {carouselImages.map(name => (<div><img src={name} height="476"/> {name}</div>))}
                                        </Carousel>
                                    </div>)
                                }
                            }
                        )()}
                        <div class="strip"></div>
                    </section>
                    <section class="content">
                        {(() => {
                                if (this.state.pageToDisplay !== 'home') {
                                    return (<div class="row breadcrumbs">
                                            <div class="twelve columns">
                                                <a href="#" onClick={(e) => this.home(e)}>Home</a>
                                                <span>/</span> {this.state.pageToDisplay}
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )()}
                        <div>{(() => {
                            if (this.state.pageToDisplay === 'history') {
                                return (
                                    <History/>
                                )
                            } else if (this.state.pageToDisplay === 'village hall') {
                                return (
                                    <Villagehall/>
                                )
                            } else if (this.state.pageToDisplay === 'businesses') {
                                return (
                                    <Business/>
                                )
                            } else if (this.state.pageToDisplay === 'services') {
                                return (
                                    <Local/>
                                )
                            } else if (this.state.pageToDisplay === 'pub') {
                                return (
                                    <Pub/>
                                )
                            } else if (this.state.pageToDisplay === 'church') {
                                return (
                                    <Church/>
                                )
                            } else if (this.state.pageToDisplay === 'schools') {
                                return (
                                    <Schools/>
                                )
                            } else if (this.state.pageToDisplay === 'parish council') {
                                return (
                                    <Council/>
                                )
                            } else if (this.state.pageToDisplay === 'band') {
                                return (
                                    <Band/>
                                )
                            } else {
                                return (
                                    <Home/>
                                )
                            }
                        })()}</div>
                    </section>
                </main>

                <footer>
                    <div class="row">
                        <div class="eight columns menuColumn">
                            <nav class="menu">
                                <ul>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'history')}>History</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'village hall')}>Village Hall</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'businesses')}>Businesses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'services')}>Services</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'pub')}>Pub</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'church')}>Church</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'schools')}>Schools</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'parish council')}>Parish Council</a></li>
                                    <li><a href="#" onClick={(e) => this.showPage(e, 'band')}>Band</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="four columns contactColumn">
                            <img src="/images/logo-footer.png"/>
                            <div class="contactLinks">
                                <a class="email" target="_top" href="mailto:yarwellpc@btinternet.com">Parish Council</a>
                                <a class="email" target="_top" href="mailto:yarwellnews@gmail.com">Newsletter</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="twelve columns termsColumn">
                            <a class="email" target="_top" href="mailto:webmaster@yarwell.com">get involved in the website</a>
                        </div>
                    </div>
                </footer>

                </body>
            </div>
        );
    }
}
