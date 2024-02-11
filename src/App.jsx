import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setuser] = useState({})
  
	return (
		<>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
          let decoded = jwtDecode(credentialResponse.credential)
          setuser(decoded)
					console.log(decoded);
          console.log(user);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
		</>
	);
}

export default App;
