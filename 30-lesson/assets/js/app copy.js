const el = React.createElement; //in order to avoid using React.createElement everytime, we assign it to variable

// COMPONENT
class App extends React.Component {
  constructor(props){
    super(props); // call contsr of parent (super) class
    this.state = {counter: 0}
  }

  clickHandler = () => { //create own method in order to trasfer into attributes obj to render method (for big func and met), add Handler ending. Make arrow func - this shows context of execuition of Class, not this function
    // alert('Hello React!');
    // this.state.counter++;
    const newCounter = this.state.counter + 1;
    this.setState({counter: newCounter}) //to set new value and rerender need to use special setState method
    console.log(this.state.counter);  //we receive App
  }

  render() { //to see result of component call, necessary to return result
    // return el(
    //   'button', 
    //   {
    //     // onClick: () => {alert('Hello React!')}, 
    //     onClick: this.clickHandler, //this is iportant, witout ()
    //     className: 'btn btn-info'
    //   }, 
    //   'Click me'
    // )
    // return el('div', null, [
    //   el(
    //     'button', 
    //     {
    //       // onClick: () => {alert('Hello React!')}, 
    //       onClick: this.clickHandler, //this is iportant, witout ()
    //       className: 'btn btn-info',
    //       key: 'btn',
    //     }, 
    //     'Click me'
    //   ),
    //   // el('span', {key: 'span'}, this.state.counter) // to output value of counter. Instead of this we make separate component
    //   el(NiceNumber, {value: this.state.counter, key: 'span'}) //all these properties if obj are availbale now in porps of comp NiceNumber
    // ])
    return(
      <div className="container">
        <button className="btn btn-info" onClick={this.clickHandler}>Click me</button>
        <NiceNumber value={this.state.counter}/>
      </div>
    )
  }
}

class NiceNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  style = {
    fontWeight: 'bold',
    paddingLeft: '10px',
    color: 'blue'
  } //property in this class/cpmponent

  render(){
    // return el('span', {style: this.style}, this.props.value) //instead of this.state.counter, because it comes to props
    return (
      <span style={this.style}>{this.props.value}</span>
    )
  }
}
// #COMPONENT
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app); // to create react DOM, root el, in which will render the app
root.render(<App/>) //call render method and transfer there class App

