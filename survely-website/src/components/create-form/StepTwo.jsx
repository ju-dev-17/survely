/* eslint-disable react/prop-types */

export default function StepTwo({ currentStep, prevStep, nextStep }) {
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