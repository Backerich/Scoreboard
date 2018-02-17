import React from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {players: this.props.initialPlayers};
  }

  onScoreChange(index, delta) {
    let {players} = this.state;
    players[index].score += delta;
    this.setState({players});
  }

  onPlayerAdd(name) {
    let {players} = this.state;
    players.push({
      name: name,
      score: 0,
      id: this.state.players[this.state.players.length - 1].id + 1,
    });
    this.setState({players});
  }

  onRemove(index) {
    let {players} = this.state;
    players.splice(index, 1);
    this.setState({players});
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>
        <div className="players">
          {this.state.players.map(function(player, index) {
            return (
               <Player
                onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                onRemove={function() {this.onRemove(index)}.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd.bind(this)} />
      </div>
    );
  }
}

Application.propTypes = {
  title: PropTypes.string.isRequired,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

Application.defaultProps = {
  title: "Scoreboard",
}

export default Application;
