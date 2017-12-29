let initialState = [
  {
    id: "1e3f4gs83jsh",
    timeStamp: 94894893739739,
    title: "What is this shit?",
    body: "Was trying to troubleshoot render function and found this error.",
    author: "markphd",
    category: "frontend",
    voteScore: 16,
    deleted: false
  },
  {
    id: "2d9f9w9f0w9d",
    timeStamp: 948942393739739,
    title: "What is this poop?",
    body: "React & Redux shit",
    author: "markphd",
    category: "frontend",
    voteScore: 10,
    deleted: false
  },
  {
    id: "3ed398a3874d",
    timeStamp: 948942393739739,
    title: "What is this thirdy poop?",
    body: "React & Redux shit",
    author: "f0rloop",
    category: "frontend",
    voteScore: 5,
    deleted: false
  }
]

export default function posts(state=initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return [...state, action.payload]
    case 'EDIT_POST':
      return [...state, action.payload]
    case 'UPDATE_POST':
      return [...state, action.payload]
    case 'REMOVE_POST':
      return state.filter( id => id !== action.payload.id)
    default:
      return state
  }
}