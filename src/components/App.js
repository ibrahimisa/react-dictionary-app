import React from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './NavigationBar.js'
import Home from './Home.js'
import History from './History.js'
import Bookmarks from './Bookmarks.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {history:[], bookmarks:[]}

  addToHistory(word){
    let history = this.state.history.slice()
    history.push(word)
    this.setState({ history })
  }

  addToBookmarks(word){
    let bookmarks = this.state.bookmarks.slice();
    bookmarks.push(word);
    this.setState({ bookmarks });
  }

  render() {
    console.log(this.state)
    return (
      <Container className="pt-4 bg-light" style={{ minHeight: "100vh" }} fluid>
        <Container>
          <h1 className="text-center display-4">Dictionary App</h1>
          <Tab.Container defaultActiveKey="home">
            <Nav fill variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="history">History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bookmarks">Bookmarks</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="home">
                <Home
                  addToHistory={this.addToHistory.bind(this)}
                  addToBookmarks={this.addToBookmarks.bind(this)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="history">
                <History history={this.state.history} />
              </Tab.Pane>
              <Tab.Pane eventKey="bookmarks">
                <Bookmarks bookmarks={this.state.bookmarks} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </Container>
    );
  }
}

export default App;
