import React, {Component} from 'react';

import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

import DropdownSelect from './components/DropdownSelect';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
/*
  componentDidMount(){
    // For initial data
    this.performSearch("");
  }*/
  
  changeQuery(event){
    this.setState({queryTerms: ""})
    var searchTerm = event.target.value
    this.setState({queryTerms: searchTerm})
    console.log(searchTerm)
  }

  performSearch(searchTerm){
    console.log("searching for movies")  
    this.setState({rows: []})

    for(var i=1; i<101; i++){

    //console.log(searchTerm)
    const urlString = "https://api.themoviedb.org/3/discover/movie?api_key=fa53fe2bb3cc3e01ec7cefe7e16aa1a2&language=en-US&sort_by=popularity.desc&page=" + String(i) + "&with_genres=" + searchTerm
    //console.log(urlString)
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        //console.log("data fetch success")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows = []
        movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          //console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        var currMovies = this.state.rows
        var concatMovies = currMovies.concat(movieRows)

        this.setState({rows: concatMovies})
       
      },
      error: (xhr, status, err) => {
        console.error("failed fetch data")
        i = 1000
      }
     })

    }

  }

  searchChangeHandler(event){
    this.setState({reviews: " "})

    // reorder based on keywords
    var rankScores = []
    var tempMovieRows = []
    //this may just be a copy by reference NEED VALUE
    tempMovieRows = this.state.rows
    //index of movie in array with cooresponding score initialized to 0
    //get avg length of title, overview, review
    var avgTitle = 0
    var avgOverview = 0
    
    var avgReview = 0
    var movieReviews = []
    for(var i=0; i<tempMovieRows.length; i++){
      movieReviews[i] = " "

      rankScores[i] = [i, 0]

      var tempTitle = String(tempMovieRows[i].props.movie.title.toLowerCase())
      var splitTitle = tempTitle.split(" ");
      avgTitle = avgTitle + splitTitle.length

      var tempOverview = String(tempMovieRows[i].props.movie.overview.toLowerCase())
      var splitOverview = tempOverview.split(" ");
      avgOverview = avgOverview + splitOverview.length

      //getting movie reviews
      const urlString = "https://api.themoviedb.org/3/movie/" + String(tempMovieRows[i].props.movie.id) + "/reviews?api_key=fa53fe2bb3cc3e01ec7cefe7e16aa1a2&language=en-US&page=1"
      
      /*$.ajax({
        url: urlString,
        success: (searchResults) => {
          const results = searchResults.results
          //console.log(results)
          /*
          for(var j=0; j<results.length; j++){
            var tempReview = String(results[j].content.toLowerCase())
            var splitReview = tempReview.split(" ");
            //console.log(tempReview)
            var allReviews = movieReviews[i]
            movieReviews[i] = allReviews + " " + tempReview
            console.log(movieReviews[i])
            console.log(movieReviews)
            avgReview = avgReview + splitReview.length
          }
          */
         /*
          if(results.length>0){
          var tempReview = String(results[0].content.toLowerCase())
          var splitReview = tempReview.split(" ")
          movieReviews[i] = tempReview
          avgReview = avgReview + splitReview.length
          }
          */ /*
          var tempReview1 = ""
          //var tempReview = ""
          results.forEach((review) => {
            console.log(review.content)
            const tempReview = String(review.content.toLowerCase())
            tempReview1 = tempReview1 + " " + tempReview
            //var splitReview = tempReview.split(" ")
            //movieReviews[i] = movieReviews[i] + " " + tempReview
            //avgReview = avgReview + splitReview.length
          })
          //console.log(tempReview1)
          this.setState({reviews: tempReview1})
        },
        error: (xhr, status, err) => {
          console.error("failed fetch data")
        }
       })

       movieReviews[i] = this.state.reviews
       console.log("state check")
       console.log(this.state.reviews)
       */
       //date???????
    }
    //console.log("reviews")
    //console.log(movieReviews)

    avgTitle = avgTitle / tempMovieRows.length
    avgOverview = avgOverview / tempMovieRows.length
    //avgReview = avgReview / tempMovieRows.length

    //var searchTerm = event.target.value
    var searchTerm = this.state.queryTerms
    var splitTerms = searchTerm.split(" ");
    //may need to add things like word form standardization
    //or removing multiple of same word in query
    /*
    for(var i=0; i<splitTerms.length; i++){
      console.log(splitTerms[i].toLowerCase())
    }
    */

    //console.log(tempMovieRows.length)
    //console.log(tempMovieRows)
    for(var i=0; i<tempMovieRows.length; i++){
      //rankScores[i] = [i, 0]
      var tempTitle = String(tempMovieRows[i].props.movie.title.toLowerCase())
      var splitTitle = tempTitle.split(" ");

      var tempOverview = String(tempMovieRows[i].props.movie.overview.toLowerCase())
      var splitOverview = tempOverview.split(" ");


      //var tempReview = String(movieReviews[i])
      //var splitReview = tempReview.split(" ");

      var tempDate = String(tempMovieRows[i].props.movie.release_date)
      var splitDate = tempDate.split("-");

      //console.log(splitDate)
      //console.log(tempTitle)

      var k1 = 1.2
      var b = 0.75

      var titleBM25 = 0.0
      var titleFreq = 0.0

      var overviewBM25 = 0.0
      var overviewFreq = 0.0

      //var reviewsFreq = 0.0
      //var reviewsBM25 = 0.0

      var dateFreq = 0.0
      var dateBM25 = 0.0
      for(var j=0; j<splitTerms.length; j++){
        //IDF
        var IDFtitle = 0.0
        var IDFover = 0.0

        titleFreq = 0.0
        overviewFreq = 0.0
        dateFreq = 0.0

        for(var x=0; x<tempMovieRows.length; x++){
          var tempTitle2 = String(tempMovieRows[x].props.movie.title.toLowerCase())
          var splitTitle2 = tempTitle2.split(" ");
          for(var p=0; p<splitTitle2.length; p++){
            splitTitle2[p] = splitTitle2[p].replace(/[,.:]/g, '')
          }

          var tempOverview2 = String(tempMovieRows[x].props.movie.overview.toLowerCase())
          var splitOverview2 = tempOverview2.split(" ");
          for(var p=0; p<splitOverview2.length; p++){
            splitOverview2[p] = splitOverview2[p].replace(/[,.:]/g, '')
          }

          if(splitTitle2.includes(splitTerms[j])){
            IDFtitle = IDFtitle + 1
          }
          if(splitOverview2.includes(splitTerms[j])){
            IDFover = IDFover + 1
          }
        }


        for(var k=0; k<splitTitle.length; k++){
          if(splitTerms[j] == splitTitle[k].replace(/[,.:]/g, '')){
            titleFreq = titleFreq + 1
          }
        }
        //need to include IDF part
        //titleBM25 = titleBM25 + ((titleFreq * (k1 + 1)) / (titleFreq + k1 * (1 - b + b * (splitTitle.length / avgTitle))))
        titleBM25 = titleBM25 + Math.log((tempMovieRows.length - IDFtitle + 0.5) / (IDFtitle + 0.5)) * ((titleFreq * (k1 + 1)) / (titleFreq + k1 * (1 - b + b * (splitTitle.length / avgTitle))))
        //console.log("title")
        //console.log(titleBM25)

        for(var k=0; k<splitOverview.length; k++){
          if(splitTerms[j] == splitOverview[k].replace(/[,.:]/g, '')){
            overviewFreq = overviewFreq + 1
          }
        }
        //need to include IDF part
        //overviewBM25 = overviewBM25 + ((overviewFreq * (k1 + 1)) / (overviewFreq + k1 * (1 - b + b * (splitOverview.length / avgOverview))))
        overviewBM25 = overviewBM25 + Math.log((tempMovieRows.length - IDFover + 0.5) / (IDFover + 0.5)) * ((overviewFreq * (k1 + 1)) / (overviewFreq + k1 * (1 - b + b * (splitOverview.length / avgOverview))))
        //console.log("overview")
        //console.log(overviewBM25)

        if(splitDate.includes(splitTerms[j])){
          dateFreq = dateFreq + 1
        }
        dateBM25 = dateBM25 + dateFreq

        /*
        for(var k=0; k<splitReview.length; k++){
            if(splitTerms[j] == splitReview[k].replace(/[,.:]/g, '')){
              reviewsFreq = reviewsFreq + 1
            }
        }
        //need to include IDF part
        reviewsBM25 = reviewsBM25 + ((reviewsFreq * (k1 + 1)) / (reviewsFreq + k1 * (1 - b + b * (splitReview.length / avgReview))))
        console.log(tempReview)
        console.log(reviewsBM25) */
      }

      //rankScores[i][1] = (titleBM25 * 1.0) + (overviewBM25 * 0.3) + (reviewsBM25 * 0.3)
      console.log("scores")
      console.log(titleBM25)
      console.log(overviewBM25)
      console.log(dateBM25)
      rankScores[i][1] = (titleBM25 * 1.0) + (overviewBM25 * 0.3) + (dateBM25 * 1.0)
      //console.log(titleFreq + (overviewFreq * 0.1))
      //console.log(rankScores[i])
    }

    rankScores.sort(function(a, b){return b[1] - a[1]});
    console.log(rankScores)

    var newMovieRows = []
    for(var i=0; i<rankScores.length; i++){
      newMovieRows[i] = tempMovieRows[rankScores[i][0]]
    }

    this.setState({rows: newMovieRows})
  }

render(){
  return (
    <div className="App">
      <table className="titleBar">
        <tbody>
          <tr>
            <td align="center">
              <h1>Find My Movie</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <DropdownSelect className="categoryDrop" func={this.performSearch.bind(this)}/>
      
      <input style={{
        fontSize: 20,
        display: 'block',
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.changeQuery.bind(this)} placeholder="Enter title, release year, keywords etc."/>

      <Button as="button" eventKey="100" onClick={this.searchChangeHandler.bind(this)}>Search</Button>

      {this.state.rows}

    </div>
  );
}
}

export default App;
