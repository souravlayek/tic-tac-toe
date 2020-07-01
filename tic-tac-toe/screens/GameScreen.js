import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Avtar from "../components/Avtar";
import GameBoard from '../components/GameBoard';

const GameScreen = (props) => {
    const {players} = props.route.params;
    const [turn, setTurn] = useState(true)
    const [selectionType, setSelectionType] = useState({player1: "X", player2: "O"})
    const [score, setScore] = useState({player1: 0, player2: 0})

    const pressHandler =() => {
        setTurn(prev => !prev)
    }
    const winHandler = (want, player) =>{
        if(want === "rematch"){
            if(player === "draw"){
                setSelectionType({player1: selectionType.player2, player2: selectionType.player1})
                return
            }
            if (players.player1 === player){
                setScore({...score, player1: score.player1 +=5})
                setSelectionType({player1: selectionType.player2, player2: selectionType.player1})

            }else {
                setScore({...score, player2: score.player2 +=5})
                setSelectionType({player1: selectionType.player2, player2: selectionType.player1})

            }
        }
    }
    return (
        <View>
            <View style={styles.avtarContainer}>
                <Avtar name={players.player1} selection ={selectionType.player1 === "X" ? "ios-close" : "ios-radio-button-off"} />
                <Avtar name={players.player2} selection={selectionType.player2 === "X" ? "ios-close" : "ios-radio-button-off"} />
            </View>
            <View style={styles.scoreSection}>
                <Text style={styles.scoretitle}>Scores</Text>
                <View style={styles.scoreBoard}>
                    <Text style={styles.scoretext}>{players.player1}: {score.player1}</Text>
                    <Text style={styles.scoretext}>{players.player2}: {score.player2}</Text>
                </View>
            </View>
            <View style={styles.boardContainer}>
                <GameBoard onDone={pressHandler} turn={turn ? (selectionType.player1) : (selectionType.player2)} 
                selectionMode = {selectionType} player={players}
                onWin={(e,player)=>winHandler(e, player)} nav = {props.navigation} />
                <View style={styles.turnView}>
                    <Text style={styles.turnText}>This is your turn {turn ? (players.player1) : (players.player2)} .</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avtarContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    scoreSection: {
        alignItems:"center",
    },
    scoreBoard:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    scoretext: {
        fontSize:20
    },
    scoretitle:{
        fontSize: 24,
        fontWeight: "bold"
    },
    boardContainer: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        
    },
    turnView: {
        marginTop: 20
    },
    turnText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default GameScreen;
