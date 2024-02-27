// // for one to one chat
export const getSender = (loggedUser, users) => {
  // Check if loggedUser or users are undefined or null
  if (
    !loggedUser ||
    !users?.[0]?._id ||
    !users?.[1]?._id ||
    users.length < 2 ||
    users[0]._id === users[1]._id
  ) {
    return "";
  }

  // Determine the sender based on loggedUser and users
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

//-------------------------------------------------
// export const getSender = (loggedUser, users) => {
//   // Check if loggedUser or users are undefined or null
//   if (!loggedUser || !users || users.length < 2) {
//     return ""; // or handle the empty or insufficient data case appropriately
//   }

//   // Check if both users have the necessary properties
//   if (!loggedUser._id || !users[0]._id || !users[1]._id) {
//     return ""; // or handle the missing property case appropriately
//   }

//   // Ensure both users are distinct
//   if (users[0]._id === users[1]._id) {
//     return ""; // or handle the case where both users are the same
//   }

//   // Determine the sender based on loggedUser and users
//   return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
// };
//-------------------------------------------------
// export const getSender = (loggedUser, users) => {
//   if (!users || users.length === 0) {
//     return ""; // or handle the empty array case appropriately
//   }
//   return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
// };

//-------------------------------------------------
/////////////////////////////
export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};

////////////////////////////
export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};
///////////////////////////
export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

//////////////////////// one to one ui to align right
export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

////////////////
export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
