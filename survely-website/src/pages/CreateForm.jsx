import { useState } from "react";
import { Survey } from "survey-react-ui";
import 'survey-core/modern.min.css';

import StepCircle from "../components/create-form/StepCircle.jsx";
import useSurveyModel from "../hooks/useSurveyModel.jsx";
import StepOne from "../components/create-form/StepOne.jsx";
import StepTwo from "../components/create-form/StepTwo.jsx";
import StepThree from "../components/create-form/StepThree.jsx";

export default function CreateForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const survey = useSurveyModel();

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    }

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    const createForm = async () => {
        // TODO: Call the API
    }

    return (
        <div className="flex justify-around w-full h-full px-32">
            <div className="border-2 rounded-lg w-full flex-1">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full p-8 h-full">
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <StepCircle ownStep={1} currentStep={currentStep} />
                                <StepCircle ownStep={2} currentStep={currentStep} />
                                <StepCircle ownStep={3} currentStep={currentStep} />
                            </div>
                        </div>
                        <StepOne
                            currentStep={currentStep}
                            nextStep={nextStep}
                        />
                        <StepTwo
                            currentStep={currentStep}
                            prevStep={prevStep}
                            nextStep={nextStep}
                        />
                        <StepThree
                            currentStep={currentStep}
                            prevStep={prevStep}
                            createForm={createForm}
                        />
                    </div>
                </div>
            </div>
            <div className="border-2 rounded-lg w-full flex-1" style={{ wordBreak: 'break-word' }}>
                <Survey model={survey} />
            </div>
        </div>
    );
}
