import PropTypes from 'prop-types';
import React from 'react';

import {
    BUTTON_TYPES,
    BUTTON_TYPE_BUTTON
} from './config';

import {
    ButtonPrimary
} from './styles';

const ButtonComponent = (props) => {
    const {
        children,
        handleClick,
        isDisabled,
        label,
        type
    } = props;

    const {
        displayName
    } = ButtonComponent;

    const buttonLabel = (
        children ? (
            <>{children}</>
        ) : (
            <span className={`${displayName}__label`}>{label}</span>
        )
    );

    return (
        <ButtonPrimary
            disabled={isDisabled}
            onClick={handleClick}
            type={type}
        >
            {buttonLabel}
        </ButtonPrimary>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    children: PropTypes.node,
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    children: '',
    handleClick: () => {},
    isDisabled: false,
    label: '',
    type: BUTTON_TYPE_BUTTON
};

export default ButtonComponent;
