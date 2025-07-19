export type Opportunity = {
  _id: string;
  title: string;
  description: string;
  salary: Number;
  weeklyHours: Number;
  workLocation: string;
  employer: string;
  applicants: [string];
  contracts: [
    {
      _id: string;
      employeeId: string;
      status: string;
    }
  ];
};
