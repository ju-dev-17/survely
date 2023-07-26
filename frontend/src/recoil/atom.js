import { atom } from 'recoil';

export const surveyFormDataState = atom({
    key: 'surveyFormData',
    default: {
        title: "",
        description: ""
    },
});