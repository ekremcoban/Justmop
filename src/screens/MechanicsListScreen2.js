import React, { Component } from 'react';
import {Text, Button} from "react-native";
import { connect } from 'react-redux';
import { updateCards } from '../store/actions/index';

class MechanicsListScreen2 extends Component {

    placeSubmitHandler = () => {
        
        this.props.onUpdateCards(333);
        
    };

    xx = () => {
        console.log("this.props.cards")
        console.log(this.props.cards)
    }

    render() {
        console.log(this.props.cards)
        return (
            <>
            <Text>TEST</Text>
            <Button title="bas" onPress={() => this.placeSubmitHandler}/>
            <Button title="gor" onPress={() => this.xx()}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      cards: state.cards.cards,
    };
  };
  
  const mapDispatchToProps = dispatch => {
      console.log("fırlattı")
    return {
      onUpdateCards: (cards) => dispatch(updateCards(cards)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MechanicsListScreen2);