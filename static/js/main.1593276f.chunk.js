(this["webpackJsonpfind-my-movie"]=this["webpackJsonpfind-my-movie"]||[]).push([[0],{70:function(e,t,n){e.exports=n(83)},75:function(e,t,n){},76:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),l=(n(75),n(32)),s=n(33),i=n(41),u=n(40),m=(n(76),n(17)),p=n(39),f=n(55),v=(n(67),n(61)),y=n.n(v),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={overlayText:"couldn't find availability"},a}return Object(s.a)(n,[{key:"setOverlayContent",value:function(){console.log("changing");var e=this.props.movie.title;console.log(e);var t={async:!0,crossDomain:!0,url:"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+e+"&country=us",method:"GET",headers:{"x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com","x-rapidapi-key":"60a773e6fcmsh09ae1d3175b315ep1daeb3jsn3eeef5c871af"}},n="";y.a.ajax(t).done(function(e){console.log(e);var t=e.results;if(t.length>0){console.log(t[0].locations[0].display_name);for(var a=0;a<t[0].locations.length;a++)console.log(t[0].locations[a].display_name),n=n.concat(t[0].locations[a].display_name),a+1<t[0].locations.length&&(n=n.concat(", "));console.log(n),this.setState({overlayText:n})}}.bind(this))}},{key:"render",value:function(){return r.a.createElement("table",{key:this.props.movie.id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{alt:"poster",width:"120",src:this.props.movie.poster_src})),r.a.createElement("td",null,r.a.createElement("div",{className:"movie-title",style:{textAlign:"left"}},r.a.createElement("b",{align:"left"},this.props.movie.title)),r.a.createElement("div",{className:"movie-overview",style:{textAlign:"left"}},r.a.createElement("p",{align:"left"},this.props.movie.overview)),r.a.createElement(f.a,{trigger:"click",placement:"right",backgroundColor:"black",overlay:r.a.createElement(p.a,{style:{backgroundColor:"black",color:"white",opacity:".8"},id:"popover-basic"},r.a.createElement(p.a.Title,{as:"h3"},"Available at"),r.a.createElement(p.a.Content,null,this.state.overlayText))},r.a.createElement(m.a,{variant:"success",style:{float:"left"},onClick:this.setOverlayContent.bind(this)},"Where to watch"))))))}}]),n}(r.a.Component),g=n(7),d=n(50),E=n(10),b=n(51),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"genreSelectHandler",value:function(e){console.log("event"),console.log(e);var t=e;console.log("term"),console.log(t),this.performSearch(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"ui centered py-2",fluid:!0},r.a.createElement(d.a,{id:"dropdown-menu-align-right",title:"Choose Genre"},r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"28",onClick:function(t){return e.props.func("28")}},"Action")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"12",onClick:function(t){return e.props.func("12")}},"Adventure")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"16",onClick:function(t){return e.props.func("16")}},"Animation")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"35",onClick:function(t){return e.props.func("35")}},"Comedy")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"80",onClick:function(t){return e.props.func("80")}},"Crime")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"99",onClick:function(t){return e.props.func("99")}},"Documentary")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"18",onClick:function(t){return e.props.func("18")}},"Drama")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"10751",onClick:function(t){return e.props.func("10751")}},"Family")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"14",onClick:function(t){return e.props.func("14")}},"Fantasy")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"36",onClick:function(t){return e.props.func("36")}},"History")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"27",onClick:function(t){return e.props.func("27")}},"Horror")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"10402",onClick:function(t){return e.props.func("10402")}},"Music")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"9648",onClick:function(t){return e.props.func("9648")}},"Mystery")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"10749",onClick:function(t){return e.props.func("10749")}},"Romance")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"878",onClick:function(t){return e.props.func("878")}},"Science Fiction")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"10770",onClick:function(t){return e.props.func("10770")}},"TV Movie")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"53",onClick:function(t){return e.props.func("53")}},"Thriller")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"10752",onClick:function(t){return e.props.func("10752")}},"War")),r.a.createElement(E.a,{className:"justify-content-center py-2"},r.a.createElement(g.a.Item,{as:"button",eventKey:"37",onClick:function(t){return e.props.func("37")}},"Western"))))}}]),n}(r.a.Component),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"changeQuery",value:function(e){this.setState({queryTerms:""});var t=e.target.value;this.setState({queryTerms:t}),console.log(t)}},{key:"performSearch",value:function(e){var t=this;console.log("searching for movies"),this.setState({rows:[]});for(var n=1;n<101;n++){var a="https://api.themoviedb.org/3/discover/movie?api_key=fa53fe2bb3cc3e01ec7cefe7e16aa1a2&language=en-US&sort_by=popularity.desc&page="+String(n)+"&with_genres="+e;y.a.ajax({url:a,success:function(e){var n=e.results,a=[];a=[],n.forEach((function(e){e.poster_src="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=r.a.createElement(h,{key:e.id,movie:e});a.push(t)}));var o=t.state.rows.concat(a);t.setState({rows:o})},error:function(e,t,a){console.error("failed fetch data"),n=1e3}})}}},{key:"searchChangeHandler",value:function(e){this.setState({reviews:" "});var t=[],n=[];n=this.state.rows;for(var a=0,r=0,o=[],c=0;c<n.length;c++){o[c]=" ",t[c]=[c,0],a+=(s=String(n[c].props.movie.title.toLowerCase()).split(" ")).length,r+=(i=String(n[c].props.movie.overview.toLowerCase()).split(" ")).length;String(n[c].props.movie.id)}a/=n.length,r/=n.length;var l=this.state.queryTerms.split(" ");for(c=0;c<n.length;c++){for(var s=String(n[c].props.movie.title.toLowerCase()).split(" "),i=String(n[c].props.movie.overview.toLowerCase()).split(" "),u=String(n[c].props.movie.release_date).split("-"),m=.75,p=0,f=0,v=0,y=0,h=0,g=0,d=0;d<l.length;d++){var E=0,b=0;f=0,y=0,h=0;for(var k=0;k<n.length;k++){for(var C=String(n[k].props.movie.title.toLowerCase()).split(" "),w=0;w<C.length;w++)C[w]=C[w].replace(/[,.:]/g,"");var j=String(n[k].props.movie.overview.toLowerCase()).split(" ");for(w=0;w<j.length;w++)j[w]=j[w].replace(/[,.:]/g,"");C.includes(l[d])&&(E+=1),j.includes(l[d])&&(b+=1)}for(var N=0;N<s.length;N++)l[d]==s[N].replace(/[,.:]/g,"")&&(f+=1);p+=Math.log((n.length-E+.5)/(E+.5))*(2.2*f/(f+1.2*(.25+m*(s.length/a))));for(N=0;N<i.length;N++)l[d]==i[N].replace(/[,.:]/g,"")&&(y+=1);v+=Math.log((n.length-b+.5)/(b+.5))*(2.2*y/(y+1.2*(.25+m*(i.length/r)))),u.includes(l[d])&&(h+=1),g+=h}console.log("scores"),console.log(p),console.log(v),console.log(g),t[c][1]=1*p+.3*v+1*g}t.sort((function(e,t){return t[1]-e[1]})),console.log(t);var S=[];for(c=0;c<t.length;c++)S[c]=n[t[c][0]];this.setState({rows:S})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("table",{className:"titleBar"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},r.a.createElement("h1",null,"Find My Movie"))))),r.a.createElement(k,{className:"categoryDrop",func:this.performSearch.bind(this)}),r.a.createElement("input",{style:{fontSize:20,display:"block",width:"99%",paddingTop:8,paddingBottom:8,paddingLeft:16},onChange:this.changeQuery.bind(this),placeholder:"Enter title, release year, keywords etc."}),r.a.createElement(m.a,{as:"button",eventKey:"100",onClick:this.searchChangeHandler.bind(this)},"Search"),this.state.rows)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.1593276f.chunk.js.map