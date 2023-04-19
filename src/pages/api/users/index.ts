// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "./database";
import { findByWord } from "./model";
import { nanoid } from "nanoid";
import { IUser } from "@/entities/user/model";

type Data = {
  data: IUser[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    let data = [];

    if (req.query.searchWord) {
      const { searchWord } = req.query;
      //@ts-ignore
      data = findByWord(searchWord, database) as User[];
    } else {
      data = database;
    }

    res.status(200).json({ data });
  }
  if (req.method === "POST") {
    let newItem = req.body;
    newItem.id = nanoid();
    newItem.created_at = new Date().toISOString();
    newItem.updated_at = new Date().toISOString();
    newItem.status = "active";
    newItem.deferral_days = 0;
    newItem.balance = {};
    newItem.invoice_prefix = "";
    database.push(newItem);

    let data = [newItem] as IUser[];
    res.status(200).json({ data });
  }
};

export default handler;
