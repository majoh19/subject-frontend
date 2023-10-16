import { axiosConfig } from '../configuration/axiosConfig'

const getSubject = () => {
    return axiosConfig.get('subjects', {
        headers: { 'Content-Type': 'application/json' }
    })
}

export { getSubject }