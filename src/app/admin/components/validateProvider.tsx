"use client";
import React from "react";

/**
 * Context for List
 *
 * @param {ReactFragement} children
 * @returns {React.Context}
 */
export const ValidateWrapper = React.createContext<{
  error: any;
  setError: any;
}>(undefined as any);

export const ValidateProvider = ({ children }: React.PropsWithChildren) => {
  let [error, setError] = React.useState<{}>({});
  return (
    <ValidateWrapper.Provider
      value={{
        error,
        setError
      }}>
      {children}
    </ValidateWrapper.Provider>
  );
};

export const useValidateContext = () => React.useContext(ValidateWrapper);
