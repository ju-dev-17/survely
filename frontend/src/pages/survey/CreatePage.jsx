/* eslint-disable react/prop-types */
import { useState } from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {surveyFormDataState} from "../../recoil/atom.js";
import "survey-core/defaultV2.min.css";

import Navbar from "../../components/Navbar.jsx";
import checkmark from "../../assets/checkmark-outline.svg";

function StepBullet({ currentStep, step }) {
    return (
        <div className='rounded-full h-10 w-10 flex items-center justify-center mr-2 bg-primary text-white'>
            {currentStep > step ? <img src={checkmark} alt="Checkmark" width={20} height={20} /> : <>{step}</>}
        </div>
    );
}

function StepOne({ currentStep, nextStep }) {
    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);

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
                <button className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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

function AddFieldModal({ isVisible }) {
    if (!isVisible) {
        return <></>;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50" />

            <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50">
                <div className="modal-content py-4 text-left px-6">
                    <div className="modal-header">
                        <h3 className="text-xl font-semibold">Add Field</h3>
                    </div>
                    <div className="modal-body mt-2">
                        <p>Modal content goes here.</p>
                    </div>
                    <div className="modal-footer mt-4 flex justify-end gap-3">
                        <button
                            className="bg-accent text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                        <button
                            className="bg-primary text-white font-bold py-2 px-4 rounded"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CreatePage() {
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
                        <div className="w-full p-8 h-full flex flex-col gap-3">
                            <span className="text-2xl font-bold">{surveyFormData.title}</span>
                            <span className="text-xl">{surveyFormData.description}</span>
                        </div>
                    </div>
                </div>
                <AddFieldModal isVisible={false} />
            </div>
        </main>
    );
}

export default CreatePage;