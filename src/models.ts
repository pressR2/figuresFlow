export type SignUpProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    retypePassword: string;
};

export type SignInProps = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type ForgotPasswordProps = {
    email: string;
};

export type AuthContextProps = {
    email: string;
    password: string;
};