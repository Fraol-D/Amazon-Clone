import { useContext, useEffect } from "react";
import Routing from "./Router.jsx";
import { type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        dispatch({
          type: type.SET_USER,
          user: authUser,
        });
      } else {
        // User is signed out
        dispatch({
          type: type.SET_USER,
          user: null,
        });
      }
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, [dispatch]); // Ensure useEffect runs only when dispatch changes

  return <Routing />;
}

export default App;
