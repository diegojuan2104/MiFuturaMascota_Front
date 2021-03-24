import {
  SAVE_INFO_PET,
  SAVE_INFO_PET_SUCCESS,
  SAVE_INFO_PET_ERROR,
} from "../types";

import Swal from "sweetalert2";


export function saveSelectedPetAction(pet) {
  return async (dispatch) => {
    dispatch(saveSelectedPet());
    try {
      dispatch(saveSelectedPetSuccess(pet));
    } catch (error) {
      //si hay un error, cambiar el state
      dispatch(saveSelectedPetError(true));
      //Alerta
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intente de nuevo.",
      });
    }
  };
}

const saveSelectedPet = () => ({
  type: SAVE_INFO_PET,
  payload: true,
});

//Si se realiza con éxito
const saveSelectedPetSuccess = (pet) => ({
  type: SAVE_INFO_PET_SUCCESS,
  payload: pet,
});

//Si hubo un error
const saveSelectedPetError = (state) => ({
  type: SAVE_INFO_PET_ERROR,
  payload: state,
});
