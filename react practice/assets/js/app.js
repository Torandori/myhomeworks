import { API_KEY, TOKEN } from "./assets/js/env.js";

const API_URL = 'https://api.themoviedb.org/3/' // point of entrence to API
const isDev = true;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json', //specifies the format of response
    Authorization: 'Bearer ' + TOKEN //check token for access
  }
};

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      searchList: []
    };
  }

  searchHandler = (search) => {
    const url = isDev ? 'mock/search.json' : `${API_URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response); //receive in concole response with results property, where all movies regarding search input were found
        this.setState({searchList: response.results}) // statement that updates the searchList property in the component's state. Response is an obj with property results, value of results are arr of movies, to assign them to searchList prop by using setState method of App class ()
      })
      .catch(err => console.error(err));
  }

  render() { 
    return(
      <div className="container">
        <Card>
          <SearchForm submit={this.searchHandler}/>
        </Card>

        <Card title="Search results">
          <MovieList movies={this.state.searchList}/>
        </Card>
      </div>
    )
  }
}

class SearchForm extends React.Component {
  constructor(props){ //proprs are used to pass data from parent components to child components.
    super(props); // invoke the constructor of the parent class, which is usually React.Component, to properly initialize the component.
    this.state = {search: ''};
  }
  submitHandler = (event)=>{
    event.preventDefault();
    if(this.state.search === ''){
      toast.warning('Enter search value');
      return false;
    }
    // console.log(this.props.submit);
    this.props.submit(); // it refers to property submit from <SearchForm submit={this.searchHandler}/>
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <div className="row">
          <div className="col-8">
            <input type="search" className="form-control" onChange={(event)=>{
              this.setState({search: event.target.value})
            }}/>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-info">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const header = this.props.title ? (
      <div className="card-header">
        <h4>{ this.props.title }</h4>
      </div>
    ) : null;
    return (
      <div className="card mb-5">
        { header }
        <div className="card-body">
          { this.props.children }
        </div>
      </div>
    )

  }
}

class MovieList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="row">
        {this.props.movies.map((item)=> <MovieItem movie={item} key={item.id}/>)}
      </div>
    )
  }
}

class MovieItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const item = this.props.movie;
    return(
      <div className="col-3">
        <div className="poster-wrap">
          <img src={'https://image.tmdb.org/t/p/w342'+ item.poster_path} alt={item.title} />
        </div>
        <h5>{item.title}</h5>
        <p>{item.release_date}</p>
      </div>
    )
  }
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);  // to create a root element for rendering React components.
root.render(<App/>); 