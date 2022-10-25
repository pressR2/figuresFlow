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

export type SidenavProps = {
    open: boolean;
    handleMenuToggle: () => void;
};

export type TopNavProps = {
    handleMenuToggle: () => void;
};

export type ProtectedRouteProps = {
    children: React.ReactNode;
};

export type NavWrapperProps = {
    children: React.ReactNode;
};