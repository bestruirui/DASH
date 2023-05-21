import { Progress } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";

export default function Status() {
    return (
        <Card className="mt-6 w-96 mx-auto ">
            <CardHeader color="white" className="relative h-56 mt-0">
                <div className="w-full" style={{"padding":"5%"}}>
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="blue" variant="h6">CPU</Typography>
                        <Typography color="blue" variant="h6">50%</Typography>
                    </div>
                    <Progress value={50} className="h-5"/>
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="blue" variant="h6">MEM</Typography>
                        <Typography color="blue" variant="h6">50%</Typography>
                    </div>
                    <Progress value={50} className="h-5"/>
                    <div className="flex items-center justify-between gap-4 mb-2">
                        <Typography color="blue" variant="h6">DISK</Typography>
                        <Typography color="blue" variant="h6">50%</Typography>
                    </div>
                    <Progress value={50} className="h-5"/>
                </div>
            </CardHeader>
            <CardBody>
                {/* <Typography variant="h5" color="blue-gray" className="mb-2">
                    系统信息
                </Typography> */}
            </CardBody>
            <CardFooter className="pt-0" style={{"text-align": "right"}}>
                <Button>详细信息</Button>
            </CardFooter>
        </Card>
    );
}
