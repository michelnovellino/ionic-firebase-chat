export interface LoginResponse{
    result?:{
        user?:any
        email?: string;
        uid?: string;
    },error?:{
        code?: string;
        message?: string;
    }

}