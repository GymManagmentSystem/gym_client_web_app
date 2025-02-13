import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useWorkoutCount from "../../store/useWorkoutCount";
import useAnimatedInView from "../../hooks/useAnimatedInView";
import { motion, useInView } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const MotionBox = motion.create(Box);

const DoughnutChart = () => {
  const { completed, totalWorkouts } = useWorkoutCount();

  const data = {
    labels: ["Completed", "Not Complete"],
    datasets: [
      {
        data: [completed, totalWorkouts - completed],
        backgroundColor: ["#F1B900", "#FEE9A2"],
        borderColor: ["#F1B900", "#FFECB0"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Prevent unwanted shrinking
    responsive: true, // Ensure it resizes properly
  };

  const chartRef = useAnimatedInView().ref;
  const isChartInView = useInView(chartRef, { margin: "-100px" });

  return (
    <MotionBox
    ref={chartRef}
    mt={5}
    ml={{ lg: 20 }}
    width="280px" 
    height="280px"
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={isChartInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Doughnut data={data} options={options}></Doughnut>
    </MotionBox>
  );
};

export default DoughnutChart;
