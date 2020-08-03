import React, { Component } from 'react';

export const ScoreContext = React.createContext(0)
export const ScoreProvider = ScoreContext.Provider
export const ScoreConsumer = ScoreContext.Consumer

export class CounterState extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }


addCounter = () => (
  this.setState(prevState => ({count: prevState.count + 1}))
  );

clearCounter = () => {
 this.setState(prevState => ({count: 0}))
};

componentDidMount() {
  this.clearCounter()
}

componentWillUnmount() {
  this.clearCounter()
}

  render() {
    return (
        <ScoreProvider value={{count:this.state.count, addCounter: this.addCounter, clearCounter: this.clearCounter}}>
          {this.props.children}
        </ScoreProvider>
    )
  };
};
