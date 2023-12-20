import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button onClick={() => signIn('google', {callBackUrl: "/"})}>Sign in With Google</button>
    </div>
  )
}
