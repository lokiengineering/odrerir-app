// @flow
import React, { Component } from 'react';
import { Home } from '../components/Home';
import { toggleMenu } from '../actions'
import { compose } from 'recompose';
import { connect } from 'react-redux';

type Props = {};

export const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    menuOpen: state.app.menuOpen,
  }
}

export const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleMenu: () => dispatch(toggleMenu()),
  }
}

export const withRedux = connect(mapStateToProps, mapDispatchToProps)

export const withEnhancers = compose(withRedux);

export const HomePage = withEnhancers(Home)
