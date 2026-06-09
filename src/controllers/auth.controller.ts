import type { Request, Response } from "express";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    return res.status(error.status ?? 500).json({
      success: false,
      message: error.message ?? "something went wrong",
    });
  }
};
