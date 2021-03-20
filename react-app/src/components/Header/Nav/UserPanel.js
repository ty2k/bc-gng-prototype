import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as UserIcon } from "../../assets/ionic-md-person.svg";

const UserPanelStyled = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: 80px;
  padding-right: 30px;
  min-width: fit-content;

  button.button--login-register {
    align-items: center;
    background: none;
    border: 0;
    color: #313132;
    cursor: pointer;
    display: flex;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    height: 44px;
    padding: 0;
  }
  button.button--login-register span {
    display: inline-block;
    font-size: 16px;
    text-decoration: none;
  }
  button.button--login-register svg {
    padding-right: 5px;
    height: 25px;
    width: 25px;
  }
`;

function UserPanel({ userSession, onLogin, onLogout, onCreateAccount }) {
  return (
    <UserPanelStyled>
      {userSession ? (
        <button aria-label="Logout" className="button--login-register">
          <UserIcon />
          <span>Logout</span>
        </button>
      ) : (
        <button
          aira-label="Login or register"
          className="button--login-register"
        >
          <UserIcon />
          <span>Login/Register</span>
        </button>
      )}
    </UserPanelStyled>
  );
}

UserPanel.propTypes = {
  userSession: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

UserPanel.defaultProps = {
  userSession: false,
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
};

export default UserPanel;
