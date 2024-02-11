import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
	const [user, setuser] = useState({});

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      let decoded = jwtDecode(tokenResponse.credential);
      setuser(decoded);
      console.log("decode",decoded);
      console.log("tokenResponse",tokenResponse);
    }

  });


	return (
		<>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					let decoded = jwtDecode(credentialResponse.credential);
					setuser(decoded);
					console.log(decoded);
					console.log(user);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>

      <button onClick={() => login()}>Login with Google</button>

			<p>{user?.email}</p>

			<p>
				{user?.given_name} {user?.family_name}
			</p>
			<img src={user?.picture} alt='' />
		</>
	);
}

export default App;
