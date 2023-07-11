import { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Login from "./app/Login";
import TodoList from "./app/TodoList";
import { auth } from "./app/fbConfig";

export default function App() {
  const [user, setUser] = useState({uid: 'iwyGZYJlTldLivBwXeBw02fmNxK2'});

  // useEffect(() => { //on restart, check if already logged-in
  //   const _user = auth.currentUser;
  //   setUser(_user);
  //  }, [auth]);
  return (
    <NativeBaseProvider>
      <Box bg="darkBlue.900" alignItems="center" justifyContent="center" flex={1}>
          <Text color="darkBlue.400" fontSize="4xl">Chekov Todo</Text>
          {!user
            ?<Login setUser={setUser} />
            :<TodoList user={user} />
          }
      </Box>
    </NativeBaseProvider>
  );
}


