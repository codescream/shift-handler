import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import { LineChart } from "@mui/x-charts/LineChart";
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

const Statistics = () => {
  const users = [
    {
      card: "Shifts",
      data: {
        count: 1000,
        change: -11.4,
      },
    },
    {
      card: "Clients",
      data: {
        count: 89,
        change: -1.4,
      },
    },
    {
      card: "Staffs",
      data: {
        count: 400,
        change: +2.4,
      },
    },
  ];

  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="flex-1 flex flex-col gap-4 bg-white text-black drop-shadow-xl p-2">
      <div className="flex w-full justify-between gap-2">
        {users.map((user, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow p-4 py-6 rounded-md flex-1"
            >
              <p>{user.card}</p>
              <div className="flex gap-4">
                <p>{user.data.count}</p>
                <div className="w-fit gap-1 flex items-center">
                  <p className="text-[10px] leading-6">{user.data.change}</p>
                  {user.data.change > 0 ? (
                    <ArrowUpwardSharpIcon
                      sx={{ fontSize: "15px", color: "green" }}
                    />
                  ) : (
                    <ArrowDownwardSharpIcon
                      sx={{ fontSize: "15px", color: "red" }}
                    />
                  )}
                </div>
              </div>
              <p className="text-xs">Compared to last month</p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-fit p-4 shadow">
        <p className="text-sm">Clients Analytics</p>
        <LineChart
          height={300}
          series={[{ data: pData, label: "pv" }]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          leftAxis={null}
          grid={{
            horizontal: true,
            vertical: true,
          }}
          sx={{
            [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
          }}
        ></LineChart>
      </div>
    </div>
  );
};

export default Statistics;
