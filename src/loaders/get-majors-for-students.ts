import { API } from "../utils/connection"


export const getMajorsForStudents = async () => {
    const response = await API.get(`/learner/673310829906f907a071aa41/major`)
    return response.data || []
}