import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import SelectVehicleScreen from "./SelectVehicleScreen";
import SelectProvinceScreen from "./SelectProvinceScreen";
import SelectVehicleDocumentScreen from "./SelectVehicleDocumentScreen";
import ApproveDocumentUseScreen from "./ApproveDocumentUseScreen";

const AddVehicle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedProvince, setSelectedProvince] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [rcBook, setRcBook] = useState(null);
  const [revenueLicense, setRevenueLicense] = useState(null);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

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
        <ApproveDocumentUseScreen
          setAmenities={setSelectedAmenities}
          selectedAmenities={selectedAmenities}
          goToNextStep={goToNextStep}
        />
      ),
    },
    {
      label: "Step 4",
      content: (
        <SelectVehicleDocumentScreen
          goToNextStep={goToNextStep}
          setRcBook={setRcBook}
          setRevenueLicense={setRevenueLicense}
        />
      ),
    },
  ];

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
    {currentStep > 0 && ( // Display icon only if not on the first step
      <TouchableOpacity style={styles.previousButton} onPress={goToPreviousStep}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
    )}
      <ProgressSteps
        activeStep={currentStep}
        borderWidth={2}
        borderStyle="dashed"
        activeStepIconBorderColor="#0078A1"
        activeLabelColor="#0078A1"
        completedStepIconColor="#0078A1"
        completedProgressBarColor="#0078A1"
        activeStepNumColor="#0078A1"
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
            onPrevious={currentStep === index ? null : goToPreviousStep} // Handle previous button action
          >
            <View style={styles.stepContent}>
              
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepText}>
                  {step.label} of 4
                </Text>
              </View>
              {step.content}
            </View>
          </ProgressStep>
        ))}
      </ProgressSteps>
    </View>
  );
};

const AddVehicleScreenStyles = StyleSheet.create({
  nextBtnStyle: {
    backgroundColor: "#0078A1",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 5,
  },
  nextBtnTextStyle: {
    color: "#FFF",
    fontWeight: "700",
  },
  previousBtnStyle: {
    display: "none", 
  },
  previousBtnTextStyle: {
    display: "none", 
  },
});

const styles = StyleSheet.create({
  stepContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  previousButton: {
    top: 20,
    bottom: 30,
    left: 20,
    zIndex: 1,
  },
  stepTextContainer: {
    marginBottom: 20,
  },
  stepText: {
    textAlign: "center",
    color: "#0D0D0D",
    fontSize: 12,
  },
});

export default AddVehicle;
