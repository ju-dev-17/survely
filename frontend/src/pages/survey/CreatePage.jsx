/* eslint-disable react/prop-types */
import { useState } from "react";

import Navbar from "../../components/Navbar.jsx";
import checkmark from "../../assets/checkmark-outline.svg";

function StepOne({ currentStep, nextStep }) {
    if (currentStep !== 1) {
        return <></>;
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-2xl font-bold mb-4">Step 1: Design Form</h1>
            <div className="w-full flex-1 flex flex-col gap-5">
                <input type="text" name="title" placeholder="Enter a title" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <textarea name="title" placeholder="Enter a description" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
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
            <div className="flex justify-between">
                <button
                    className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={prevStep}
                >
                    Back
                </button>
                <button
                    className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            <div className="flex justify-between">
                <button
                    className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={prevStep}
                >
                    Back
                </button>
                <button onClick={nextStep} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Confirm
                </button>
            </div>
        </div>
    );
}

function CreatePage() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    }

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    return (
        <main className="bg-background text-text min-h-screen w-full flex flex-col items-center select-none overflow-y-hidden">
            <Navbar isAuth />
            <div className="flex justify-around w-full px-32 flex-1">
                <div className="border-2 border-b-0 rounded-b-none rounded-lg w-full flex-1">
                    <div className="flex justify-center items-center h-full">
                        <div className="w-full p-8 h-full">
                            <div className="mb-4">
                                {/* Schrittleiste */}
                                <div className="flex items-center mb-2">
                                    <div
                                        className='rounded-full h-10 w-10 flex items-center justify-center mr-2 bg-primary text-white'
                                    >
                                        {currentStep > 1 ? (
                                            <img src={checkmark} alt="Checkmark" width={20} height={20} />
                                        ) : <>1</>}
                                    </div>
                                    <div
                                        className={`rounded-full h-10 w-10 flex items-center justify-center mr-2 ${
                                            currentStep >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'
                                        }`}
                                    >
                                        {currentStep > 2 ? (
                                            <img src={checkmark} alt="Checkmark" width={20} height={20} />
                                        ) : <>2</>}
                                    </div>
                                    <div
                                        className={`rounded-full h-10 w-10 flex items-center justify-center ${
                                            currentStep >= 3 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'
                                        }`}
                                    >
                                        {currentStep > 3 ? (
                                            <img src={checkmark} alt="Checkmark" width={20} height={20} />
                                        ) : <>3</>}
                                    </div>
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
            </div>
        </main>
    );
}

export default CreatePage;