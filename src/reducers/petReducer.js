import {
  SAVE_INFO_PET,
  SAVE_INFO_PET_SUCCESS,
  SAVE_INFO_PET_ERROR,
} from "../types";

const initalState = {
  name: "",
  birth_date: "",
  breed: "",
  type: "",
  url_img: "",
  description: "",
  city: "",
  state: "",
  error: null,
  loading: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SAVE_INFO_PET:
      return {
        ...state,
        loading: action.payload,
      };

    case SAVE_INFO_PET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        name: action.payload.name,
        birth_date: action.payload.birth_date,
        breed: action.payload.breed,
        type: action.payload.type,
        url_img: action.payload.url_img,
        description: action.payload.description,
        city: action.payload.city,
        state: action.payload.state
      };

    case SAVE_INFO_PET_ERROR:
      return {
        ...state,
        loading: false,
        info: action.payload,
      };
    default:
      return state;
  }
}
