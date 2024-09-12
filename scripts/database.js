export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Doctor Discombobulator",
            power: "Confusion and Forgetfulness"
        },
        {
            id: 2,
            name: "The Procrastinator",
            power: "Creates time-wasting portals"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}

