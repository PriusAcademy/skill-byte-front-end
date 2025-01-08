
import { API } from "../utils/connection"

const getLearners = async () => {

    const learners = await API.get('/learner/')
  return learners.data

}

export default getLearners