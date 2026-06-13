// import second from 'first'
export const registerUserController = async (req, res) => {
    try {
        const validationResult = req.body;
        // const newlyRegisterdUser = await
        return res.status(200).json({ success: true });
    }
    catch (error) {
        return res.status(error.status ?? 500).json({
            success: false,
            message: error.message ?? "something went wrong",
        });
    }
};
//# sourceMappingURL=auth.controller.js.map