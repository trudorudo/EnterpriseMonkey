import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    highscore: 0
  };

  increaseScore = (id) => {
    var clickedFriends = this.state.clickedFriends;
    // var newClickedFriend = 
    // console.log(id);
    clickedFriends.forEach((clickedFriend) => {
      // console.log(clickedFriend); 
      let isFriend = clickedFriend === id
      // console.log(isFriend); 
      isFriend ? this.lostFunction() : this.winFunction()
    })
    var pushNewFriendInArray = [...clickedFriends, id]
    this.setState({ clickedFriends: pushNewFriendInArray });
  }

  // shuffleCards = () => {
  //   this.setState({
  //     friends: this.state.friends.sort(function (a, b) {
  //       return 0.5 - Math.random();
  //     }),
  //   })
  // }

  winFunction = () => {
    console.log("win!");
    this.setState({
      friends: this.state.friends.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      score: this.state.score + 1
    });
    // shuffleCards();
  }

  lostFunction = () => {
    console.log("lost!");

    if (this.state.highscore < this.state.score) {
      this.setState({ highscore: this.state.score });
    }

    this.setState({ score: 0 });
    this.setState({ clickedFriends: [] })
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore} />
        {this.state.friends.map(friend => (

          <FriendCard
            increaseScore={this.increaseScore}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            name={friend.name}
          />

        ))}
      </Wrapper>
    );
  }
}

export default App;
