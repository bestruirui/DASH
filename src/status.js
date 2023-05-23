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

export default function Status() {
  
  const [data, setData] = useState({});
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch('https://dash.bestruirui.repl.co/api');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }, 1000); // 每1秒钟获取新数据

    return () => clearInterval(intervalId); // 在组件卸载前清除定时器
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
              {data.cpuUsage}%
            </Typography>
          </div>
          <Progress
            value={data.cpuUsage}
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
            value={data.memUsage}
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
