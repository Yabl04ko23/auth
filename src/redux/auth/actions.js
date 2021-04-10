import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerError = createAction("REGISTER_ERROR");

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginError = createAction("LOGIN_ERROR");

export const logoutRequest = createAction("LOGOUT_REQUEST");
export const logoutSuccess = createAction("LOGOUT_SUCCESS");
export const logoutError = createAction("LOGOUT_ERROR");

export const currentUserRequest = createAction("CURRENT_USER_REQUEST");
export const currentUserSuccess = createAction("CURRENT_USER_SUCCESS");
export const currentUserError = createAction("CURRENT_USER_ERROR");
