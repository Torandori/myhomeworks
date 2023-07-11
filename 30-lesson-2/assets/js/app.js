class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="page-wrapper">
        <Header>
          <Logo></Logo>
          <HeaderText/>
          <Navigation>
            <NavigationItem/>
          </Navigation>
        </Header>
        <main>
          <Banner/>
          <div className="container">
            <div className="wrapper">
              <Blog>
                <BlogItem/>
              </Blog>
              <News>
                <NewsItem/>
              </News>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="container">
          { this.props.children }
        </div>
      </header>
    )
  }
}

class Logo extends React.Component {
  render(){
    return(
      <div id="logo"></div>
    )
  }
}

class HeaderText extends React.Component {
  render(){
    return(
      <h1>Blog Name</h1>
    )
  }
}

class Navigation extends React.Component {
  render(){
    return(
      <nav className="main-menu">
          <ul>
            { this.props.children }
          </ul>
      </nav>
    )
  }
}

class NavigationItem extends React.Component {
  render(){
    return(
      <>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </>
    )
  }
}

class Banner extends React.Component {
  render() {
    return(
      <div className="banner">
        <h2>Full-width banner image</h2>
      </div>
    )
  }
}

class Blog extends React.Component {
  render() {
    return(
      <div className="blog">
        <h2>Blog</h2>
        <ul>
        { this.props.children }
        </ul>
      </div>
    )
  }
}

class BlogItem extends React.Component {
  render() {
    return(
      <>
        <li className="blogItem"></li>
        <li className="blogItem"></li>
        <li className="blogItem"></li>
        <li className="blogItem"></li>
      </>
    )
  }
}

class News extends React.Component {
  render() {
    return(
      <div className="news">
        <h2>News</h2>
        <ul>
        { this.props.children }
        </ul>
      </div>
    )
  }
}

class NewsItem extends React.Component {
  render() {
    return(
      <>
        <li className="newsItem"></li>
        <li className="newsItem"></li>
        <li className="newsItem"></li>
      </>
    )
  }
}


// Also possible to create classes in separate js files and export them to mai js with general class 
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);  // to create a root element for rendering React components.
root.render(<App/>); 