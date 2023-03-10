import { createClient } from 'contentful';
import React from "react";

const useContentfulAnimals = () => {
    const client = createClient({
        space: process.env.REACT_APP_API_SPACE_ID,
        accessToken: process.env.REACT_APP_API_TOKEN,
        host: process.env.REACT_APP_HOST
    });
    const getAnimals = async () => {
        try {
            const res = await client.getEntries({
                content_type: "animal",
                select: "fields"
            })
            const filterRes = res.items.map((item) => {
                const photo = item.fields.photo.fields;
                return {
                    ...item.fields,
                    photo
                }
            })
            return filterRes;
            console.log(filterRes);
        } catch (error) {
            console.log("Error fetching contentful data", error);
        }
    };
    return { getAnimals };
}
export default useContentfulAnimals;