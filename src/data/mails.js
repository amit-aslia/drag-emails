import randomId from "random-id";

export default Object.freeze({
    inbox: {
        category: [
            {
                id: randomId(),
                title: "Lunch with detective",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false,
                path: 'inbox.category'
            },
            {
                id: randomId(),
                title: "New case files",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false,
                path: 'inbox.category'
            },
            {
                id: randomId(),
                title: "Forensics report from Ella",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: false,
                path: 'inbox.category'
            },
            {
                id: randomId(),
                title: "Pierce murder history files",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                isRead: true,
                path: 'inbox.category'
            }
        ],
        subCategory: {
            forensics: {
                category: [
                    {
                        id: randomId(),
                        title: "Blood report from Ohio crime scene",
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                        isRead: false,
                        path: 'inbox.subCategory.forensics.category'
                    }
                ]
            },
            homicide: {
                category: []
            },
            'case-files': {
                category: []
            }
        }
    },

    starred: {
        category: []
    },
    sent: {
        category: []
    },
    drafts: {
        category: [
            {
                id: randomId(),
                title: "Procurement of new devices",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                path: 'drafts.category'
            },
            {
                id: randomId(),
                title: "Party in office",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                path: 'drafts.category'
            }
        ]
    }
});