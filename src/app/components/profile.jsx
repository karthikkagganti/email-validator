
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers'

export default async function Profile({session, id}){

    const handleSignUp = async(formData)=>{
        'use server'

        const supabase = createServerComponentClient({ cookies })
        const payloadData ={}
        payloadData.fullName = formData.get('fullname');
        payloadData.mobile = formData.get('mobile');
        payloadData.email = formData.get('email');
        payloadData.job_role = formData.get('jobrole');
        payloadData.gender = formData.get('gender');
        console.log(payloadData);
        await supabase.from('profile').insert({fullName: payloadData.fullName, mobile: payloadData.mobile, email: payloadData.email, job_role: payloadData.job_role, gender: payloadData.gender, user_id: id });

        revalidatePath('/')
    }
    return (
        <div className='text-black mt-3'>
            <div className='font-medium text-center text-sm sm:text-2xl mb-3'>It seems like its your first time here, Please fill the Below Details to Continue...</div>
            <div className="flex flex-col gap-3 p-4">
                <form className="p-6 border-2 border-black rounded-lg text-sm" action={handleSignUp}>
                    <div className="flex flex-col gap-1 mt-2">
                        <label className="text-gray-700">Full Name<em className="text-red-500">*</em></label>
                        <input type="text" required className="border border-gray-300 rounded-md w-full p-2 text-black" name="fullname"/>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <label className="text-gray-700">Mobile Number<em className="text-red-500">*</em></label>
                        <input type="number" required className="border border-gray-300 rounded-md w-full p-2 text-black" name="mobile"/>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <label className="text-gray-700">Email<em className="text-red-500">*</em></label>
                        <input type="email" required value={session?.user.email} readOnly className="border border-gray-300 rounded-md w-full p-2 text-black" name="email"/>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <label className="text-gray-700">Job Role<em className="text-red-500">*</em></label>
                        <input type="text" required className="border border-gray-300 rounded-md w-full p-2 text-black" name="jobrole"/>
                    </div>
                    <div className="mt-2 flex flex-col gap-1">
                        <label className="text-gray-700">Gender<em className="text-red-500">*</em></label>
                        <select required className="border border-gray-300 rounded-md w-full p-2 text-black" name="gender" placeholder="Select Gender">
                            <option disabled>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Rather Not Say</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-3 mt-4 py-4">
                    <button type="submit" className="bg-blue-500 text-white rounded-md w-full p-2">Submit</button>
                    <button type="reset" className="bg-black text-white rounded-md w-full p-2">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}