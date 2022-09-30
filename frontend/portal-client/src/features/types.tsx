export interface Company{
      pkid: number,
      id: string,
      created_at: string,
      company_name: string,
      location: string,
      website: string,
      company_email: string,
      company_logo: string,
      description: string,
      user: number
}

export type Skills={
    id:number,
    name:string
}


export type JobData={
    id:string,
    pkid: number,
    created_at: string,
    company:Company,
    job_title:string,
    salary:string,
    skills:Skills[],
    category: string,
    job_type: string,
    region: string
    job_zone: null,          
    application: string,
}

export type SearchParam={
    jobName:string,
    location:string
}