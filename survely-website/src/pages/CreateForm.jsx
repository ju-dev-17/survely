import { useState } from "react";
import { Survey } from "survey-react-ui";
import 'survey-core/modern.min.css';
import { useRecoilState } from "recoil";

import StepCircle from "../components/create-form/StepCircle.jsx";
import Modal from "../components/ui/Modal.jsx";
import useSurveyModel from "../hooks/useSurveyModel.jsx";
import { surveyFormDataState, addFieldModalState } from "../recoil/atom.js";
import simpleQuestion from "../json/simpleQuestion.js";
import StepOne from "../components/create-form/StepOne.jsx";
import StepTwo from "../components/create-form/StepTwo.jsx";
import StepThree from "../components/create-form/StepThree.jsx";

export default function CreateForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);
    const [isModalVisible, setIsModalVisible] = useRecoilState(addFieldModalState);
    const survey = useSurveyModel();

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    }

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    const handleClick = () => {
        setSurveyFormData({
            ...surveyFormData,
            fields: [...surveyFormData.fields, simpleQuestion]
        });
        setIsModalVisible(false);
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
                            nextStep={nextStep}
                        />
                    </div>
                </div>
            </div>
            <div className="border-2 rounded-lg w-full flex-1" style={{ wordBreak: 'break-word' }}>
                <Survey model={survey} />
            </div>
            <Modal title="Choose a Form" isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <div onClick={handleClick} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium px-2">Simple Question</div>
                </div>
            </Modal>
        </div>
    );
}
