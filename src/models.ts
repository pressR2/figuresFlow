export type SignUpProperties = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    retypePassword: string;
};

export type SignInProperties = {
    email: string;
    password: string;
    rememberMe: boolean;
};
