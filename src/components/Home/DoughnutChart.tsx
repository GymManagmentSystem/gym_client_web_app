import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Completed", "Not Complete"],
    datasets: [
      {
        data: [5, 3],
        backgroundColor: ["#F1B900", "#FFECB0"],
        borderColor: ["#F1B900", "#FFECB0"],
      },
    ],
  };

  const options = {};
  return (
    <Box mt={5}  ml={{lg:20}}>
      <Doughnut data={data} options={options}></Doughnut>
    </Box>
  );
};

export default DoughnutChart;
