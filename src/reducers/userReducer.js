import {
  SAVE_INFO_USER,
  SAVE_INFO_USER_SUCCESS,
  SAVE_INFO_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../types";

const initalState = {
  token: "",
  id_user: "",
  autenticado: false,
  error: null,
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SAVE_INFO_USER:
      return {
        ...state,
        loading: action.payload,
      };

    case SAVE_INFO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload.token,
        id_user: action.payload.id_user,
        autenticado: action.payload.autenticado

      };

    case SAVE_INFO_USER_ERROR:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };

      case REGISTER_USER:
        return {
          ...state,
          loading: action.payload,
        };
  
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
        };
  
      case REGISTER_USER_ERROR:
        return {
          ...state,
          loading: false,
          info: action.payload,
        };
    default:
      return state;
  }
}
