import React, { useEffect, useState } from 'react'
import { getGrade } from '../services/GradeService'

export default function Grade() {

    const [ grades, setGrades ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [ query, setQuery ] = useState(true)

    const listGrades = async () => {

        try {

            setLoading(true)
            setError(false)
            const { data } = await getGrade(query)
            console.log(data)
            setGrades(data)
            setTimeout(() => setLoading(false), 500)
            
        } catch (error) {

            console.log(error)
            setLoading(false)
            setError(true)
            
        }

    }

    useEffect(() => {

        listGrades()

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
                                <th scope='col'>Student</th>
                                <th scope='col'>Subject</th>
                                <th scope='col'>Grade</th>
                                <th scope='col'>Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grades.map((grade, index) => (
                                <tr key={grade._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{grade.student}</td>
                                    <td>{grade.subject}</td>
                                    <td>{grade.grade}</td>
                                    <td>{grade.semester}</td>
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