
export default function HookReducer() {
  // state is required to be little bit complex
  //operation performed on state is also going to complex
  // or not limited to one

  // dispatch -> action
  // parcel -> dispatch -> item payload

  const[Counter, dispatch] = useReducer(myReducer, )

  return (
    <div>HookReducer</div>
  )
}
