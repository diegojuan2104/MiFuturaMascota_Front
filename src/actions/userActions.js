import {
  SAVE_INFO_USER,
  SAVE_INFO_USER_SUCCESS,
  SAVE_INFO_USER_ERROR,
} from "../types";

import clientAxios from "../config/axios";
import Swal from "sweetalert2";

export function loginUserAction(user) {
  return async (dispatch) => {
    dispatch(saveInfo());
    try {
      //Buscar desde la API
      const response = await clientAxios.post("/login", user);
      user = {
        token: response.data.access_token,
        id_user: response.data.user_id,
        autenticado: "True"
      }

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
