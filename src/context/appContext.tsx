"use client";
import React, { createContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Student = {
  _id: string;
  name: string;
  description: string;
  about?: string;
  course: string;
  entrySemester: string;
  email: string;
  password?: string;
  graduationForecast?: string;
  profileImage?: string;
  skills?: [string];
  experiences?: [
    {
      _id: string;
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
    }
  ];
  projects?: [
    {
      _id: string;
      name: string;
      description: string;
      type: string;
      link: string;
    }
  ];
  articles?: [
    {
      _id: string;
      title: string;
      summary: string;
      url: string;
      publishedAt: Date;
    }
  ];
  certificates?: [
    {
      _id: string;
      title: string;
      organization: string;
      url: string;
      issuedAt: Date;
    }
  ];
};

export type Employer = {
  _id: string;
  name: string;
  description: string;
  about?: string;
  email: string;
  profile: string;
  password?: string;
  site?: string;
  location?: string;
  specializations?: [string];
  contactEmail?: string;
  profileImage?: string;
  hiringRate?: number;
};

export type Adm = {
  _id: string;
  email: string;
};

type UserData = {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  user: Student | Employer | Adm | undefined;
};

type AppState = {
  userData: UserData;
  userType: string | undefined;
};

export type AppContextType = {
  state: AppState;
  setUserData: (userData: UserData, userType: string) => void;
  setUserType: (type: string) => void;
  updateUserData: (userData: Student | Employer) => void;
};

type props = {
  children: React.ReactNode;
};

export const InitialState: AppState = {
  userData: {
    accessToken: undefined,
    refreshToken: undefined,
    user: undefined,
  },
  userType: undefined,
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<props> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [state, setState] = useState<AppState>(InitialState);

  const setUserData = (userData: UserData, userType: string) => {
    const newState = { ...state };
    newState.userType = userType;
    newState.userData = userData;
    setState(newState);
  };

  const setUserType = (type: string) => {
    const newState = { ...state };
    newState.userType = type;
    setState(newState);
  };

  const updateUserData = (userData: Student | Employer) => {
    const newState = { ...state };
    newState.userData.user = userData;
    setState(newState);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userData = localStorage.getItem("userData");
    const userType = localStorage.getItem("userType");

    if (accessToken && refreshToken && userData && userType) {
      const userDataObject: UserData = {
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: JSON.parse(userData),
      };
      setUserData(userDataObject, userType);
      if (pathname === "/sign-in" || pathname === "/sign-up") {
        router.replace("/");
      }
    } else {
      router.replace("/sign-in");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        setUserData,
        setUserType,
        updateUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
