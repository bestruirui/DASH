import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "ONLINE",
    value: "online",
  },
  {
    label: "OFFLINE",
    value: "offline",
  },
];

const TABLE_HEAD = ["NAME", "STATUS", "MANAGE"];

const TABLE_ROWS = [
  {
    img: "./docker.svg",
    name: "Docker1",
    online: true,
    date: "23/04/18",
  },
  {
    img: "./docker.svg",
    name: "Docker2",
    online: false,
    date: "23/04/18",
  },
  {
    img: "./docker.svg",
    name: "Docker3",
    online: false,
    date: "19/09/17",
  },
  {
    img: "./docker.svg",
    name: "Docker4",
    online: true,
    date: "24/12/08",
  },
  {
    img: "./docker.svg",
    name: "Docker5",
    online: false,
    date: "04/10/21",
  },
];

export default function Docker() {
  return (
    <Card
      className="h-full w-96 mx-auto "
      style={{ "margin-top": "20px", marginBottom: "20%" }}
    >
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="blue-gray">
              Docker
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 ">
          <Tabs value="all" className="w-full ">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full ">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="sm"
                          className="object-fill"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Menu>
                          <MenuHandler>
                            <Button size="sm" variant="outlined" color="blue-gray">CONTAL</Button>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem>开始</MenuItem>
                            <MenuItem>关闭</MenuItem>
                            <MenuItem>重启</MenuItem>
                          </MenuList>
                        </Menu>
                      </div>
                    </td>

                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  );
}
