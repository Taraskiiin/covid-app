const initialState = { activeId: null };

export default (
  state = initialState,
  action: { type: string; payload: string | null }
) => {
  const { type, payload } = action;

  switch (type) {
    case "MAKE_ACTIVE":
      return {
        ...state,
        activeId: payload,
      };
    case "REMOVE_ACTIVE":
      return {
        ...state,
        activeId: payload,
      };
    default:
      return state;
  }
};
