import { API } from "../utils/connection"


export const getQuestionsBySubTopicId = async ({ params }: any) => {
    const response = await API.get(`/learner/673310829906f907a071aa41/subTopic/${params.subTopicId}/question`)
    return response.data || []
}