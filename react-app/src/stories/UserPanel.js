import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserPanelStyled = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: 80px;

  a.a--login-register {
    color: #313132;
    font-size: 16px;
    padding-right: 30px;
    text-decoration: none;
  }
  a.a--login-register::before {
    /* Icon - user silhouette */
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik0yNTYgMjU2YzUyLjgwNSAwIDk2LTQzLjIwMSA5Ni05NnMtNDMuMTk1LTk2LTk2LTk2LTk2IDQzLjIwMS05NiA5NiA0My4xOTUgOTYgOTYgOTZ6bTAgNDhjLTYzLjU5OCAwLTE5MiAzMi40MDItMTkyIDk2djQ4aDM4NHYtNDhjMC02My41OTgtMTI4LjQwMi05Ni0xOTItOTZ6IiBmaWxsPSJjdXJyZW50Y29sb3IiLz48L3N2Zz4K");
    padding-right: 5px;
  }
`;

function UserPanel({ userSession, onLogin, onLogout, onCreateAccount }) {
  return (
    <UserPanelStyled>
      {userSession ? (
        <a href="/#" className="a--login-register">
          Logout
        </a>
      ) : (
        <a href="/#" className="a--login-register">
          Login/Register
        </a>
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
