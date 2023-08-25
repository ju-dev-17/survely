/* eslint-disable react/prop-types */

import PermissionCard from "./PermissionCard.jsx";

export default function StepTwo({ currentStep, prevStep, nextStep }) {
    if (currentStep !== 2) {
        return <></>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Step 2: Permission Check</h1>
            <div className="w-full flex-1 flex flex-col gap-5 py-5">
                <PermissionCard
                    title="Restricted Access"
                    description="Only people you've invited via email will have access to this survey. Otherwise, everyone can take part in the survey via a link."
                />
                <PermissionCard
                    title="Expiration"
                    description="Define a expiration date or set it to no expiration. Otherwise, the survey will expire after 7 days."
                />
            </div>
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