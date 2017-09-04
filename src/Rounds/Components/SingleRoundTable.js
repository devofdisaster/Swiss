import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Match from '../../Shared/Domain/Match'
import Player from '../../Shared/Domain/Player'
import SingleRoundHeader from './SingleRoundHeader'
import SingleRoundBody from './SingleRoundBody'

const tableStyle = { padding: 10, justifyContent: 'flex-start', flex: -1 }

class SingleRoundTable extends React.Component {
    render() {
        return (
            <View style={tableStyle}>
                <SingleRoundHeader
                />
                <SingleRoundBody
                    matches={this.props.matches}
                    onResultChange={this.props.onResultChange}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const roundIndex = parseInt(ownProps.navigation.state.key, 10) - 1

    return {
        matches: state.rounds[roundIndex].matches.map((id) => {
            const matchData = state.matches[id]
            const playerOne = new Player(state.players[matchData.player1])
            const playerTwo = new Player(state.players[matchData.player2])
            const match = new Match(matchData.id, playerOne, playerTwo, matchData.round)

            return {
                id: match.getId(),
                player1name: playerOne.renderName(),
                player2name: playerTwo.renderName(),
                selectedResult: match.getResultKey()
            }
        })
    }
}

const mapDispatchToProps = (dispatch) => ({
    onResultChange: (id, value) => {}
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoundTable)
