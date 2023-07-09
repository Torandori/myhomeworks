const API_KEY = '883ae3f7b50324be2efd9927d367b29f';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODNhZTNmN2I1MDMyNGJlMmVmZDk5MjdkMzY3YjI5ZiIsInN1YiI6IjY0YWFmYzk0ZmE3OGNkMDExY2ZhYjhhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4j0HTqL51jaIob2cUFXVuGoe1mlsyY7M4nZXHvZlLzs';
const API_URL = 'https://api.themoviedb.org/3/' // point of entrence to API
const isDev = true;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + TOKEN
  }
};


class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      searchList: [],
      search: ''
    };
  }

  searchHandler = () => {
    if(this.state.search === ''){
      toast.warning('Enter search value');
      return false;
    }
    const url = isDev ? 'mock/search.json' : `${API_URL}search/movie?query=${this.state.search}&include_adult=false&language=en-US&page=1`;
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({searchList: response.results})
      })
      .catch(err => console.error(err));
  }

  render() { 
    const list = this.state.searchList.map((item)=>{
      return(
        <div className="col-3" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.release_date}</p>
        </div>
      )
    })

    return(
      <div className="container">
        <div className="card mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <input type="search" className="form-control" onChange={(event)=>{
                  this.setState({search: event.target.value})
                }}/>
              </div>
              <div className="col-4">
                <button className="btn btn-info" onClick={this.searchHandler}>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              {list}
              {/* {this.state.searchList.map(item => {
                return (<MovieCard data={item} />)
              })} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const app = document.getElementById('app');
const root = ReactDOM.createRoot(app); 
root.render(<App/>); 