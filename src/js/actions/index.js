import { SET_ACTIVE } from './types'; 

export function setActive(active) {
  return {
    type: SET_ACTIVE,
    data: active
  }
}