interface RegisterUserData {
    email: string;
    userName: string;
    password: string;
}
export declare const registerNewUser: (data: RegisterUserData) => Promise<{
    userName: string;
}[]>;
export {};
//# sourceMappingURL=auth.service.d.ts.map