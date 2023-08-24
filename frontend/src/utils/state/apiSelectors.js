import { apiSlice } from "./apiSlice";

const activeUserSelector = apiSlice.endpoints.getActiveUser.select();

export { activeUserSelector };