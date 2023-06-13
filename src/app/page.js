import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Profile from './components/profile';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession();

  const { data } = await supabase.from("profile").select().match({ user_id: session.user.id });
  console.log("data", data, session.user.id)

  const response = await supabase.from("files-data").select();
  const responseData = response.data;
  console.log("res",responseData)
  return (
    <div className='h-full bg-white'>
      <div>
        <div className='font-bold text-xl text-center sm:text-2xl text-black py-3'>Welcome {session?.user.email}</div>
        {
          data.length==0 ?
            <Profile session={session} id={session.user.id}/> :
            (
            <div >
              <span className='font-bold text-xl text-center sm:text-2xl text-black'>Here are the Available PDFs</span>
              <div className="grid grid-cols-1 gap-3">
              {responseData?.map((item, index) => {
                        return (
                            <div key={index} className="py-2 gap-3 px-3 flex justify-evenly text-black">
                                <p className="w-5">{item?.id}</p>
                                <p className="w-1/4">{item?.title}</p>
                                <a href={item?.path} className="flex-1 truncate text-[#0e6fff]" target="_blank"><p>{item?.path}</p></a>
                            </div>
                        )
                    })}
              </div>
            </div>
            )
        }
      </div>
    </div>
  )
}
