import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.post('/data', (req: Request, res: Response) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        data: receivedData,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
