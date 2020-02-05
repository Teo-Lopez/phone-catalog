import { GET_ALL_PHONES, GET_ONE_PHONE } from "../constants/actionTypes";
import { func } from "prop-types";
export function getAllPhones(payload) {
  return { type: UPDATE_PHONES, payload };
}
export function getOnePhone(payload) {
  return { type: GET_ONE_PHONE, payload };
}
