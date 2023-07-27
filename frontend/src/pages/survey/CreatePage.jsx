/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { addFieldModalState, surveyFormDataState } from "../../recoil/atom.js";
import { Survey } from "survey-react-ui";
import 'survey-core/modern.min.css';

import Navbar from "../../components/Navbar.jsx";
import checkmark from "../../assets/checkmark-outline.svg";
import close from "../../assets/close-outline.svg"
import useSurveyModel from "../../hooks/useSurveyModel.jsx";

function StepBullet({ currentStep, step }) {
    return (
        <div className='rounded-full h-10 w-10 flex items-center justify-center mr-2 bg-primary text-white'>
            {currentStep > step ? <img src={checkmark} alt="Checkmark" width={20} height={20} /> : <>{step}</>}
        </div>
    );
}

function StepOne({ currentStep, nextStep }) {
    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);
    const setIsVisible = useSetRecoilState(addFieldModalState);

    if (currentStep !== 1) {
        return <></>;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setSurveyFormData({
            ...surveyFormData,
            [name]: value,
        });
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-2xl font-bold mb-4">Step 1: Design Form</h1>
            <div className="w-full flex-1 flex flex-col gap-5">
                <input required maxLength={255} value={surveyFormData.title} onChange={handleChange} type="text" name="title" placeholder="Enter a title" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <textarea required maxLength={255} value={surveyFormData.description} onChange={handleChange} name="description" placeholder="Enter a description" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <button onClick={() => setIsVisible(true)} className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add field
                </button>
            </div>
            <button
                className="bg-primary text-white font-bold py-2 px-4 mb-12 rounded focus:outline-none focus:shadow-outline"
                onClick={nextStep}
            >
                Next
            </button>
        </div>
    )
}

function StepTwo({ currentStep, prevStep, nextStep }) {
    if (currentStep !== 2) {
        return <></>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Step 2: Check Permissions</h1>
            <div className="flex justify-between gap-3 w-full">
                <button
                    className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={prevStep}
                >
                    Back
                </button>
                <button
                    className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={nextStep}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

function StepThree({ currentStep, prevStep, nextStep }) {
    if (currentStep !== 3) {
        return <></>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Step 3: Confirm Form</h1>
            <div className="flex justify-between gap-3 w-full">
                <button
                    className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    onClick={prevStep}
                >
                    Back
                </button>
                <button onClick={nextStep} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Confirm
                </button>
            </div>
        </div>
    );
}

function AddFieldModal() {
    const [isVisible, setIsVisible] = useRecoilState(addFieldModalState);

    if (!isVisible) {
        return <></>;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
            <div className="modal-container w-full max-w-screen-xl mx-auto px-6 z-50">
                <div className="flex justify-center p-4 px-3 py-10">
                    <div className="w-full max-w-md">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="text-gray-700 text-lg font-semibold py-2 px-2 flex justify-between items-center">
                                <span>Choose a field</span>
                                <img onClick={() => setIsVisible(false)} className="cursor-pointer" src={close} alt="Close Modal" width={32} height={32} />
                            </div>
                            <div className="flex items-center bg-gray-200 rounded-md">
                                <div className="pl-2">
                                    <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24">
                                        <path className="heroicon-ui"
                                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </div>
                                <input
                                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    id="search" type="text" placeholder="Search fields" />
                            </div>
                            <div className="py-3 text-sm">
                                <div onClick={() => setIsVisible(false)} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                    <div className="flex-grow font-medium px-2">Simple Question</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CreatePage() {
    const survey = useSurveyModel();
    const surveyFormData = useRecoilValue(surveyFormDataState);
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    }

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    return (
        <main className="bg-background text-text min-h-screen w-full flex flex-col items-center select-none overflow-y-hidden">
            <Navbar isAuth={false} />
            <div className="flex justify-around w-full px-32 flex-1">
                <div className="border-2 border-b-0 rounded-b-none rounded-lg w-full flex-1">
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full p-8 h-full">
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <StepBullet currentStep={currentStep} step={1} />
                                    <StepBullet currentStep={currentStep} step={2} />
                                    <StepBullet currentStep={currentStep} step={3} />
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
                <div className="border-2 border-b-0 rounded-b-none rounded-lg w-full flex-1">
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full h-full flex flex-col">
                            <Survey model={survey} />
                        </div>
                    </div>
                </div>
                <AddFieldModal />
            </div>
        </main>
    );
}

export default CreatePage;