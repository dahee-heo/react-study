import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Members from './components/contents/Members.js';
import Search from './components/contents/Search.js';


function App() {
  return (
    <BrowserRouter>
      {/* <header>
        <h1>React study</h1>
      </header> */}
      <Header></Header>
      <hr />
      <div className="container">
        {/* <nav className="nav">
          <ul>
            <li><h2>Members</h2></li>
            <li><h2>Search</h2></li>
          </ul>
        </nav> */}
        <Nav></Nav>
        <hr />
        <section className="contents">
          {/* <div>
            <h3>Members</h3>
            <p>Contents</p>
          </div> */}
          <Switch>
            <Route exact={true} path="/members" component={Members} />
            <Route exact={true} path="/search" component={props => <Search {...props} testProps={true} />} />
            <Redirect to={{pathname: "/members"}} />
          </Switch>
        </section>
        <hr />
      </div>
      {/* <footer>Copyright</footer> */}
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
