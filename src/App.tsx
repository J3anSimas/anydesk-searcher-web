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
  const [searchFilter, setSearchFilter] = useState('')
  useEffect(() => {
    async function getData() {
      const dat = await api.get('/')
      setData(dat.data)
    }
    getData()
  }, [])
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex flex-col gap-2 h-[80%]">
        <input autoFocus className="border-2 border-[#909090] rounded-md h-12 outline-none pl-4" onChange={e => setSearchFilter(e.target.value.toUpperCase())} />
        <div className="h-[100%] p-2 rounded-md border-2 border-[#909090] flex flex-col overflow-hidden">
          <span className="flex justify-around py-2 text-zinc-900 font-bold">
            <span className="w-[200px] text-center">Anydesk</span>
            <span className="w-[200px] text-center">Usuario</span>
            <span className="w-[200px] text-center">Computador</span>
          </span>
          <ul>
            {
              data.map(d => {
                if (d.username.toUpperCase().search(searchFilter) != -1 || d.computername.toUpperCase().search(searchFilter) != -1) {
                  return (

                    <li onClick={() => console.log(`Clicked ${d.anydeskid} ${d.username}, ${d.computername}`)} key={d.id} className="flex justify-around text-zinc-600">
                      <span className="w-[200px] text-center">{d.anydeskid}</span>
                      <span className="w-[200px] text-center">{d.username}</span>
                      <span className="w-[200px] text-center">{d.computername}</span>
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
