import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.sass';

class Footer extends Component{
    render(){
        return(
            <footer className={styles.Footer}>
                {this.props.children}
            </footer>
        )
    }
}

Footer.propTypes = {
    children: PropTypes.node
}

export default Footer