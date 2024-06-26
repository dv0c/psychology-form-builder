'use client'
import { FC, FormEvent, useState } from 'react'
import { Button } from './ui/button'
import { DeleteForm } from '@/actions/form'
import { useRouter } from 'next/navigation'
import { BiLoader } from 'react-icons/bi'

interface DeleteButtonProps {
    id: string
}

const DeleteButton: FC<DeleteButtonProps> = async ({ id }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        await DeleteForm(id).then(() => {
            setLoading(false);
            router.push('/')
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <Button type='submit' variant={'destructive'} disabled={loading}>Delete
                {loading && <BiLoader className='animate-spin ml-2' />}
            </Button>
        </form>
    )
}

export default DeleteButton