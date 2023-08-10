import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <figure className="h-10 w-10 rounded-full overflow-hidden relative">
        <Image
          src="https://github.com/lui7henrique.png"
          className=""
          alt="profile"
          fill
        />
      </figure>

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Luiz Henrique
        </span>
        <span className="truncate text-sm text-zinc-500">
          7henrique18@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
