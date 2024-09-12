import React from 'react';

import { connect } from "react-redux";


const If = props => {
  return props.condition ? props.children : null;
};


const Auth = (props)=>{
  let okToRender = false;

    try {
      okToRender =
      props.reducer.loggedIn &&
        (props.capability
          ? props.reducer.user.capabilities.includes(props.capability)
          : true);
    } catch (e) {
      console.warn('Not Authorized');
    }
  return(
    <If condition={okToRender}>
    <div>{props.children}</div>
  </If>
  )
}

const mapStateToProps = state => ({
  reducer: state.reducer
});


export default connect(
  mapStateToProps
)(Auth);
