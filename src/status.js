import { Progress } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { useApiData } from './data';

export default function Status() {
  
  const {data} = useApiData();
  
  return (
    <Card className="mt-6 w-96 mx-auto ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
            <Typography variant="h2" color="blue-gray">
              系统信息
            </Typography>
            <Avatar src="./server.svg" className="object-fill !rounded-none"/>
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
              {data.memUsage}%
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
              {data.diskUsage}%
            </Typography>
          </div>
          <Progress
            value={data.diskUsage}
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
