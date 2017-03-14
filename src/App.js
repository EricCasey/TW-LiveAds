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
          <div className="bottom">Visit Whistler Blackomb today!</div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
        <div id="m160600">
          <div className="live">LIVE</div>
          <div className="bottom"></div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
        <div id="m72890">
          <div className="live">LIVE</div>
          <div className="bottom"></div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
        <div id="m180150">
          <div className="live">LIVE</div>
          <div className="bottom"></div>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/WhistlerBlackcomb_Logo.svg/1280px-WhistlerBlackcomb_Logo.svg.png" className="logo"/>
        </div>
      </div>
    );
  }
}

export default App;
