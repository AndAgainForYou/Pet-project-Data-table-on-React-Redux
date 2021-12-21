import React from 'react';
import Tablee from './Table';
import { connect } from 'react-redux';
import { addTableAC, updateNewMessageBodyAC, updateNewMessageBodyTwoAC, updateNewMessageBodyTreAC } from './redux/Table-reducer';


class TableContainer extends React.Component {
    render(){
        return (
            <Tablee tables={this.props.tables} {...this.props}/>
        )
    }   
}
let mapStateToProps = (state) => ({
    tables: state.tablePage.tables 
});


export default connect(mapStateToProps, {addTableAC, updateNewMessageBodyAC, updateNewMessageBodyTwoAC, updateNewMessageBodyTreAC})(TableContainer);