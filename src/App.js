import React, { Component } from 'react';
import ScoreButton from './ScoreButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: "1e3f4gs83jsh",
        timeStamp: 94894893739739,
        title: "What is this shit?",
        body: "Was trying to troubleshoot render function and found this error.",
        author: "markphd",
        category: "frontend",
        voteScore: 16,
        deleted: false
      },
      {
        id: "2d9f9w9f0w9d",
        timeStamp: 948942393739739,
        title: "What is this poop?",
        body: "React & Redux shit",
        author: "markphd",
        category: "frontend",
        voteScore: 10,
        deleted: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.posts.map( (post) => {
            return (
              <div>
                <li> {post.title} </li>
                <p> {post.author} </p>
                <ScoreButton text={"Test"} action="up" score={post.voteScore} />
                <ScoreButton text={"Test"} action="down" score={post.voteScore} />
              </div>
            )

          })}
        </ul>
        <ScoreButton/>
      </div>
    );
  }
}

export default App;
