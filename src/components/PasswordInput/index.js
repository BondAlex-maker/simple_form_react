import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';

class PasswordInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true,
    };

  }

  render () {
    const { isHidden } = this.state;

    return (
      <label>
        <input {...this.props } type={isHidden
                     ? 'password'
                     : 'text'}/>
        <Icon size={'25px'} onMouseDown={() => {
          this.setState({
                          isHidden: false,
                        });
        }}
              onMouseUp={() => {
                this.setState({
                                isHidden: true,
                              });
              }} color={'black'}
              path={isHidden
                    ? mdiEyeOffOutline
                    : mdiEyeOutline}/>
      </label>
    );

  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

PasswordInput.defaultProps = {
  value: '',
};

export default PasswordInput;