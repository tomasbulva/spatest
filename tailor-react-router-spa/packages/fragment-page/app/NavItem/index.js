import React, { Component } from 'react'
import { bool, func, number } from 'prop-types'
import './styles.scss'
import classNames from 'classnames'

class NavItem extends Component {
  render() {
    const { onClick, active, label } = this.props
    const classes = classNames({
      'nav-item': true,
      'current': active
    })

    return (
      <div className={classes} onClick={onClick}>{label}</div>
    )
  }

}

NavItem.propTypes = {
  active: bool,
  onClick: func,
  label: String
}

export default NavItem
