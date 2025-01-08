import { API } from "../utils/connection"
import { getUser } from "../utils/isAuthorized"


export const getTestProgressesBySubTopicId = async ({ params }: any) => {
    const user = getUser()
    const res = await API.get(`learner/test-progress/?topicId=${params.topicId}&userId=${user.id}`) 
    return res.data
}