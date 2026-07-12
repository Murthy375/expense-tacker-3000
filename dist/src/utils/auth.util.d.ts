import "dotenv/config";
export declare const hashPassword: (password: string) => string;
export declare const comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
interface PayloadType {
    id: string;
    createdAt: Date;
}
export declare const generateJwtToken: (payload: PayloadType) => string;
export {};
//# sourceMappingURL=auth.util.d.ts.map