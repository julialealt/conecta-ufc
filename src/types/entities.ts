import { Employer } from "@/context/appContext";

export type Opportunity = {
  _id: string;
  title: string;
  description: string;
  salary: Number;
  weeklyHours: Number;
  workLocation: string;
  employer: Employer;
  applicants: [string];
  refusedApplicants: [string];
  contracts: [
    {
      _id: string;
      employeeId: string;
      status: string;
    }
  ];
};
