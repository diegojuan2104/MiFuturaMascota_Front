import {
  SAVE_INFO_USER,
  SAVE_INFO_USER_SUCCESS,
  SAVE_INFO_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_ERROR,
} from "../types";

import clientAxios from "../config/axios";
import Swal from "sweetalert2";


//_______LOGIN___________

export function loginUserAction(user) {
  return async (dispatch) => {
    dispatch(saveInfo());
    try {
      //Buscar desde la API
      const response = await clientAxios.post("/login", user);
      console.log(response);
      user = {
        token: response.data.access_token,
        id_user: response.data.user_id,
        autenticado: false,
      };

      //Si todo sale bien actualizar el state
      dispatch(saveInfoSuccess(user));
    } catch (error) {
      //si hay un error, cambiar el state
      dispatch(saveInfoError(true));
      //Alerta
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Correo y/o contraseña invalida",
      });
    }
  };
}

const saveInfo = () => ({
  type: SAVE_INFO_USER,
  payload: true,
});

//Si se realiza con éxito
const saveInfoSuccess = (user) => ({
  type: SAVE_INFO_USER_SUCCESS,
  payload: user,
});

//Si hubo un error
const saveInfoError = (state) => ({
  type: SAVE_INFO_USER_ERROR,
  payload: state,
});



//_______LOGOUT___________

export function logoutUserAction(user) {
  return async (dispatch) => {
    dispatch(logoutUser());
    try {
      user = {
        token: "",
        id_user: "",
        autenticado: false,
      };

      //Si todo sale bien actualizar el state
      dispatch(logoutUserSuccess(user));
    } catch (error) {
      //si hay un error, cambiar el state
      dispatch(logoutUserError(true));
      //Alerta
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, inténtelo de nuevo",
      });
    }
  };
}

const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: true,
});

//Si se realiza con éxito
const logoutUserSuccess = (user) => ({
  type: USER_LOGOUT_SUCCESS,
  payload: user,
});

//Si hubo un error
const logoutUserError = (state) => ({
  type: USER_LOGOUT_ERROR,
  payload: state,
});


//_______REGISTER___________

export function registerUserAction(user) {
    return async (dispatch) => {
      dispatch(registerUser());
      try {

        let response;
        //Buscar desde la API
        if(!user.isCorporation){
           response = await clientAxios.post("/register", user);
        }else{
          response = await clientAxios.post("/register_corporation", user);
        }
        console.log(response);
    
        //Si todo sale bien actualizar el state
        dispatch(registerUserSuccess(user));
        Swal.fire("Correcto", "Usuario creado correctamente", "success");
      } catch (error) {
        //si hay un error, cambiar el state
        dispatch(registerUserError(true));
        //Alerta
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: "El email ingresado ya está registrado",
        });
      }
    };
  }
  
  const registerUser = () => ({
    type: REGISTER_USER,
    payload: true,
  });
  
  //Si se realiza con éxito
  const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });
  
  //Si hubo un error
  const registerUserError = (state) => ({
    type: REGISTER_USER_ERROR,
    payload: state,
  });
  