export type ProfessionalsTypes = {
  [key: string]: ServiceTypes;
};

export type ServiceTypes = {
  name: string;
  professionals: ProfessionalsInfo[];
};

export type ProfessionalsInfo = {
  name: string;
  profile: string;
  experience: string;
  regions: string;
  work: string[];
};
