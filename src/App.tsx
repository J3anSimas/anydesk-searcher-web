import { useEffect, useState } from 'react'
import { api } from './Api'
import './css/tailwind.css'
interface DTO {
    id: string,
    anydeskid: string,
    username: string,
    computername: string
}
function App() {
    const [data, setData] = useState<Array<DTO>>([])
    useEffect(() => {
        async function getData() {
            const dat = await api.get('/')
            setData(dat.data)
        }
        getData()
    }, [])
    return (
        <div className="flex w-screen h-screen items-center justify-center">
            <div className="flex flex-col gap-2">
                <input className="border-2 border-[#909090] rounded-md h-12 outline-none pl-4" />
                <div className="h-[600px] p-2 rounded-md border-2 border-[#909090] flex flex-col">
                    <span className="flex justify-around py-2">
                        <span className="w-[200px] text-center">Anydesk</span>
                        <span className="w-[200px] text-center">Usuario</span>
                        <span className="w-[200px] text-center">Computador</span>
                    </span>
                    <ul>
                        {
                            data.map(d => (
                                <li onClick={() => console.log(`Clicked ${d.anydeskid} ${d.username}, ${d.computername}`)}key={d.id} className="flex justify-around text-zinc-500">
                                    <span className="w-[200px] text-center">{d.anydeskid}</span>
                                    <span className="w-[200px] text-center">{d.username}</span>
                                    <span className="w-[200px] text-center">{d.computername}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App
