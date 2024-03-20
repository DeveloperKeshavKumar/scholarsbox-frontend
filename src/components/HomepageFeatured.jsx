import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { Project } from './Project';

export const HomepageFeatured = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Fetch project data
        setLoading(false);
    }, [])


    return (
        <div>
            <div className='w-11/12 max-w-5xl m-auto mt-12 '>
                <h3 className='text-2xl font-semibold text-left '>Featured Projects</h3>
                {loading ? (
                    <Spinner />
                ) :
                    <div className='w-full mx-auto mt-5 flex flex-wrap gap-1'>
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                    </div>

                }
            </div>

        </div>
    )
}
