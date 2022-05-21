// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { searchUnsplash } from "../../helpers/searchImages";
export default async function handler(req, res) {
  const response = await searchUnsplash("1", "game");
  res.status(200).json({ response });
}
