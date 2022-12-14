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

export type SkillsOption={
    value:number,
    label:string
}

export type Skills={
    id:number,
    name:string
}

export type NewJobType={
    job_title:string
    category:string,
    skills:number[],
    job_type:string,
    region:string,
    job_zone:string,
    salary:string,
    application:string,
    job_description:string
}

export type CreateJobType={
    job_title:string
    category:string,
    skills:number[],
    job_type:string,
    region:string,
    job_zone:string,
    salary:string,
    application:string
    job_description:string
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
    job_zone: null | string,          
    application: string,
    job_description:string,
    
}
export type CompanyJobType={
    id:string,
    pkid: number,
    created_at: string,
    job_title:string,
    salary:string,
    skills:Skills[],
    category: string,
    job_type: string,
    region: string
    job_zone: null | string,          
    application: string,
    job_description:string,
    nums_of_applicant:number
    
}

export type SearchParam={
    jobName:string,
    location:string
}

export interface UserReturnData{ //user for signup and retrieve user request
    pkid:number,
    email:string,
    first_name:string,
    last_name:string,
}

export type LoginReturnType={
    refresh:string,
    access:string
}

export interface AuthError{
    errorMessage:string,
    field_errors:Record<string, string>
}

export type SignupDataType={
    email:string,
    first_name:string,
    last_name:string,
    password:string,
    re_password:string
}

export type ApplyData={
    applicant_name:string,
    email:string,
    position:any,
    resume:File | string,
    github_link:string,
    portfolio_link:string
}
export type ApplicationType={
    id:string,
    applicant_name:string,
    email:string,
    position:number,
    resume:File | string,
    github_link:string,
    portfolio_link:string

}