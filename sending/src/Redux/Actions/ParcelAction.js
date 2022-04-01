import axios from "axios";
import { CREATEPARCEL_SUCCESS, CREATEPARCEL_FAIL} from "../ActionTypes/ParcelActionType";


export const signup = (parcelAdd) => async (dispatch) => {
    axios
      .post("http://localhost:6069/parcel", parcelAdd)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          dispatch({
            type: CREATEPARCEL_SUCCESS,
          });
        } else {
          dispatch({
            type: CREATEPARCEL_FAIL,
            error: "An error occured while creating parcel. Try again later",
          });
        }
      })
      .catch((error) => {
          console.log(error);
      });
  };