import { ADD_ITEM, REMOVE_ITEM, AUTH_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS } from "../actions";

const initialState = {
  twitters: [
    {
      id: 1,
      title: "Hello Roman",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterName: "hello_roman",
    },
    {
      id: 2,
      title: "Redux guy",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterName: "dan_abramov",
    },
  ],
  userID: "602a10e794bd7f01f483f438",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };

    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
