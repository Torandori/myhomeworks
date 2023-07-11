import { API_KEY, TOKEN } from "./assets/js/env.js";
import { formatDate } from "./assets/js/helpers.js"

const API_URL = 'https://api.themoviedb.org/3/' // point of entrence to API
const isDev = true;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json', //specifies the format of response
    Authorization: 'Bearer ' + TOKEN //check token for access
  }
};

function App(){

  const[searchList, setSearchList] = React.useState([]);

  const searchHandler = (search) => {
    const url = isDev ? 'mock/search.json' : `${API_URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        // console.log(response); //receive in concole response with results property, where all movies regarding search input were found
        setSearchList(response.results);
      })
      .catch(err => console.error(err));
  }
  return(
    <>
    <div className="container">
      <Card>
        <SearchForm submit={searchHandler}/>
      </Card>

      <Card title="Search results">
        <MovieList movies={searchList}/>
      </Card>
    </div>
    </>
  )
}


function SearchForm(props){
  const [search, setSearch] = React.useState('Bat');
  const submitHandler = (event)=>{
    event.preventDefault();
    if(search === ''){
      toast.warning('Enter search value');
      return false;
    }
    props.submit(search);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-8">
          <input type="search" className="form-control" value={search} onChange={(event)=>{
            setSearch(event.target.value)
          }}/>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success">Search</button>
        </div>
      </div>
    </form>
  )
}


function Card(props){
  const {title, children} = props;
  const header = props.title ? (
    <div className="card-header">
      <h4>{ title }</h4>
    </div>
  ) : null;
  return (
    <div className="card mb-5">
      { header }
      <div className="card-body">
        { children }
      </div>
    </div>
  )
}

function MovieList(props){
  return (
    <div className="row">
      {props.movies.map((item)=> <MovieItem movie={item} key={item.id}/>)}
    </div>
  )
}

function MovieItem(props){
  const item = props.movie;

  const detailHandler = () => {
    const url = isDev ? 'mock/movie.json' : `${API_URL}movie/${item.id}?language=en-US`
    fetch(url, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return(
    <div className="col-3">
      <div className="poster-wrap" onClick={detailHandler}>
        <img src={'https://image.tmdb.org/t/p/w342'+ item.poster_path} alt={item.title} />
      </div>
      <h5>{item.title}</h5>
      <p>{formatDate(item.release_date)}</p>
      <div>
        <button className="btn btn-info" onClick={detailHandler}>Details</button>
      </div>
    </div>
  )
}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);  // to create a root element for rendering React components.
root.render(<React.StrictMode><App/></React.StrictMode>); 