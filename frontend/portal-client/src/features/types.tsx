export type Company ={
    name:string,
    description:string,
    logo_img:string
}


export type JobData={
    id:string,
    company:Company,
    job_title:string,
    allow_location:string,
    salary:string,
    skills:string[],
    posted_data:string
}