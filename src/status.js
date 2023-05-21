import { Progress } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Status() {
  const [cpuUsage, setCpuUsage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://ewrzp7-3001.csb.app/api/cpu")
        .then((response) => {
          setCpuUsage(response.data.cpuUsage);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card className="mt-6 w-96 mx-auto ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="blue-gray">
              系统信息
            </Typography>
          </div>
        </div>
      </CardHeader>

      <CardBody
        color="white"
        className="relative h-56"
        style={{ padding: " 0 1rem" }}
      >
        <div className="w-full">
          <div className="flex items-center justify-between gap-4 mb-2">
            <Typography color="blue-gray" variant="h6">
              CPU
            </Typography>
            <Typography color="blue-gray" variant="h6">
              {cpuUsage}%
            </Typography>
          </div>
          <Progress
            value={cpuUsage}
            className="h-5 mb-2 progress"
            color="blue-gray"
          />

          <div className="flex items-center justify-between gap-4 mb-2">
            <Typography color="blue-gray" variant="h6">
              MEM
            </Typography>
            <Typography color="blue-gray" variant="h6">
              35%
            </Typography>
          </div>
          <Progress
            value={35}
            className="h-5 mb-2 progress"
            color="blue-gray"
          />
          <div className="flex items-center justify-between gap-4 mb-2">
            <Typography color="blue-gray" variant="h6">
              DISK
            </Typography>
            <Typography color="blue-gray" variant="h6">
              65%
            </Typography>
          </div>
          <Progress
            value={65}
            className="h-5 mb-2 progress"
            color="blue-gray"
          />
        </div>
      </CardBody>
      <CardFooter className="pt-0" style={{ "text-align": "right" }}>
        <Button variant="outlined" color="blue-gray">
          详细信息
        </Button>
      </CardFooter>
    </Card>
  );
}
