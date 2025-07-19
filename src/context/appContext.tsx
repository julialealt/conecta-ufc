"use client";
import React, { createContext, useState } from "react";

export type Student = {
  _id: string;
  name: string;
  description: string;
  course: string;
  entrySemester: string;
  email: string;
  password: string;
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
  email: string;
  profile: string;
  password: string;
  site?: string;
  location?: string;
  specializations?: [string];
  contactEmail?: string;
  profileImage?: string;
  hiringRate?: Number;
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
  setUserData: (userData: UserData) => void;
  setUserType: (type: string) => void;
};

type props = {
  children: React.ReactNode;
};

const EmployerFake: Employer = {
  _id: "adsadsasdasdasdasda",
  name: "Samsunhg",
  description: "Uma empresa da terra do jimin",
  email: "SDasd",
  profile: "company",
  password: "sasdasd",
  hiringRate: 0,
};

export const InitialState: AppState = {
  userData: {
    accessToken: undefined,
    refreshToken: undefined,
    user: EmployerFake,
  },
  userType: undefined,
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<props> = ({ children }) => {
  const [state, setState] = useState<AppState>(InitialState);

  const setUserData = (userData: UserData) => {
    const newState = { ...state };
    newState.userData = userData;
    setState(newState);
  };

  const setUserType = (type: string) => {
    const newState = { ...state };
    newState.userType = type;
    setState(newState);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setUserData,
        setUserType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
