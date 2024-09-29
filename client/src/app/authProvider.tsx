import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

const formFields = {
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};

const AuthProvider = ({ children }: any) => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 flex items-center justify-center p-8">
        <Image
          className="object-cover rounded-md w-[85%] h-[100%]"
          src="/images/idcolablogin.png"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="w-2/5 flex items-center justify-center">
        <Authenticator formFields={formFields}>
          {({ user }: any) =>
            user ? (
              <div>{children}</div>
            ) : (
              <div>
                {/* TFO */}
                <h1>Please sign in below:</h1>
              </div>
            )
          }
        </Authenticator>
      </div>
    </div>
  );
};

export default AuthProvider;
