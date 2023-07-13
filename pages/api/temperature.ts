import { NextApiRequest, NextApiResponse } from "next";
import { cpuTemperature } from "systeminformation";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  cpuTemperature()
  .then(data => res.send(data))
  .catch(error => console.log(error))

}
