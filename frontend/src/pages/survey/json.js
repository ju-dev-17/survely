const json = {
    "pages": [
        {
            "name": "page1",
            "title": "Page 1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Question 1"
                },
                {
                    "type": "panel",
                    "name": "panel1",
                    "title": "Panel 1",
                    "showNumber": true,
                    "showQuestionNumbers": "onpanel",
                    "innerIndent": 1,
                    "elements": [
                        {
                            "type": "text",
                            "name": "panel1-question1",
                            "title": "Panel 1, nested question 1"
                        },
                        {
                            "type": "text",
                            "name": "panel1-question2",
                            "title": "Panel 1, nested question 2"
                        }
                    ]
                }
            ]
        }
    ],
    "showPageNumbers": false
}

export default json;