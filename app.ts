import express from "express";
import { Request, Response, Application } from "express";

const app: Application = express();

let puppies = [
  {
    id: 1,
    breed: "breed1",
    name: "name1",
    birth_date: "123",
  },
  {
    id: 2,
    breed: "breed2",
    name: "name2",
    birth_date: "1234",
  },
];

app.get("/api/test", (_req: Request, res: Response) => {
  return res.status(200).json({ test: "is working as it should" });
});
app.get("/api/puppies", (_req: Request, res: Response) => {
  return res.status(200).json(puppies);
});

app.get("/api/puppies/:id", (_req: Request, res: Response) => {
  const id = _req.params.id;
  const result = puppies.find((item) => item.id === Number(id));
  return res.status(200).json(result);
});

app.post("/api/puppies", (_req: Request, res: Response) => {
  // const data = _req.body;

  console.log(_req);

  puppies.push({
    id: 3,
    breed: "breed3",
    name: "name3",
    birth_date: "12344",
  });
  return res.status(201).json(puppies);
});

app.put("/api/puppies/:id", (_req: Request, res: Response) => {
  // const data = _req.body;
  const id = _req.params.id;
  const result: any = puppies.find((item) => item.id === Number(id));
  const i = puppies.indexOf(result);
  puppies.splice(i, 1, {
    id: Number(id),
    breed: "breed6",
    name: "name6",
    birth_date: "123446",
  });
  return res.status(200).json(puppies);
});

app.delete("/api/puppies/:id", (_req: Request, res: Response) => {
  const id = _req.params.id;
  const result: any = puppies.find((item) => item.id === Number(id));
  const i = puppies.indexOf(result);
  puppies.splice(i, 1);
  return res.status(204).json();
});
export default app;
