let initialState = [
    {
        "author": "thingtwo",
        "body": "Hi there! I am a COMMENT.",
        "deleted": false,
        "id": "894tuq4ut84ut8v4t8wun89g",
        "parentDeleted": false,
        "parentId": "8xf0y6ziyjabvozdd253nd",
        "timestamp": 1468166872634,
        "voteScore": 6
    },
    {
        "author": "thingone",
        "body": "Comments. Are. Cool.",
        "deleted": false,
        "id": "8tu4bsun805n8un48ve89",
        "parentDeleted": false,
        "parentId": "8xf0y6ziyjabvozdd253nd",
        "timestamp": 1469479767190,
        "voteScore": -5
    }
]

export default function posts(state=initialState, action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, action.payload]
    case 'EDIT_COMMENT':
      return [...state, action.payload]
    case 'UPDATE_COMMENT':
      return [...state, action.payload]
    case 'REMOVE_COMMENT':
      return state.filter( id => id !== action.payload.id)
    default:
      return state
  }
}