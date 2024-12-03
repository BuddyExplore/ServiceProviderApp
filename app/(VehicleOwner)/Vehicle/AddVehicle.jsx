import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import SelectVehicleScreen from "./SelectVehicleScreen";
import SelectProvinceScreen from "./SelectProvinceScreen";
import SelectVehicleDocumentScreen from "./SelectVehicleDocumentScreen";
import ApproveDocumentUseScreen from "./ApproveDocumentUseScreen";

const AddVehicle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [rcBook, setRcBook] = useState(null);
  const [revenueLicense, setRevenueLicense] = useState(null);
  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    console.log(selectedVehicle)
  };
  console.log(
    currentStep,
    selectedVehicle,
    selectedProvince,
    rcBook,
    revenueLicense
  );
  const data = [
    {
      label: "Step 1",
      content: (
        <SelectVehicleScreen
          setVehicle={setSelectedVehicle}
          selectedVehicle={selectedVehicle}
          goToNextStep={goToNextStep}
        />
      ),
    },
    {
      label: "Step 2",
      content: (
        <SelectProvinceScreen
          setProvince={setSelectedProvince}
          selectedProvince={selectedProvince}
          goToNextStep={goToNextStep}
        />
      ),
    },
    {
      label: "Step 3",
      content: (
        <SelectVehicleDocumentScreen
          goToNextStep={goToNextStep}
          setRcBook={setRcBook}
          setRevenueLicense={setRevenueLicense}
        />
      ),
    },
    {
      label: "Step 4",
      content: (
        <ApproveDocumentUseScreen
          rcBook={rcBook}
          revenueLicense={revenueLicense}
          goToNextStep={goToNextStep}
        />
      ),
    },
  ];

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <ProgressSteps
        activeStep={currentStep}
        borderWidth={2}
        borderStyle="dashed"
        activeStepIconBorderColor="#70D6E3"
        activeLabelColor="#70D6E3"
        completedStepIconColor="#70D6E3"
        completedProgressBarColor="#70D6E3"
        activeStepNumColor="#70D6E3"
      >
        {data.map((step, index) => (
          <ProgressStep
            key={index}
            label={step.label}
            nextBtnStyle={AddVehicleScreenStyles.nextBtnStyle}
            nextBtnTextStyle={AddVehicleScreenStyles.nextBtnTextStyle}
            previousBtnStyle={AddVehicleScreenStyles.previousBtnStyle}
            previousBtnTextStyle={AddVehicleScreenStyles.previousBtnTextStyle}
            onNext={currentStep === index ? goToNextStep : null}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ textAlign: "left", color: "#0D0D0D", fontSize: 12 }}
              >
                {step.label} of 4
              </Text>
              <View>{step.content}</View>
            </View>
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
};

const AddVehicleScreenStyles = StyleSheet.create({
  nextBtnStyle: {
    backgroundColor: "#70D6E3",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 5,
    fontStyle: "italic",
    display: "none",
  },
  nextBtnTextStyle: {
    display: "none",
    color: "#FFF",
    fontWeight: "700",
  },
  previousBtnStyle: {
    paddingVertical: 14,
  },
  previousBtnTextStyle: {
    color: "#70D6E3",
    fontWeight: "700",
  },
});

export default AddVehicle;
