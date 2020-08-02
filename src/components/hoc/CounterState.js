import React, { Component } from 'react';

export const ScoreContext = React.createContext()
export const ScoreProvider = ScoreContext.Provider
export const ScoreConsumer = ScoreContext.Consumer

export class CounterState extends Component {
state = {
  count: 0
}

addCounter = () => {
  return this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
        <ScoreProvider value={{count:this.state.count, addCounter: this.addCounter}}>
          {this.props.children}
        </ScoreProvider>
    )
  };
};
