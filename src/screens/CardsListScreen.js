import React from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux';

const CardsListScreen = (props) => {
     console.log(props)
    return (
        <>
            <Text>Detay</Text>
        </>
    )
}

const mapStateToProps = state => {
    return {
      cards: state.cards.cards,
    };
  };

  export default connect(mapStateToProps)(CardsListScreen);