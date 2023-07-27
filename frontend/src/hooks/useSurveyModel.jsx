import { useEffect } from "react";
import {Model} from "survey-core";
import {useRecoilValue} from "recoil";

import json from "../pages/survey/json.js";
import { surveyFormDataState } from "../recoil/atom.js";

function useSurveyModel() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const survey = new Model(json);
    const surveyFormData = useRecoilValue(surveyFormDataState);

    useEffect(() => {
        json.pages[0].name = surveyFormData.title;
        json.pages[0].title = surveyFormData.title;
        json.pages[0].description = surveyFormData.description;
        json.pages[0].elements = surveyFormData.fields;
    }, [survey, surveyFormData]);

    survey.mode = "display";

    return survey;
}

export default useSurveyModel;