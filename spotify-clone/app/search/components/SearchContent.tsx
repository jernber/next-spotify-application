'use client'

import { Song } from "@/types"

interface SearchContentInterface {
    songs: Song[]
}

const SearchContent: React.FC<SearchContentInterface> = ({ songs }) => {
    if (songs.length === 0 ){
        return(
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">No songs found.</div>
        )
    }

  return (
    <div>SearchContent</div>
  )
}

export default SearchContent