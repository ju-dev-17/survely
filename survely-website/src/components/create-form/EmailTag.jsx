/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

import { surveyEmailListState } from "../../recoil/atom.js";
import close from "../../assets/close-outline.svg";

export default function EmailTag({ email }) {
    const [surveyEmailList, setSurveyEmailList] = useRecoilState(surveyEmailListState);

    const handleDelete = () => {
        const updatedSurveyEmailList = surveyEmailList.filter(
            surveyEmail => surveyEmail !== email
        );

        setSurveyEmailList(updatedSurveyEmailList);
        toast.success("E-Mail successfully removed from list")
    }

    return (
        <span className="p-2 rounded-lg bg-accent text-white text-sm flex">
            {email}
            <img
                className="cursor-pointer"
                onClick={handleDelete}
                src={close}
                alt="Delete E-Mail"
                width={24}
                height={24}
            />
        </span>
    );
}
