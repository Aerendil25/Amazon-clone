import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import BackToTop from "./BackToTop";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  // console.log(auth)
  // const auth = getAuth()
  const { dispatch } = useStateValue();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <BackToTop />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <BackToTop />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
