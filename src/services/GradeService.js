import { axiosConfig } from '../configuration/axiosConfig'

const getGrade = () => {
    return axiosConfig.get('grades', {
        headers: { 'Content-Type': 'application/json' }
    })
}

export { getGrade }