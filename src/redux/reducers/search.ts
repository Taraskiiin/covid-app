const initialState = { search: "" };

export default (
  state = initialState,
  action: { type: string; payload: string }
) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH":
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};
