import React, { useEffect, useState } from 'react'
import { getSubject } from '../services/SubjectService'

export default function Subject() {

    const [ subjects, setSubjects ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ query, setQuery ] = useState(true)

    const listSubjects = async () => {

        try {

            setLoading(true)
            setError(false)
            const { data } = await getSubject(query)
            console.log(data)
            setSubjects(data)
            setTimeout(() => setLoading(false), 500)
            
        } catch (error) {

            console.log(error)
            setLoading(false)
            setError(true)
            
        }

    }

    useEffect(() => {

        listSubjects()

    }, [query])

    const changeSwitch = () => {
        setQuery(!query)
    }

    return (
        <>
        <div className='table-responsive'>
            {
                loading
                ? (
                    <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </div>
                )
                : (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Number of Credits</th>
                                <th scope='col'>Teacher</th>
                                <th scope='col'>Prerequisite Subject</th>
                                <th scope='col'>Hours of Self-Work</th>
                                <th scope='col'>Hours of Directed Work</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => (
                                <tr key={subject._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{subject.name}</td>
                                    <td>{subject.creditsNumber}</td>
                                    <td>{subject.teacherName}</td>
                                    <td>{subject.prerequisiteSubject}</td>
                                    <td>{subject.amountHoursSelfWork}</td>
                                    <td>{subject.amountHoursDirectedWork}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
        </>
    )

}