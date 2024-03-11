import { FormControl } from "@angular/forms";

export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginReactiveForm {
    email: FormControl<string>;
    password: FormControl<string>;
}


export interface RegisterForm {
    username: string;
    email: string;
    password: string;
}

export interface RegisterReactiveForm {
    username: FormControl<string>;
    email:    FormControl<string>;
    password: FormControl<string>;
    repeatPassword: FormControl<string>;
}


export interface ErrorCommonResponse {
    message: string[] | string;
    error: string; 
    statusCode: number;
}