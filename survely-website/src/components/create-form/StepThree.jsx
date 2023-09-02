/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import toast from "react-hot-toast";
import Datepicker from "react-tailwindcss-datepicker";

import { surveyEmailListState, surveyExpirationState, surveyFormPermissionState } from "../../recoil/atom.js";
import PermissionCard from "../ui/PermissionCard.jsx";
import Modal from "../ui/Modal.jsx";
import EmailTag from "./EmailTag.jsx";

export default function StepThree({ currentStep, prevStep, createForm }) {
    const surveyPermissions = useRecoilValue(surveyFormPermissionState);

    const [surveyEmailList, setSurveyEmailList] = useRecoilState(surveyEmailListState);
    const [expiration, setExpiration] = useRecoilState(surveyExpirationState);

    const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
    const [email, setEmail] = useState("");

    if (currentStep !== 3) {
        return <></>;
    }

    const handleEmailInputKeyDown = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        if (surveyEmailList.includes(email)) {
            toast.error("E-Mail already exists");
            return;
        }

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast.error("Enter a valid E-Mail");
            return;
        }

        setSurveyEmailList([
            ...surveyEmailList,
            email
        ]);

        setEmail("");
        setIsEmailModalVisible(false);

        toast.success("E-Mail successfully added to list");
    }

    const handleExpirationChange = (newValue) => {console.log("newValue:", newValue);
        setExpiration(newValue);
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Step 3: Confirm Form</h1>
            <div className="w-full flex-1 flex flex-col gap-5 pb-5">
                <span className="font-bold text-xl">Survey Permissions</span>
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
                {surveyPermissions.hasRestrictedAccess && (
                    <>
                        <span className="font-bold text-xl">Invite People</span>
                        <button onClick={() => setIsEmailModalVisible(true)} className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Person
                        </button>
                        {surveyEmailList.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                                {surveyEmailList.map((email, i) => (
                                    <EmailTag key={i} email={email} />
                                ))}
                            </div>
                        )}
                        <Modal
                            title="Add E-Mail to list"
                            isVisible={isEmailModalVisible}
                            setIsVisible={setIsEmailModalVisible}
                        >
                            <input
                                className="bg-background w-full p-3 border-2 rounded-lg focus:outline-none"
                                type="email"
                                placeholder="E-Mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                onKeyDown={handleEmailInputKeyDown}
                            />
                        </Modal>
                    </>
                )}
                {surveyPermissions.expire && (
                    <>
                        <span className="font-bold text-xl">Expiration Date</span>
                        <div className="border-2 rounded-lg">
                            <Datepicker
                                useRange={false}
                                primaryColor="teal"
                                minDate={new Date()}
                                value={expiration}
                                onChange={handleExpirationChange}
                            />
                        </div>
                    </>
                )}
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
                    onClick={createForm}
                >
                    Confirm
                </button>
            </div>
        </>
    );
}