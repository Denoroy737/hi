import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Input } from '@nextui-org/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Signup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, [router, router.query]);
  
  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { name, email, password };
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill all the fields");
    } else {
      const res = await fetch("http://localhost:3000/api/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        toast.error(json.message);
      } else {
        toast.success(json.message);
        router.push('/login');
      }
    }
  };
  
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <ToastContainer />
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href="/login"><a className="font-medium text-indigo-600 hover:text-indigo-500"> Login </a></Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm ">
              <div>
                <Input clearable label="Name" placeholder="Name" onChange={e => setName(e.target.value)} type="text" width={400} />
              </div>
              <div>
                <Input clearable label="Email" placeholder="Email" onChange={e => setEmail(e.target.value)} type="email" width={400} />
              </div>
              <div>
                <Input clearable label="Password" placeholder="Password" onChange={e => setPassword(e.target.value)} type="password" width={400} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div>
--+            </div>

            <div>
              <button type="submit" onClick={HandleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Signup
