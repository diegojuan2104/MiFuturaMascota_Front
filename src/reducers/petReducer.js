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
  images: "",
  description: "",
  error: null,
  loading: false,
  id:"",
  animal_age_relation: "",
  animal_size_relation:  "",
  isDisabled:""
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
      
        name: action.payload.name,
        birth_date: action.payload.birth_date,
        breed: action.payload.breed.name,
        type: action.payload.type.name,
        images: action.payload.images,
        animal_age_relation: action.payload.animal_age_relation,
        animal_size_relation:  action.payload.animal_size_relation,
        loading: false,
        error: null,
        id: action.payload.id,
      
      
        description: action.payload.description,
        isDisabled : action.payload.isDisabled
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
