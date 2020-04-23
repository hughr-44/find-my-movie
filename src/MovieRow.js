import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Row from 'react-bootstrap/Row';
import {Divider} from 'semantic-ui-react'

import Dialog from 'react-bootstrap-dialog'

import $ from 'jquery';

class MovieRow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      overlayText: "couldn't find availability"
    }
  }

    setOverlayContent(){
      console.log("changing")

      var movietitle = this.props.movie.title

      console.log(movietitle)

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movietitle + "&country=us",
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": "60a773e6fcmsh09ae1d3175b315ep1daeb3jsn3eeef5c871af"
        }
      }

      var newOverlayText = ""
      $.ajax(settings).done(function (response) {
        console.log(response)
        const results = response.results

        if(results.length > 0){

        console.log(results[0].locations[0].display_name)

        for(var i=0; i<results[0].locations.length; i++){
          console.log(results[0].locations[i].display_name);
          newOverlayText = newOverlayText.concat(results[0].locations[i].display_name)

          if(i+1 < results[0].locations.length){
            newOverlayText = newOverlayText.concat(", ")
          }

        }

        console.log(newOverlayText)
        this.setState({overlayText: newOverlayText})

        }
      }.bind(this))
      
    }

    render(){
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <div className="movie-title" style={{textAlign:"left"}}>
              <b align="left">{this.props.movie.title}</b>
              </div>
              <div className="movie-overview" style={{textAlign:"left"}}>
              <p align="left">{this.props.movie.overview}</p>
              </div>
              <OverlayTrigger trigger="click" placement="right" backgroundColor="black" overlay={(
                <Popover style={{ backgroundColor: "black", color: "white", opacity: ".8"}} id="popover-basic">
                <Popover.Title as="h3">Available at</Popover.Title>
                <Popover.Content>
                  {this.state.overlayText}
                </Popover.Content>
              </Popover>
              )}>
                <Button variant="success" style={{float: "left"}} onClick={this.setOverlayContent.bind(this)}>Where to watch</Button>
              </OverlayTrigger>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow