import { supabase, supabseClient } from ".."

export async function sendMagicLink(email, setData) {
    try {
        const response = await supabseClient.auth.signInWithOtp({
            email: email,
            options: {
              emailRedirectTo: `${location.origin}/auth/callback`,
            },
          }).then((res) => console.log(res?.status))
        if(response?.status == 200) {
            toast.success(`Magic link sent to ${email}`)
            console.log(response)
            setData(response)
        }
    } catch (e) {
        console.log(e)
    }
}