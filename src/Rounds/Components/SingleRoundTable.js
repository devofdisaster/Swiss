import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Match from '../../Shared/Domain/Match'
import Player from '../../Shared/Domain/Player'
import SingleRoundHeader from './SingleRoundHeader'
import SingleRoundBody from './SingleRoundBody'
import EditRound from '../ActionCreators/EditRound'
import AttemptFinishRound from '../ActionCreators/AttemptFinishRound'
import ChangeMatchResult from '../ActionCreators/ChangeMatchResult'

const tableStyle = { padding: 10, justifyContent: 'flex-start', flex: -1 }

class SingleRoundTable extends React.Component {
    render() {
        return (
            <View style={tableStyle}>
                <SingleRoundHeader
                    onEditClick={this.props.onEditClick}
                    onFinishClick={this.props.onFinishClick}
                    finished={this.props.finished}
                />
                <SingleRoundBody
                    matches={this.props.matches}
                    onResultChange={this.props.onResultChange}
                    finished={this.props.finished}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const roundIndex = parseInt(ownProps.navigation.state.key.replace('Round-', ''), 10) - 1

    return {
        matches: state.rounds[roundIndex].matches.map((id) => {
            const matchData = state.matches[id]
            const playerOne = new Player(state.players[matchData.player1])
            const playerTwo = new Player(state.players[matchData.player2])

            return {
                id: matchData.id,
                player1name: playerOne.renderName(),
                player2name: playerTwo.renderName(),
                result: matchData.result
            }
        }),
        finished: !!state.rounds[roundIndex].finished
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const roundIndex = parseInt(ownProps.navigation.state.key.replace('Round-', ''), 10) - 1

    return {
        onResultChange: (id, value) => dispatch(ChangeMatchResult(id, value)),
        onEditClick: () => dispatch(EditRound(roundIndex)),
        onFinishClick: () => dispatch(AttemptFinishRound(roundIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoundTable)
