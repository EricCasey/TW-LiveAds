import React, { Component } from 'react';
import './App.css';
import forecast from 'forecast'

class App extends Component {

  Weather() {
    forecast.get([-33.8683, 151.2086], function(err, weather) {
      if(err) return console.dir(err);
      console.dir(weather);
    });
  }

  render() {
    return (
      <div className="App">

        <div id="m300250">
          <div className="live">LIVE</div>
          <div className="bottom1">Visit Whistler Blackomb Today!</div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
        <div id="m160600">
          <div className="live">LIVE</div>
          <div className="bottom2">

            <br/>
            All Lifts Open!
            <br/>
            17 Superpipes!
            <br/>
            99 Beers on the wall!
            <br/>
            10ft of powder!
            <br/>
            Billions of Snowflakes!
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
        <div id="m72890">
          <div className="live">LIVE</div>
          <div className="bottom3">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
            example
          </div>
        </div>
        <div id="m180150">
          <div className="live">LIVE</div>
          <div className="bottom4">
            example
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
      </div>
    );
  }
}

export default App;
