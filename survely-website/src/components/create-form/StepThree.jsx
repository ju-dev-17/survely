/* eslint-disable react/prop-types */

import {useRecoilValue} from "recoil";
import {surveyFormPermissionState} from "../../recoil/atom.js";
import PermissionCard from "./PermissionCard.jsx";

export default function StepThree({ currentStep, prevStep, nextStep }) {
    const surveyPermissions = useRecoilValue(surveyFormPermissionState);

    if (currentStep !== 3) {
        return <></>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Step 3: Confirm Form</h1>
            <div className="w-full flex-1 flex flex-col gap-5 py-5">
                <span className="font-bold text-2xl">Survey Permissions</span>
                <PermissionCard
                    toggle={surveyPermissions.hasRestrictedAccess}
                    handleToggle={prevStep}
                    name="hasRestrictedAccess"
                    title="Restricted Access"
                    description="Only people you've invited via email will have access to this survey. Otherwise, everyone can take part in the survey via a link."
                />
                <PermissionCard
                    toggle={surveyPermissions.expire}
                    handleToggle={prevStep}
                    name="expire"
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
                <button onClick={nextStep} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Confirm
                </button>
            </div>
        </div>
    );
}