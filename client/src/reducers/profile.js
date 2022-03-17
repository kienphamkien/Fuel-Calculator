export const LOAD_USER_PROFILE_SUCCESS = "LOAD_USER_PROFILE_SUCCESS";
export const LOAD_USER_PROFILE_FAIL = "LOAD_USER_PROFILE_FAIL";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAIL = "UPDATE_USER_PROFILE_FAIL";

const initialState = {
  full_name: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipcode: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_PROFILE_SUCCESS:
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        full_name: payload.full_name,
        address1: payload.address1,
        address2: payload.address2,
        city: payload.city,
        state: payload.state,
        zipcode: payload.zipcode,
      };
    case LOAD_USER_PROFILE_FAIL:
      return {
        ...state,
        full_name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
      };
    case UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}