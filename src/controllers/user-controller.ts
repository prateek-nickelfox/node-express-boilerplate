import { Request, Response } from 'express';

const greetingController = {
  async getGreeting(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Hello, world!' });
  },

  async createGreeting(req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Greeting message created successfully' });
  },
};

export default greetingController;
