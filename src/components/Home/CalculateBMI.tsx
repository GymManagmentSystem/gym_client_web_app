import { Box, Button, Input, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import HorizontalBar from "../HorizontalBar";
import { useState } from "react";

const CalculateBMI = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [BMI, setBMI] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);
  const [weightError, setWeightError] = useState<string | null>(null);
  const [BMIColor,setBMIColor] = useState<string>('#000');
  const [BMIText,setBMIText] = useState<string |null>(null)

  const handleSubmit = () => {
    setHeightError(null);
    setWeightError(null);

    if (!height) {
      setHeightError("Height is required");
    }
    if (!weight) {
      setWeightError("Weight is required");
    }
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const BMIValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(BMIValue);
      changeBMIColor(parseFloat(BMIValue))
      
    } else {
      setBMI(null);
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
    setBMI(null);
    setHeightError(null);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
    setBMI(null);
    setWeightError(null);
  };

  const changeBMIColor =(bmi:number)=>{
    if(bmi<18.5){
      setBMIColor("#01D1FB")//blue
      setBMIText('Underweight')
      
    }else if(bmi>=18.5 && bmi<22.9){
      setBMIColor("#1BD60B")//green
      setBMIText('Normal')

    }else if(bmi>=23 && bmi<24.9){
      setBMIColor("#ECFF21")//yellow
      setBMIText('Risk to Overweight')

    }else if(bmi>=25 && bmi<29.9){
      setBMIColor("#FF7512")//orange
      setBMIText('Overweight')

    }else if(bmi>=30){
      setBMIColor("#D81313")//red
      setBMIText('Obese')
    }else{
      setBMIColor("#000")//default
    }
  }

  return (
    <Box bg={"#fff"} m={2}>
      <HorizontalBar />
      <Text sx={titleText}>Calculate BMI</Text>
      <Stack flexDirection={{ base: "column", md: "row" }} pl={10} pr={10}>
        <Text sx={paragraphText} flex={1} lineHeight={6}>
          Knowing your BMI (Body Mass Index) is beneficial as it provides a
          quick assessment of whether your weight is within a healthy range for
          your height. It helps identify potential health risks associated with
          being underweight, overweight, or obese, such as heart disease,
          diabetes, and hypertension.
          
          <UnorderedList color="#000" fontSize={{ base: "12px", md: "16px", lg: "16px", xl: "18px" }}mt={2} lineHeight={8}>
        <ListItem>Underweight: BMI less than 18.5</ListItem>
        <ListItem>Normal Weight: BMI 18.5 - 22.9</ListItem>
        <ListItem>Risk to Overweight: BMI 23 - 24.9</ListItem>
        <ListItem>Overweight: BMI 25 - 29.9</ListItem>
        <ListItem>Obese: BMI 30 or greater</ListItem>
      </UnorderedList>
        </Text>
        
        <VStack flex={1} >
          <Text sx={inputText}>Height (in cm) </Text>
          <Input
            variant="unstyled"
            placeholder="Enter height"
            type="number"
            value={height}
            onChange={handleHeightChange}
            {...inputValues}
          />
        
          <Text sx={inputText}>Weight (in kg) </Text>
          <Input
            variant="unstyled"
            placeholder="Enter weight"
            type="number"
            value={weight}
            onChange={handleWeightChange}
            {...inputValues}
          />
         
          <Button
            colorScheme="#F1B900"
            variant="outline"
            {...submitButton}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          {heightError && <Text sx={errorText}>{heightError}</Text>}
          {weightError && <Text sx={errorText}>{weightError}</Text>}

          {BMI && (
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text sx={inputText}>BMI Value :</Text>
              <Text sx={{...BMIValueText,color:BMIColor}}>{BMI}({BMIText})</Text>
            </Stack>
          )}
        </VStack>
      </Stack>
   
    </Box>
  );
};

const titleText = {
  fontSize: { base: "18px", md: "22px", lg: "30px", xl: "30px" },
  fontWeight: "bold",
  color: "#000",
  textAlign: "center",
  mt: 5,
  mb: 5,
};

const paragraphText = {
  color: "#000",
  fontSize: { base: "12px", md: "16px", lg: "16px", xl: "18px" },
  textAlign: "justify",
};

const inputText = {
  color: "#000",
  fontWeight: "semibold",
  width: { base: "100%", md: "80%" },
};

const inputValues = {
  color: "#000",
  _placeholder: { color: "#B1B0AD" },
  bg: "#FFF8DF",
  height: "40px",
  width: { base: "100%", md: "80%" },
  p: 3,
};

const submitButton = {
  width: { base: "100%", md: "80%" },
  height: "40px",
  bg: "#fff",
  color: "#F1B900",
  fontWeight: "semibold",
  fontSize: { base: "16px", md: "18px", lg: "22px" },
  _hover: { color: "#fff", bg: "#F1B900" },
  mt: 3,
};

const BMIValueText = {
  fontSize: { base: "14px", md: "16px", lg: "18px" },
  fontWeight: "semibold",
};

const errorText = {
  color: "red",
  
};

export default CalculateBMI;
