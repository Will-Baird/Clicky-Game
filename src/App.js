import React from "react";
import character from "./characters.json";
import "./App.css";
import Card from "./components/Card/Card.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
class App extends React.Component {
    state = {
        guessed: [],
        score: 0,
        highScore: 0
    }
    checkValue = (event) => {
        event.preventDefault();
        let guess = event.target.dataset.value;
        let guessed = this.state.guessed
        for (let i = 0; i <= guessed.length; i++) {
            if (guess === guessed[i]) {
                console.log("Incorrect, Try Again?");
                console.log(this.state.highScore)
                if (this.state.score >= this.state.highScore) {
                    let x = this.state.score;
                    this.setState({ guessed: [],
                        score: 0,
                        highScore: x
                    });
                } else if (this.state.score < this.state.highScore) {
                    console.log("OTHER")
                    let newState = { guessed: [],
                        score: 0,
                        highScore: this.state.highScore
                    };
                    this.setState(newState)
                }
                return;
            } else {
                if (i === guessed.length && guessed.length <= 11) {
                    if (this.state.highScore >= this.state.score) {
                        this.setState({ guessed: this.state.guessed + guess,
                            score: this.state.score + 1,
                            highScore: this.state.highScore
                        });   
                    } else {
                        this.setState({ guessed: this.state.guessed + guess,
                            score: this.state.score + 1,
                            highScore: this.state.score + 1
                        }); 
                    }
                    return;
                }
            }
        }
    }
    random = () => {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        let cards = []; 
        const display = () => {
            for (let i = 0; i < array.length; i++) {
                cards.push(<Card name={character[array[i]].name} image={character[array[i]].image} value={character[array[i]].id} checkValue={this.checkValue} />)
            };
            return;
        };
        const getNumbers = () => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            display();
        };
        getNumbers();
        return cards;
    }
    render() {
        return (
            <div>
            <header><h1 className="title">Clicky Game</h1> <h2 className="score">Score: <span className="actual">{this.state.score}</span> - High Score: <span className="high">{this.state.highScore}</span></h2></header>
            <Wrapper>
                {this.random()}
            </Wrapper>
            </div>
        )
    };
}
export default App;