import type { Request, Response } from "express";

// import second from 'first'

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const validationResult = req.body

    const newlyRegisterdUser = await 
  } catch (error: any) {
    return res.status(error.status ?? 500).json({
      success: false,
      message: error.message ?? "something went wrong",
    });
  }
};
