import { Box, Stack } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BMIChart = () => {
  const data = {
    labels: [
      "Underweight (< 18.5)",
      "Normal (18.5 - 22.9)",
      "Risk to Overweight (23 - 24.9)",
      "Overweight (25 - 29.9)",
      "Obese (30+)",
    ],
    datasets: [
      {
        data: [5, 5, 5, 5, 5],
        backgroundColor: [
          "#01D1FB",
          "#1BD60B",
          "#ECFF21",
          "#FF7512",
          "#D81313",
        ],
        borderColor: ["#01D1FB", "#1BD60B", "#ECFF21", "#FF7512", "#D81313"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    aspectRatio: 5, // for Adjust the size
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            // Access the label from the labels array using context.dataIndex
            const label = context.label;
            return label;
          },
        },
      },
      legend: {
        display:true,
      },
    },
  };

  return (
    <Box mt={5}>
      <Stack spacing={4} align="center" flex={1} flexDirection={'row'}>
        <Doughnut data={data} options={options}/>
       
      </Stack>
    </Box>
  );
};

export default BMIChart;
