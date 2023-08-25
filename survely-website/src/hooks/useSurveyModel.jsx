import { useEffect, useState } from "react";
import { Model } from "survey-core";
import { useRecoilValue } from "recoil";

import starterSurvey from "../json/starterSurvey.js";
import { surveyFormDataState } from "../recoil/atom.js";

export default function useSurveyModel() {
    const [jsonState, setJsonState] = useState(starterSurvey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const survey = new Model(jsonState);
    const surveyFormData = useRecoilValue(surveyFormDataState);

    useEffect(() => {
        // noinspection JSCheckFunctionSignatures
        setJsonState(prevState => ({
            ...prevState,
            pages: [
                {
                    ...prevState.pages[0],
                    name: surveyFormData.title,
                    title: surveyFormData.title,
                    description: surveyFormData.description,
                    elements: surveyFormData.fields
                }
            ]
        }));
    }, [surveyFormData]);

    survey.mode = "display";

    return survey;
}
