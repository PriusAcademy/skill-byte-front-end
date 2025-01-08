import { PayloadAction } from '../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";

export interface LearnerType {
        id: string;
        type: string;
        majors: MajorType[];
        specializations: SpecializationType[];
        categories: CategoryType[];
        topics: TopicType[];
        subTopics: { id: string; name:string,topicId:string,testStartTime:string | null,testEndTime:string|null}[]
}

export interface MajorType {
    learnerId: string;
    id: string;
    name: string
    src:string
}

export interface SpecializationType {
    id: string;
    name: string;
    majorId:string
}

export interface CategoryType {
    id: string;
    specializationId: string;
    name: string;
    src:string
}

export interface TopicType {
    id: string;
    categoryId: string;
    name : string
}

export interface ReceivedValueType {
    type: string;
    id: string;
    majors: {
        id: string;
        learnerId: string;
        name: string;
        src : string
        specializations: {
            id: string;
            name: string;
            majorId: string;
            categories: {
                name: string;
                id: string;
                src: string;
                specializationId: string;
                topics: {
                    id: string;
                    name: string;
                    categoryId: string
                    subTopics: {
                        name: string;
                        id: string;
                        topicId: string;
                        testStartTime: string | null;
                        testEndTime : string | null
                    }
                }[]
            }[]
        }[]
        }[]
}

export const learnerSlice = createSlice({
    name: 'learner',
    initialState: {
     value : [] as LearnerType[]
    },
    reducers: {
        setValue: (state, action: PayloadAction<ReceivedValueType[]>) => {
            if (state.value.length == 0) {
            for (const receivedData of action.payload) {
                const fullMajors = receivedData.majors
                const majors = fullMajors.map((item) => ({ id: item.id, learnerId: item.learnerId, name: item.name,src:item.src }))

                const fullSpecializations = fullMajors.flatMap(major => major.specializations)
                const specializations = fullSpecializations.map(item => ({ id: item.id, name: item.name, majorId: item.majorId }))

                const fullCategories = fullSpecializations.flatMap(special => special.categories)
                const categories = fullCategories.map((item) => ({ id: item.id, name: item.name, specializationId: item.specializationId,src:item.src }))

                const fullTopics = fullCategories.flatMap(item => item.topics)
                const topics = fullTopics.map(item => ({ id: item.id, name: item.name, categoryId: item.categoryId }))
                
                const subTopics = fullTopics.flatMap(item=>item.subTopics)
                state.value.push({
                    id : receivedData.id,
                    majors,
                    specializations,
                    categories,
                    topics,
                    type: receivedData.type,
                    subTopics : subTopics
                })
                }
            }
    
        }
    }
})



export const { setValue } = learnerSlice.actions
export default learnerSlice.reducer