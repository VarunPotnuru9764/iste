import Image from 'next/image'

export interface Member {
  name: string,
  sig: string | null,
  post: string | null,
  image: string | null,
}

const MemberCard = ({name, sig, post, image} : Member) => {
  return (
    <div className='p-2 rounded-xl h-[300px] w-[260px] border border-gray-800 flex flex-col items-center backdrop-blur-xs'>

        <div className='h-[225px]'><Image alt='profile' src={image || "/tparentastro.png"} width={230} height={200} className='rounded-full' /></div>
        <div className='rounded-b-md w-[240px] h-full px-2 py-1 flex flex-col justify-between mt-3'>
            <div>
                <p className='text-base text-center font-bold'>{(name == "" || !name) ? "Exo Planet" : name}</p>
            </div>
            <div className='flex justify-between mt-1'>
                <p className='text-xs text-gray-400 font-semibold'>{(sig == "" || !sig) ? "SIG" : sig}</p>
                <p className='text-xs text-gray-400 font-semibold'>{(post == "" || !post) ? "Team" : post}</p>
            </div>
        </div>

    </div>
  )
}

export default MemberCard