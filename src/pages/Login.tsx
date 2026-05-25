import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (username === "admin" && password === "admin") {
            login("token_test")
            navigate("/dashboard")
        } else {
            setErrorMsg("Username or Passowrd is incorrect")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4 text-gray-800 dark:text-stone-300">
            <form onSubmit={handleLogin} className="w-full max-w-125 bg-white dark:bg-zinc-900 p-6 shadow rounder space-y-4 border-4 border-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <div className="">
                    <Label htmlFor="username">Username</Label>
                    <input className="border-2"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="">
                    <Label htmlFor="password">Password</Label>
                    <input className="border-2"
                        id="password"
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMsg && (
                    <p>{errorMsg}</p>
                )}
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}