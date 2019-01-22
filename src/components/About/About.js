import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom"
import History from "../History/History"
import Contact from "../Contact/Contact"
import { Link } from "react-router-dom"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link to ="/about" className= "subnav_links"> <h3>About</h3> </Link>
        <Link to ="/about/history" className= "subnav_links"><h3>History</h3> </Link>
        <Link to ="/about/contact" className= "subnav_links"><h3>Contact</h3> </Link>
        </div>

        <div className='box'>
        <Switch>
          <Route path= "/about/history" component= {History}/>
          <Route path= "/about/contact" component= {Contact}/>
          <Route path= "/about" render={() => (
            <div>
              <h1>About Us</h1>
            <p>The FitnessGram™ Pacer Test is a multistage aerobic capacity test
               that progressively gets more difficult as it continues. The 20 meter 
               pacer test will begin in 30 seconds. Line up at the start. 
               The running speed starts slowly, but gets faster each minute after
                you hear this signal. *Beep*. A single lap should be completed each
                 time you hear this sound. *Ding.* Remember to run in a straight line,
                  and run as long as possible. The second time you fail to complete a
                   lap before the sound, your test is over. The test will begin on
                    the word start. On your mark, get ready, start. </p>
                    <p>ᵘʷᵘ oh fwick ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ fwick sowwy gwuys ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ sowwyy im dwopping ᵘʷᵘ my uwus all over the ᵘʷᵘ pwace ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ sowwy -~- nyah</p>
                    <p>these copypastas gave me cancer, be sure to smash like and subscribe for more awful content like this from alec</p>
            </div>
          )}/>
        </Switch>
        </div>
      </div>
    )
  }
}