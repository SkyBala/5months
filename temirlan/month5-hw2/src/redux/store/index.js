import {createStore} from "@reduxjs/toolkit";
import {calcReducer} from "./calcReducer";

export const store = createStore(calcReducer)